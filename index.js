//store
const redux = require('redux')
const createStore= redux.createStore    



const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//action function
function buyCake(){
    return{
        type : BUY_CAKE,
    }    
}

function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

//state of application
const initialState = {
    numOfCakes : 10,
    numOfIcecreams: 20,
}

//reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case BUY_ICECREAM: return{
            ...state,
            numOfIcecreams: state.numOfIcecreams - 1
        }

        default: return state
    }
}

const store = createStore(reducer)
console.log('initial state ', store.getState())
const unsubscribe = store.subscribe( () => console.log('Updated State ', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()

