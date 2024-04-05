import React from "react";
import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { RootState, getStoreWithState } from "./app/store";
import { Product } from "./app/api";

export function renderWithContext(
    element: React.ReactElement, 
    state?: RootState
) {
    const store = getStoreWithState(state);
    const utils = render(
    <Provider store={store}>
        <Router>{element}</Router>
        </Provider> 
    );
}

export function getStateWithItems(
    items: Record<string, number>, 
    products: Record<string, Product> ={}
): 
    RootState {
    const state: RootState = {
      products: { products: {} },
      cart: { errorMessage: "", checkoutState: "READY", items }
    }
    return state
  }