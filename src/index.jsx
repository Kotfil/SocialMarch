import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import './index.css';
import {Provider} from "react-redux";




let renderAll = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));
};

store.subscribe(renderAll);

renderAll();


serviceWorker.unregister();
