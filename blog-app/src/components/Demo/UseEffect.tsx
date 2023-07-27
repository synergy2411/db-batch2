import { useEffect, useState } from "react";

export default function UseEffect() {
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    console.log("First Use effect works!");
  }, []);

  //   useEffect(() => {
  //     console.log("Second Use effect works!");
  //   }, [toggle]);

  useEffect(() => {
    console.log("Second Use effect works!");
    return function () {
      console.log("Clean Up!");
    };
  }, [toggle]);

  return (
    <div>
      <h1>Use Effect Demo</h1>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>
      {toggle && (
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae,
          dicta.
        </p>
      )}
    </div>
  );
}
