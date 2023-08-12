import React, { useState, useEffect } from "react";


//useEffect란 리액트 훅의 일종이다.
//useEffect는 마운트 이후 렌더링 과정에서 일어나는 일을 반영해주므로
//useEffect안에 있는 것은 마운트에서 일어난 변화를 적용해준다
//그러므로 count변수에 변화를 주지 않아도 JSX안에서 일어난 변화로 바뀌게 된다
function Effect() {
  var[count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <p> You clicked {count} times</p>
      <button
        onClick={() => {
          console.log("Click");
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <button onClick = {() => {
        console.log("Reset");
        setCount(count = 0);
      }}>Reset</button>
    </>
  );
}

export default Effect;
