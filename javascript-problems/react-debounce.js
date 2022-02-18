import { useState, useRef, useEffect } from "react";
import "./styles.css";

export default function App() {
  const value = useRef("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleChange(e) {
    value.current = await e.target.value;
    setIsLoading(true);
  }

  useEffect(() => {
    let timeout;
    if (isLoading) {
      timeout = setTimeout((e) => {
        console.log("value.current", value.current);
        setIsLoading(false);
      }, 1000);
    }
    return function () {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      {isLoading ? (
        <p> loading ...</p>
      ) : (
        <p> the searched value is {value.current}</p>
      )}
    </div>
  );
}
