import React, {useReducer} from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD_GUITAR':
            return {numGuitars: state.numGuitars + 1, showEmoji:true}
        case 'REMOVE_GUITAR':
            return {numGuitars: state.numGuitars - 1, showEmoji:false}
        case 'RESET':
            return {numGuitars:1, showEmoji:false}
        default:
            return state
    }
}

function Reducer() {
    const [state, dispatch] = useReducer(reducer, {numGuitars:1, showEmoji: false})
    return (
        <div>
            <h1>{'guiatr'.repeat(state.numGuitars)}</h1>
            <button onClick={() => dispatch({type:'ADD_GUITAR'})}>Add Guitar</button>
            <button onClick={() => dispatch({type:'REMOVE_GUITAR'})}>Remove Guitar</button>
            <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
            {state.showEmoji && <h2>'Happy'</h2>}

        </div>
    )
}

export default Reducer
