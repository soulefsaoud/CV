import TwitterLogin from "react-twitter-login";

const TwitterBtn = () => {
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
export default TwitterBtn;
