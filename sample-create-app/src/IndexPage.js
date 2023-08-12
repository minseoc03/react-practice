import React from "react";
import { useNavigate } from "react-router-dom";

function IndexPage() {
  var navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <>
      <h2>Index</h2>
      <button onClick = {handleClick}> Go Home </button>
    </>
  );
}

export default IndexPage;
