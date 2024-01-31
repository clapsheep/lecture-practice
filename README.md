# 체크 박스 인풋 컴포넌트 만들기 [04.homeWork.jsx]

## 과정 및 의도

### 1. 컴포넌트 만들기

```jsx
function Checkbox({ name, children, index, ...restProps }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleClick = (e) => {
    const { target } = e;
    setIsChecked(target.checked);
  };
  console.log(isChecked);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }} {...restProps}>
      <input
        style={{ width: 24, height: 24 }}
        type="checkbox"
        name={name}
        id={name}
        index={index}
        checked={isChecked}
        onChange={handleClick}
      />
      <label
        style={{
          fontSize: 24,
          color: 'black',
          verticalAlign: 'center',
        }}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}
```

- 1차로 구현했던 상태관리는 해당 컴포넌트의 checked 여부를 React에 의해 관리되게끔 잘만들었다고 생각한다.

### 2. 마크업 및 디자인하기

- [x] 총 5가지의 Input:check 요소와 2가지의 버튼(제출하기 및 다시 선택하기)으로 구성했다.
- [ ] 전체선택 버튼을 누르면 4가지 버튼 모두 클릭이 되며, 각각의 버튼을 누르면 `checked` true, false가 되게 하고 싶었다.
- [ ] 제출하기 버튼을 누르면 결과 값이 객체로 반환되게 한다

### 3. 이벤트 핸들링 절차

- [x] 1. 우선 위의 마크업처럼 각각 컴포넌트에 대한 상태를 관리한다
- [ ] 2. 이벤트를 통합시켜 한번에 관리한다.
- [ ] 3. 전체선택을 구현한다.

## 결과 : <strong>실패!!</strong>

#### 실패요인 : 이벤트를 통합시키는 과정에서 실패 했다.

각각 Input의 index를 활용해, 클릭 시 해당 Input의 인덱스로 상태를 관리하려했고,<br/>

수업시간에 예제로 진행한 것처럼 <br/>
만약 0번 인덱스가 클릭이 된다면, 나머지 1,2,3,4번 인덱스를 가진 Input도 체크되게 하고 싶었다.

하지만 우선, index를 활용해 상태관리하는 것부터 실패했다. 어디서 잘못됐고, 무엇을 놓쳤는지 모르겠다. 어떻게 하는지 아직 잘모르겠다.

## 내일 이 내용이 내 것이 될 때까지, 이해될 때까지 야무쌤을 괴롭히겠다!!!

```jsx
function Checkbox({ name, children, index, ...restProps }) {
  const [isCheckedIndex, setIsCheckedIndex] = useState();

  const handleClick = (e) => {
    setIsCheckedIndex(index);
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }} {...restProps}>
      <input
        style={{ width: 24, height: 24 }}
        type="checkbox"
        name={name}
        id={name}
        index={index}
        onChange={handleClick}
      />
      <label
        style={{ fontSize: 24, color: 'black', verticalAlign: 'center' }}
        htmlFor={name}
      >
        {children}
      </label>
    </div>
  );
}
```
