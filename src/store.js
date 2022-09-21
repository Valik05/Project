import { createStore } from "redux";
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer, composeWithDevTools())
const persistor = persistStore(store)
export default store
export {persistor}