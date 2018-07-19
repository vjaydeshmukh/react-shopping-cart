import PanelsVisibility from './PanelsVisibility';
import Basket from './Basket';
import FilterReducer from './FilterSize';
import Counter from './CountProducts';
import {createStore, combineReducers} from 'redux';

const Reducer = combineReducers({Counter, FilterReducer, PanelsVisibility, Basket});

export const store = createStore(Reducer);

// статические методы, ec5, ec6,
// чем отличаются об обычных методов и примеры использования.

