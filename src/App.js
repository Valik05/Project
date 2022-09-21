import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <Footer />
      </PersistGate>
    </Provider>
  )
}

export default App
