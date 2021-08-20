import React from "react";
import FacebookLogin from "react-facebook-login";
import GithubBtn from "./GithubBtn";

const responseFacebook = (response) => {};

const btnReseux = () => {
  return (
    <FacebookLogin
      appId="517619699333646"
      autoLoad
      callback={responseFacebook}
      render={(renderProps) => (
        <button onClick={renderProps.onClick}>Facebook bouton</button>
      )}
    />
  );
};
export default btnReseux;
