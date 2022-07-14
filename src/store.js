import { legacy_createStore } from "redux";
import rootreducer from "./reducers/rootreducer";


const store = legacy_createStore(rootreducer);

export default store