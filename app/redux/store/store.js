import { createStore, applyMiddleware , compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import rootReducer from './../reducers/index.js'
const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
)(createStore);


export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState )
}