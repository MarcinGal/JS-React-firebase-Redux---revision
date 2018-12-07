import React from 'react'
import PassingPropsPrim from './PassingPropsPrim'

const PassingProps = (props) => (
    <div>
        <PassingPropsPrim
        passingValue={props.passingValue}
        passingFun={props.passingFun}
        />
    </div>
)

export default PassingProps