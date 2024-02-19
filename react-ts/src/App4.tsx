import { Reducer, useEffect, useReducer } from "react";
interface Action {
  type: "add" | "minus";
  count: number;
}
interface Data {
  result: number;
}
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return { result: state.result + action.count };
    case "minus":
      return { result: state.result - action.count };
  }
}
function App() {
  // 当传一个的时候,是 Reducer<xx,yy> 类型,xx 是 state 的类型,yy 是 action 的类型。
  const [res, dispath] = useReducer<Reducer<Data, Action>>(reducer, {
    result: 100,
  });
  // 当传了第二个的时候,就是传入的初始化函数参数的类型。
  const [res2, dispath2] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "zero",
    (param) => {
      return {
        result: param === "zero" ? 0 : 100,
      };
    }
  );
  useEffect(() => {
    dispath({ type: "minus", count: 1 });
    dispath2({ type: "minus", count: 5 });
  }, []);
  return (
    <div onClick={() => dispath2({ type: "add", count: 100 })}>
      {res.result}
      {res2.result}
    </div>
  );
}
export default App;
