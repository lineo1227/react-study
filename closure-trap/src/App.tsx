import {
  useEffect,
  useState,
  useReducer,
  Reducer,
  useRef,
  useLayoutEffect,
} from "react";

interface Action {
  type: "add" | "minus";
  num: number;
}
function reducer(state: number, action: Action) {
  switch (action.type) {
    case "add":
      return state + action.num;
    case "minus":
      return state - action.num;
  }
}
function App() {
  const [count, setCount] = useState(0);
  const [count2, dispatch] = useReducer<Reducer<number, Action>>(reducer, 0);
  // 第一种解法 不让它形成闭包
  // useEffect(() => {
  //   setInterval(() => {
  //     console.log(count);
  //     dispatch({ type: "add", num: 1 });
  //     setCount((count) => count + 1);
  //   }, 1000);
  // }, []);
  // 第二种解法 依赖变动的时候，会重新执行 effect
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(count + 1);
  //     dispatch({ type: "add", num: 1 });
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [count]);
  // 第三种解法 useLayoutEffect 是在渲染前同步执行的，用这个 hook 能确保在所有 useEffect 之前执行
  const updateCount = () => {
    setCount(count + 1);
    dispatch({ type: "add", num: 1 });
  };
  const ref = useRef(updateCount);
  useLayoutEffect(() => {
    ref.current = updateCount;
  });
  useEffect(() => {
    const timer = setInterval(() => ref.current(), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      {count2}
      {count}
    </div>
  );
}

export default App;
