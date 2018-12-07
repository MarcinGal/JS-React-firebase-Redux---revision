import React from 'react'
import PassingPropsBis from './PassingPropsBis'

const PassingPropsPrim = (props) => (
    <div>
        <PassingPropsBis
        passingValue={props.passingValue}
        passingFun={props.passingFun}
        />
    </div>
)

export default PassingPropsPrim