import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './store';
import MainRoutes from './Routes/MainRoutes';
import { BrowserRouter } from 'react-router-dom'
import SearchContextProvider from "./context/search-context";

const App = () => {
  return (
    <Provider store={store}>
      <SearchContextProvider>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header />
            <MainRoutes />
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </SearchContextProvider>
    </Provider>
  )
}
export default App;
