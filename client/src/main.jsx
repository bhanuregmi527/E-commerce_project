import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
 import { BrowserRouter } from 'react-router-dom'
 import "antd/dist/reset.css";
 import { createSlice, configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux' 
import { composeWithDevTools } from '@redux-devtools/extension';
import create from '@ant-design/icons/lib/components/IconFont.js'
import rootReducer from './reducers/index.jsx'

const counterSlice = createSlice(rootReducer)


//create store
const store= configureStore({
  reducer: counterSlice.reducer,
  devTools:composeWithDevTools(),
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <Provider store={store}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
      </Provider>
   
  </React.StrictMode>,
)
