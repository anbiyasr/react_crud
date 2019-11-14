const redux = require ('redux');
const createStore = redux.createStore;

const initialState = {
    name: 'anbiya'
}
//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'ADD_NAME'){
        return{
            ...state,
            name: state.name + action.value
        }
    }
    return state;
};

//store
const store = createStore(rootReducer);
console.log(store.getState());

//Subsription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

//Dispatching Action
store.dispatch({type: 'ADD_NAME', value: ' thor'});
console.log(store.getState());

