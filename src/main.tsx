import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './tailwind.css'
import {client} from "./apollo";
import {ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
)
