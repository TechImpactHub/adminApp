import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

export const client = new ApolloClient({
    // uri: "http://192.168.0.17:8000/graphql",
    uri: "https://blockchain.guta.digital/graphql",
    cache: new InMemoryCache()
  });


