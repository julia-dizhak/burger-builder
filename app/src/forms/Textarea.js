import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    font-weight: 500;
    display: block;
    margin: 0 0 15px 0;
    text-align: left;
    cursor: pointer;
`;

function _Textarea(props) {
    const { label, name, cols, rows, placeholder } = props;
   
    return (
        <div>
            <Label>{ label }</Label>
            <textarea 
                className={props.className}
                name={name} 
                rows={rows} 
                cols={cols} 
                placeholder={placeholder}
            />
        </div>    
    )
}

const Textarea = styled(_Textarea)`
    display: block;
    margin: 5px 0 0 0;
    width: 100%;
    border: 1px solid #ccc;
    box-sizing: border-box;
`;

export default Textarea;