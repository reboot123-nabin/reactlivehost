import React from "react";

import {Link} from "react-router-dom";
const Error=()=>{
    return(
    <>
    <div class="Wrapper">
        
      <h2>Oops! Page not found.</h2>
      <div>
        <img src="./img/notfound.png" alt=""/>

      </div>
      <h4>we can't find the page that you are lookign for</h4>
      <button type="button" class="main-btn"><Link to="/">GO BACK HOME</Link></button>
    </div>
    </>
    );
}

export default Error;