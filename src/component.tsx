import {gql, useQuery} from "@apollo/client";

const GET_RESTAURANT = gql`
    {
        restaurant_all(input:{
            page:1
        }){
            ok,
            results{
                name
            }
        }
    }
`;

export function Component() {
    const {loading,error,data} = useQuery(GET_RESTAURANT)

    console.log({loading,error,data})

    return <div>Component is {loading ? "loading" : "loaded"}</div>
}
