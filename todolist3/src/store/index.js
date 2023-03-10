import { createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer";
import todoSagas from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
  );

const store = createStore(
    reducer,
    enhancer
)

// then run the saga
sagaMiddleware.run(todoSagas);

export default store;