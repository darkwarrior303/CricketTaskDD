import { combineReducers } from "@reduxjs/toolkit";
import playerReducer from "./playerReducer";
import teamReducer from "./teamReducer";
import matchReducer from "./matchReducer";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  storage,
  version: 1
}

const rootReducer = combineReducers({
  players: playerReducer,
  teams: teamReducer,
  matches: matchReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer;