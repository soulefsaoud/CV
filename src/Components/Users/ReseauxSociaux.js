import React from "react";
import FacebookBtn from '../Publiq/FacebookBtn';
import GithubBtn from '../Publiq/GithubBtn';
import GoogleBtn from '../Publiq/GoogleBtn';
import TwitterBtn from "../Publiq/TwitterBtn";

const ReseauSociauxPage = () => {
  return (
    <div className="sociauxbt">

    <div className="google">
        <GoogleBtn />
      </div>
       
      <div className="twitter">
      <TwitterBtn />
      </div>
      
      <div className="facebbok">
      <FacebookBtn />
      </div>
      
      <div className="github">
      <GithubBtn />   
      </div>
     
      </div>

    
  );
};
export default ReseauSociauxPage;
