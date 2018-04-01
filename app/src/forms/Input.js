import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-weight: 500;
    display: block;
    margin: 0 0 15px 0;
    text-align: left;
    cursor: pointer;
`;

function _Input(props) {
    const { label, type, name, placeholder } = props;
    //let element = null;

    // switch (props.elementtype) {
    //     case ('input'):
    //         element = <input {...props} />;
    //         break;
    //     case ('textarea'):
    //         element = <textarea {...props} />;
    //         break;
    //     default:
    //         element = <input {...props} />;     
    // }

    return (
        <div>
            <Label>
                { label }
                <input
                    className={props.className}
                    type={type} 
                    name={name}
                    placeholder={placeholder}
                />
            </Label>
        </div>    
    )
}

const Input = styled(_Input)`
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px 0 0 0;
    box-sizing: border-box;
`;

export default Input;