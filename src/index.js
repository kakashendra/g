import './index.css';
import {rerenderEntireTree} from './render';
import store from './redux/state';

rerenderEntireTree(store);
