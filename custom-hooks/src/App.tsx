import { useState, useEffect } from "react";
// useLatest：永远返回最新的值，可以避免闭包问题。
import { useLatest } from "./hooks";

function App() {
  const [count, setCount] = useState(0);
  const ref = useLatest(count);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(ref.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <div className="App">{count}</div>;
}

export default App;
