import {ApolloClient, InMemoryCache, makeVar} from '@apollo/client';

const token = localStorage.getItem("UBER__TOKEN");
export const isLoggedInVar = makeVar(Boolean(token));

export const client = new ApolloClient({
    uri : "http://localhost:1234/graphql",
    cache : new InMemoryCache({
        typePolicies : {
            Query : {
                fields : {
                    isLoggedIn : {
                        read() {
                            return isLoggedInVar
                        }
                    }
                }
            }
        }
    })
})
