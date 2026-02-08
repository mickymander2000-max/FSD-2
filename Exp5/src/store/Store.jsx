import { combineReducers, createStore } from "redux";
import { CounterReducer } from "./CounterReducer.jsx";
import { NotesReducer } from "./NotesReducer.jsx";

const rootReducer = combineReducers({
	counter: CounterReducer,
	notes: NotesReducer
});

// pass this store to Provider in main.jsx
export const store = createStore(rootReducer);
