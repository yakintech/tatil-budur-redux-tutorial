import React, { useState } from 'react'
import { connect } from 'react-redux'
import { counterAction } from '../store/actions/counter.action'

function CounterOperation(props) {

    const [value, setvalue] = useState(0)


    return (<>
        <h1>Counter Operation</h1>
        <hr />
        <h1>Counter<h1>{props.globalState.counterReducer}</h1></h1>
        <button onClick={() => props.increase()}>Increase</button>
        <button onClick={() => props.decrease()}>Decrease</button>
        <button onClick={() => props.empty()}>Empty</button>

        <hr />
        <input type="text" onChange={(e) => setvalue(e.target.value)} />
        <button onClick={() => props.increaseByValue(Number(value))}>Increase By Value</button>
    </>
    )
}




const mapStateToProps = (state) => {

    return {
        globalState: state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        increase: () => {
            dispatch(counterAction.INCREASE())
        },
        decrease: () => {
            dispatch(counterAction.DECREASE())
        },
        empty: () => {
            dispatch(counterAction.EMPTY())
        },
        increaseByValue: (data) => {
            dispatch(counterAction.INCREASEBYVALUE(data))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CounterOperation)