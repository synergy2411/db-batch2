import { useRef } from "react";

export default function Uncontrolled() {
  const inputRef = useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    console.log(inputRef.current?.value);
  };
  return (
    <div>
      <h1>Uncontrolled Element</h1>
      <input type="text" ref={inputRef} />
      <button type="button" className="btn btn-primary" onClick={clickHandler}>
        Get Value
      </button>
    </div>
  );
}
