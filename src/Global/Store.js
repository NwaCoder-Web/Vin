import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import slice from './Slice'

const persistConfig = {
    key : 'root',
    storage,
  };

// create a persisted reducer
const persistedReducer = persistReducer(persistConfig, slice )

export const store=configureStore({
    reducer:{
        cart:persistedReducer
    }
})
export const persistor = persistStore(store)