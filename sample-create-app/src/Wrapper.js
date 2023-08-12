import React from 'react';

//만약 컴포넌트 사이에 어떠한 다른 컴포넌트가 들어간다면 children을 넣어야 정상작동해야댐
function Wrapper({children}) {
    const style = {
        border: '1px solid red',
        padding: '12px',
    };

    return <div style = {style}>{children}</div>
}

export default Wrapper;