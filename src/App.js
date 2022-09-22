import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';
import MainRoutes from './Routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <MainRoutes />
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
export default App;
