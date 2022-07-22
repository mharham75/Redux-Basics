/***
 * replaced single reducer with multiple reducers
 * added combine reducers 
 */
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return{
        type: BUY_CAKE
    }
}
function buyIcecream(){
    return{
        type: BUY_ICECREAM
    }
}

//reducer
const initialCakeState = {
    numOfCakes: 500
}
const initialIcecreamState = {
    numOfIceCreams: 40
}

const cakeReducer = (state=initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}

const icecreamReducer = (state=initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state
    }
}

const rootReduer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer
})

const store = createStore(rootReduer)
console.log('initial state => ', store.getState())
const unsubscribe = store.subscribe( () => console.log('Updated state => ' , store.getState()))
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
unsubscribe()