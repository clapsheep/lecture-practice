import { useState } from 'react';
import classes from './02.practice.module.css';
import { range } from '@/utils';

function Son({ onActive, isClick, value, index }) {
  const textDecoration = isClick ? 'underline' : 'none';
  const color = isClick ? 'purple' : 'inherit';

  const handleClick = (e) => {
    e.preventDefault();
    onActive(index);
  };

  return (
    <div>
      <h3>
        <a
          href=""
          onClick={handleClick}
          style={{ color, textDecoration, textUnderlineOffset: 4 }}
        >
          자식컴포넌트{value}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 1, end = 3 }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveSon = (sonIndex) => {
    setActiveIndex(sonIndex);
  };

  return (
    <div>
      <h2>부모컴포넌트</h2>
      <ul>
        {range(start, end).map((n, index) => {
          const activeSon = activeIndex === index;
          return (
            <li key={n}>
              <Son
                index={index}
                value={n}
                isClick={activeSon}
                onActive={handleActiveSon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Exercise() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default Exercise;
