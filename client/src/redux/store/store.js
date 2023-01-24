import { createStore, applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import apiReducer from '../reducer/reducer';

const store = createStore(apiReducer, applyMiddleware(thunk));
// const store = configureStore({reducer : apiReducer , middleware : [thunk]})

export default store;










//NOS TRAEMOS TODOS POR GLOBAL , LOS POKEMONES , EL PREVIEW  Y EL NEXT // CREAOS UNA FUNCION QUE ALTERE EL ESTADO 
//REDERIZAR SI HAY ALGO EN EL NEXT O EN EL PREVIEW 