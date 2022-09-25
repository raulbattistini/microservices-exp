import React from "react";
import { RoutesList } from "./routes";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./api/apolloClient";

export default function App() {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <RoutesList />
        </RecoilRoot>
      </ApolloProvider>
    </div>
  );
}
