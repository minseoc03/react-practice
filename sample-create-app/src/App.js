import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper'
import Counter from './Counter'

//App component는 부모, Hello component는 자식
//그렇기 때문에 Hello component에서 일어나는 일이 App 까지 영향을 끼치지 않음
//ex) Hello.js에서 name이라는 변수를 건드려도 App의 name이 변하지 않음
function App() {
  return (
    <Wrapper>
      <Hello name = "React!" />
      <Hello name = "React!" />
      <Counter/>
    </Wrapper>
  );
}

export default App;