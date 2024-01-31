import { useState } from 'react';
import { A11yHidden, FormInput } from '@/components';
import { useId } from 'react';

function Exercise() {
  return (
    <div>
      <h2>폼 컨트롤</h2>
      <FormExample />
    </div>
  );
}

const INITIAL_FEEL_MESSAGE = '공부하기 좋은 날이네~';

// 컴포넌트 추출
function FormExample() {
  const [feelMessage, setFeelMessage] = useState(INITIAL_FEEL_MESSAGE);

  const handleUpdateFeelMessage = (nextMessage) => {
    setFeelMessage(nextMessage);
  };

  const handleChange = (e) => {
    setFeelMessage(e.target.value);
  };

  // email 상태 관리
  const [email, setEmail] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // agree 상태 관리
  const [agree, setAgree] = useState('동의');
  const handleRadio = (e) => {
    setAgree(e.target.value);
  };

  return (
    <>
      <form style={{ display: 'flex', flexFlow: 'column', gap: 20 }}>
        <FormInput
          label="오늘 기분"
          placeholder={INITIAL_FEEL_MESSAGE}
          value={feelMessage}
          onChange={handleChange}
        />
        <FormInput
          label="이메일"
          type="email"
          placeholder="user@company.dev"
          value={email}
          onChange={handleChangeEmail}
        />
        <CheckAorB
          name="agree"
          labelA="동의합니다."
          labelB="거부합니다."
          valueA="동의"
          valueB="거부"
          handleRadio={handleRadio}
          state={agree}
        ></CheckAorB>
        <ButtonGroup
          onUpdate={handleUpdateFeelMessage}
          resetMessage={INITIAL_FEEL_MESSAGE}
        />
        <FormOutput outputValue={feelMessage} />
        <FormTextarea value={feelMessage} onChange={handleChange} />
      </form>
    </>
  );
}

function FormTextarea({ value, onChange }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <A11yHidden as="label" htmlFor="feel-today-textarea">
        오늘 기분
      </A11yHidden>
      <textarea id="feel-today-textarea" value={value} onChange={onChange} />
    </div>
  );
}

function ButtonGroup({
  onUpdate,
  displayMessage = '맑음',
  resetMessage = '날씨 모름',
}) {
  return (
    <div style={{ marginBlockStart: 12, display: 'flex', gap: 4 }}>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(displayMessage);
        }}
      >
        표시
      </button>
      <button
        type="button"
        onClick={() => {
          onUpdate?.(resetMessage);
        }}
      >
        초기화
      </button>
    </div>
  );
}

function FormOutput({ outputValue }) {
  return (
    <div
      style={{
        border: '1px solid',
        marginBlock: 12,
        borderRadius: 6,
        padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <output>{outputValue}</output>
    </div>
  );
}
function CheckAorB({
  name,
  labelA,
  labelB,
  valueA,
  valueB,
  handleRadio,
  state,
}) {
  const idForA = useId();
  const idForB = useId();
  return (
    <div>
      <label htmlFor="idForA">{labelA}</label>
      <input
        id="idForA"
        type="radio"
        name={name}
        value={valueA}
        onChange={handleRadio}
        checked={state === valueA}
      />
      <label htmlFor="idForB">{labelB}</label>
      <input
        id="idForB"
        type="radio"
        name={name}
        value={valueB}
        onChange={handleRadio}
        checked={state === valueB}
      />
    </div>
  );
}

export default Exercise;
