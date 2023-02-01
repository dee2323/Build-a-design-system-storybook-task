import React from 'react'
import './style.css'
const Button = ({ color, backgroundColor, padding, lable, size }) => {
    let width = size === 'Medium' ? '30%' : (size === 'Small' ? '10%' : '60%');
    let borderColor = lable === 'Secondary' ? color : lable === 'Primery' ? backgroundColor : 'transparent';
    let bkGroundColor = lable === 'Primary' ? backgroundColor : 'white';
    return <button
        style={{
            width: width,
            color: color,
            backgroundColor: bkGroundColor,
            padding: padding,
            borderColor: borderColor,
        }} className={`${lable === 'Text' ? 'text' : ''}`}
    > {lable}</button >
}
export default Button;