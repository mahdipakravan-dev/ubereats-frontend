import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './tailwind.css'
import {client} from "./apollo";
import {ApolloProvider} from "@apollo/client";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>
)
