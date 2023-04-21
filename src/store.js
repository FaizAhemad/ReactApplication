import {legacy_createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootreducer from './reducers/rootreducer';

const persistConfig = {
  key: 'main-root',
  storage,
};

const PersistReducer = persistReducer(persistConfig, rootreducer);
const store = legacy_createStore(PersistReducer);
const Persistor = persistStore(store);
export {Persistor};
export default store;
