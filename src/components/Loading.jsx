import React from "react";
import { useEffect } from "react";
import '../css/Loading.css';

function Loading() {

  useEffect(()=>{
    console.log("cagando")

    return ()=>{
      console.log("ya no cagando")
    }
  },[])




  return (
    <div>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loading;
