import React, { useState } from "react";

function Password() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <input type={show ? "text" : "password"} />
      <label onClick={() => setShow(true)}>{show ? "Hide" : "Show"}</label>
    </div>
  )
}

export default Password;
