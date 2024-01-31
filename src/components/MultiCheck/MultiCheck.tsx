import React from 'react';
import { useId } from 'react';

type MultiCheckProps = {
  checkList: string[];
};

const MultiCheck: React.FC<MultiCheckProps> = ({ checkList }) => {
  return (
    <div>
      {checkList.map((item) => {
        const id = useId();
        return (
          <div key={id}>
            <input type="checkbox" id={id} />
            <label htmlFor={id}>{item}</label>
          </div>
        );
      })}
    </div>
  );
};

export default MultiCheck;
