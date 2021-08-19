import React from 'react';
import {GoogleLogin ,GoogleLogout}from 'react-google-login';



const styles = {
  img:{
     borderRadius:"50%",
     width:"32px",
     height:"32px",
     border:"2px solid #bdc3c7"

  },
  dropdown: {
    background:"transparent",
    borderColor:"transparent",   

  },

};

const GoogleBtn=()=>{
const CLIENT_ID = "434550360411-pcmbv244guqht6cvhk8shadi4kv6t71u.apps.googleusercontent.com";
const current=null;
const handleLoginSuccess = (response)=>{};
const handleLogoutSuccess = (response)=>{};
const handleLoginFailure = (response)=>{};
const handleLogoutFailure = (response)=>{};
return(
<>
{current ? (
<>

<div class="dropdown">
<button
  class="btn btn-secondary dropdown-toogle"
  type="button"
  id="dropdownMenuButton2"
  data-bs-toogle="dropdown"
  aria-expanded="false"
>
 <img
   width="32"
   height="32"
   src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimilarpng.com%2Fillustration-of-google-icon-on-transparent-background-png%2F&psig=AOvVaw2iHszoeMk7KCXpBiBTPdji&ust=1629449687207000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNDchaLbvPICFQAAAAAdAAAAABAD"
   style={styles.img}
   alt="profile"
  />
</button>
<ul
  style={styles.dropdown}
  class="dropdown-menu dropdown-menu-dark"
  aria-labelledby="dropdownMenuButton2"
>

<li>
<GoogleLogout
clientId={CLIENT_ID}
buttonText="Logout"
onLogoutSuccess={handleLogoutSuccess}
onFailure={handleLogoutFailure}

/>
</li>
</ul>
</div>

</>
) : (
<GoogleLogin
clientId={CLIENT_ID}
buttonText="Login"
onSuccess={handleLoginSuccess}
onFailure={handleLoginFailure}
cookiePolicy={"single_host_origin"}
responseType="code,Token"
/>

)}
</>

);

};
export default GoogleBtn;




















