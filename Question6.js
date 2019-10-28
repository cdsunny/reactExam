import React, { useState } from 'react';
function InputNumber(props) {
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value;
    return (
        <div>
            <input type="text" value={value} onChange={props.onChange} />
        </div>
    )
}
function Test() {
    const [value, setValue] = useState('aaa')
    return (
        <div>
            <InputNumber value={value} onChange={(e) => setValue(e.target.value)} />
            <InputNumber defaultValue={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    )
}
export default Test;