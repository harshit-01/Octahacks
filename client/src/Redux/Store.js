import { configureStore } from '@reduxjs/toolkit'
import RootReducer from './reducers/RootReducer';

const Store = configureStore({
    reducer: RootReducer,
  })
  
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers/RootReducer', () => {
      //const newRootReducer = require('./reducers/RootReducer').default
      //Store.replaceReducer(newRootReducer)
    })
  }
  
export default Store