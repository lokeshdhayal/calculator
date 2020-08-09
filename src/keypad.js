import React from 'react'


const keyPad = (props) => {
    return (
        <div>
            <div style={{display:"flex"}}>
            <button className="calBtn" name = "(" onClick = {(e)=>props.onClickHandler(e.target.name)}>(</button>
            <button className="calBtn" name = "CE" onClick = {(e)=>props.onClickHandler(e.target.name)}>CE</button>
            <button className="calBtn" name = ")" onClick = {(e)=>props.onClickHandler(e.target.name)}>)</button>
            <button className="calBtn" name = "C" onClick = {(e)=>props.onClickHandler(e.target.name)}>C</button>
            </div>

            <div style={{display:"flex"}}>
            <button className="calBtn" name = "1" onClick = {(e)=>props.onClickHandler(e.target.name)}>1</button>
            <button className="calBtn" name = "2" onClick = {(e)=>props.onClickHandler(e.target.name)}>2</button>
            <button className="calBtn" name = "3" onClick = {(e)=>props.onClickHandler(e.target.name)}>3</button>
            <button className="calBtn" name = "+" onClick = {(e)=>props.onClickHandler(e.target.name)}>+</button>
            </div>

            <div style={{display:"flex"}}>
            <button className="calBtn" name = "4" onClick = {(e)=>props.onClickHandler(e.target.name)}>4</button>
            <button className="calBtn" name = "5" onClick = {(e)=>props.onClickHandler(e.target.name)}>5</button>
            <button className="calBtn" name = "6" onClick = {(e)=>props.onClickHandler(e.target.name)}>6</button>
            <button className="calBtn" name = "-" onClick = {(e)=>props.onClickHandler(e.target.name)}>-</button>
            </div>

            <div style={{display:"flex"}}>
            <button className="calBtn" name = "7" onClick = {(e)=>props.onClickHandler(e.target.name)}>7</button>
            <button className="calBtn" name = "8" onClick = {(e)=>props.onClickHandler(e.target.name)}>8</button>
            <button className="calBtn" name = "9" onClick = {(e)=>props.onClickHandler(e.target.name)}>9</button>
            <button className="calBtn" name = "*" onClick = {(e)=>props.onClickHandler(e.target.name)}>*</button>
            </div>

            <div style={{display:"flex"}}>
            <button className="calBtn" style={{fontSize:20}} name = "." onClick = {(e)=>props.onClickHandler(e.target.name)}>.</button>
            <button className="calBtn" name = "0" onClick = {(e)=>props.onClickHandler(e.target.name)}>0</button>
            <button className="calBtn" name = "=" onClick = {(e)=>props.onClickHandler(e.target.name)}>=</button>
            <button className="calBtn" name = "/" onClick = {(e)=>props.onClickHandler(e.target.name)}>/</button>
            </div>


        </div>
    )
}
export default keyPad