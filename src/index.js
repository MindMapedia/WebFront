import React from 'react'
import { render } from 'react-dom'
import { createStore} from 'redux'
// import { createStore, applyMiddleware} from 'redux'
// import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
