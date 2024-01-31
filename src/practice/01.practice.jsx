import classes from './01.practice.module.css';
import { A11yHidden } from '@/components';
import { useState } from 'react';
import { useId } from 'react';

function Accordion() {
  const headlineID = useId();
  const [openedPanelIndex, setOpenedPanelIndex] = useState(0);
  const handleOpenPanel = (index) => {
    setOpenedPanelIndex(index);
  };

  return (
    <article className={classes.Accordion} aria-labelledby={headlineID}>
      <A11yHidden as="h2" id={headlineID}>
        아코디언을 사용해 컨포넌트간 상태공유
      </A11yHidden>
      <AccordionPanel
        index={0}
        isOpen={openedPanelIndex === 0}
        onToggle={handleOpenPanel}
      >
        <p>아코디언 컴포넌트는 ..... 1</p>
      </AccordionPanel>
      <AccordionPanel
        index={1}
        isOpen={openedPanelIndex === 1}
        onToggle={handleOpenPanel}
      >
        <p>아코디언 컴포넌트는 ..... 2</p>
      </AccordionPanel>
    </article>
  );
}

function AccordionPanel({
  isOpen = false,
  onToggle,
  children,
  index,
  ...restProps
}) {
  return (
    <div className={classes.AccordionPanel} {...restProps}>
      <button type="button" onClick={() => onToggle(index)}>
        {isOpen ? '닫힘' : '열림'}
      </button>
      <div hidden={!isOpen}>{children}</div>
    </div>
  );
}

function Exercise() {
  return (
    <div>
      <h2>상태 끌어올리기</h2>
      <Accordion></Accordion>
    </div>
  );
}

export default Exercise;
