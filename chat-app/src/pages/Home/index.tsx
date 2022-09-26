import { gql } from "@apollo/client";
import React, { useEffect, useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { apolloClient } from "../../api/apolloClient";
import { useRecoilState } from "recoil";
import { userSessionAtom } from "../../recoil/atoms/userSession";


const query = gql`
  {
    userSession(me: true) {
      user {
        username
      }
    }
  }
`;
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userSession, setUserSession] = useRecoilState(userSessionAtom);
  let [color, setColor] = useState("#ffffff");

  useEffect(() => {
    apolloClient.query({ query }).then((res) => {
      const userSession = res.data?.userSession ?? null;
      console.log("User session is: ", userSession)
      setUserSession(userSession);

      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <ClipLoader color={color} cssOverride={override} size={150} />
  ) : (
    <>
      <h1>{JSON.stringify(userSession, null, 2)}</h1>
    </>
  );
};
