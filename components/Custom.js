import React from "react";

function Custom() {
    return (
      <div className="container">
        <h1>Custom <b>Tailored</b> Package For Your Need</h1>
        <p>Let's discuss Your requirements,we are sure we will have a package that suits your need. </p>
        <style jsx>{`
          .container {
            align-items:center;
            background-color:blue; 
            color: white;
            text-align:center;
          }
          p {
            text-align:center;
          }
          h1{
            color:white;
          }
        `}</style>
      </div>
    )
  }
  
  export default Custom