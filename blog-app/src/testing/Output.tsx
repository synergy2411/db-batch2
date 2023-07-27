import React, { useState } from "react";

export default function Output() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div>
      <h1>Some Demo Output</h1>
      <button onClick={() => setToggle(true)}>Toggle</button>
      {toggle && <p>Toggle is true</p>}
      {!toggle && <p>Toggle is false</p>}
    </div>
  );
}
