import { legacy_createStore } from "redux";
import rootreducer from "./reducers/rootreducer";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key:'main-root',
    storage
}

const PersistReducer = persistReducer(persistConfig,rootreducer);
const store = legacy_createStore(PersistReducer);
const Persistor = persistStore (store); 
export {Persistor};
export default store;