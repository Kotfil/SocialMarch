import * as serviceWorker from './serviceWorker';
import {reRenderEntireTree} from "./render";
import store from "./redux/store";
import './index.css';


store.subscribe(() => {
    reRenderEntireTree();
});

reRenderEntireTree();


serviceWorker.unregister();
