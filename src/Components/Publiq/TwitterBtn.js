import TwitterLogin from "react-twitter-login";

const TwitterBtn = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <TwitterLogin
      authCallback={authHandler}
      consumerKey="OSoLPLGBsY5zd92YHJcGQAa8P"
      consumerSecret="3u7yoVoaTqPt7dyfhkzJA0jtahljiwI39tZ5ayKZPqHxgA1piz"
    />
  );
};
export default TwitterBtn;
