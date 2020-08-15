import React from "react";
import { render } from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import Item from "./Item";
// import "./style.css";


const client = new ApolloClient({ uri: "http://localhost:1337/graphql" });

const ApolloApp = ({AppComponent}) => (
    <ApolloProvider client = {client}>
        <AppComponent />
    </ApolloProvider>
);

render (<ApolloApp AppComponent = {App}/>, document.getElementById("root"));

// client
//   .query({
//     query: gql`
//       query {
//         classes {
//           classname
//           endDate
//           startDate
//           created_at
//           classimg {
//             url
//           }
//         }
//       }
//     `,
//   })
//   .then((results) => console.log(results));

// function App() {
//   return <h1>React is working</h1>;
// }
// render(<App />, document.getElementById("root"));
