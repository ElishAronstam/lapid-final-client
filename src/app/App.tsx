import React from 'react';
import {Provider} from 'react-redux';
import Layout from "../components/layoutComps/Layout";
import {myStore} from "./store";

function App() {
    return (
        <Provider store={myStore}>
            <Layout/>
        </Provider>
    );
};

export default App;
