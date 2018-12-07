import React from 'react'

const PassingPropsBis = (props) => (
    <div>
    <h4>
        {props.passingValue}
    </h4>
    <button
    onClick={props.passingFun}
    >Click me
    </button>
    </div>
)

export default PassingPropsBis