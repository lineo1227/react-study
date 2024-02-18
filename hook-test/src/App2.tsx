import { useEffect, useState, useLayoutEffect } from "react";

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    queryData().then((data) => {
      setNum(data);
    });
  }, [num]);
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(num);
    }, 1000);
    return () => {
      console.log("clean up");
      clearTimeout(timer);
    };
  }, [num]);

  return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>;
}

export default App;
