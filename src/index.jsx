
import * as serviceWorker from './serviceWorker';
import {reRenderEntireTree} from "./render";
import state from "./redux/state";



reRenderEntireTree(state);


serviceWorker.unregister();
