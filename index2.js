const redux = require('redux') //step 3.1 get redux library
const createStore = redux.createStore   //step 3.2 || 
/* 
redux provides a method createStore to store state 
we already defined state , need createStore to hold state of our application
*/

//action step 1
//action is a js object that has a type property
const BUY_CAKE = 'BUY_CAKE'
function buyCake(){
    return {
     type: BUY_CAKE
    } 
 }

 //reducer step 2
 const initialState = {
     numOfCakes: 100
 }
//reducers are pure function that accomodate state transitions , taking state and action as input
 const reducer = (state=initialState ,action) => {
     switch(action.type){
         case BUY_CAKE : return{
             ...state,
             numOfCakes: state.numOfCakes-1
         }
         default: return state
     }
 }

 const store = createStore(reducer) //step 3.3
 console.log('state initially =>' , store.getState()) //step 3.4
 const unsubscribe = store.subscribe( () => console.log('updated state => ', store.getState())) //step 3.5
 store.dispatch(buyCake())
 store.dispatch(buyCake()) //step 3.6
 unsubscribe() //step 3.7

 /**
  * 3.3 -> createStore accepts a reducer function as a parameter coz it has the initialState
  *         of the application. This is required for store to make state transitions based on 
  *         received actions
  * 3.4 -> getState() to get the current state of the application
  * 3.5 -> allow application to subscribe to changes in store (acheived using subscribe method)
  * 3.6 -> store has dispatch method , which accepts action , to update state of our application
  * 3.7 -> to unsubscribe from store
  */