import { createStore } from 'redux';

import cartReducer from "../components/reducers/cartReducer"

export const store = createStore(cartReducer);