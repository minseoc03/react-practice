import React from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import Input from "./Input";
import Effect from "./Effect";
import IndexPage from "./IndexPage";
import Home from "./Home";
import CustomHook from "./CustomHook"

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//App component는 부모, Hello component는 자식
//그렇기 때문에 Hello component에서 일어나는 일이 App 까지 영향을 끼치지 않음
//ex) Hello.js에서 name이라는 변수를 건드려도 App의 name이 변하지 않음
function App() {
  return (
    <>
      <Wrapper>
        <Hello name="React!" />
        <Hello name="React!" />
        <Counter />
        <Input />
        <Effect />
        <CustomHook />
      </Wrapper>

      {/* Usage of React Hook for moving page */}
      <BrowserRouter>
        <button>
          {/* 버튼을 누를 시 Link 내에 있는 주소로 이동 */}
          <Link to="/home">Home</Link>
        </button>
        <button>
          <Link to="/">Index</Link>
        </button>
        {/* 
          Routes tag controls all the page routes
          Path내에 있는 경로와 현재 경로가 같을 경우 element 내에 있는 component 실행
        */}
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
