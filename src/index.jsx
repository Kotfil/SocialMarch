import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import './index.css';
import StoreContext from "./StoreContext";




let renderAll = () => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter></StoreContext.Provider>,
        document.getElementById('root'));
};

store.subscribe(renderAll);

renderAll();


serviceWorker.unregister();
