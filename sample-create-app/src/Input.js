import React, { useState } from 'react';

function Input() {
    const [inputs, setInputs] = useState({
        subject: "",
        score: "",
    });

    const onChange = (event) => {
        const { value, name } = event.target;
        setInputs({
            ...inputs,
            //dynamic property assignment
            [name]: value
        })
    }
    return (
        <>
            <div>
                <h2>
                    Grade: {inputs.subject} {inputs.score}
                </h2>
                <input name = "subject" placeholder = "ex) Math" value = {inputs.subject} onChange = {onChange}/>
                <input name = "score" placeholder = "ex) 99" value = {inputs.score} onChange = {onChange}/>
            </div>
        </>
    );
}

export default Input;