import React from 'react';

//기본 형태
// function Hello(props) {
//     return <h1>Hello, {props.name}</h1>
// }

//비구조적 참조
function Hello({ name }) {
    return <h1>Hello, {name}</h1>
}

Hello.defaultProps = {
    name: "React!"
}

export default Hello;