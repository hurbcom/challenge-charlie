import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import promise from "redux-promise";
import thunkMiddleware from "redux-thunk";

import "./index.html";
import ContainerImagemFundo from "./components/ContainerImagemFundo/ContainerImagemFundo";
import reducers from "./reducers/reducers";

const store = applyMiddleware(promise, thunkMiddleware)(createStore)(reducers);

ReactDOM.render(
    <Provider store={store}>
        <ContainerImagemFundo />
    </Provider>,
    document.getElementById("root")
);
