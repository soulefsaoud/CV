import React from "react";
import TwitterLogin from "react-twitter-login";


export default (props) => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey="PyHxgJuyORZqhDiuKAne8LcxT"
      consumerSecret="RBqOgWJfflgk2GLGmKtHFnHituqvf3vROPfAqzOPpfKficIrI9"
    />
  );
};