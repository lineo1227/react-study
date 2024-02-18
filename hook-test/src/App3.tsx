import { Reducer, useReducer } from "react";

// interface Data {
//   result: number;
// }

// interface Action {
//   type: "add" | "minus";
//   num: number;
// }
// function reducer(state: Data, action: Action) {
//   switch (action.type) {
//     case "add":
//       return {
//         result: state.result + action.num,
//       };
//     case "minus":
//       return {
//         result: state.result - action.num,
//       };
//   }
//   return state;
// }

// function App() {
//   // const [res, dispatch] = useReducer<Reducer<Data, Action>>(reducer, { result: 0});

//   // 另一种重载，通过函数来创建初始数据
//   const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
//     reducer,
//     "zero",
//     (param) => {
//       return { result: param === "zero" ? 0 : 1 };
//     }
//   );

//   return (
//     <div>
//       <div onClick={() => dispatch({ type: "add", num: 2 })}>加</div>
//       <div onClick={() => dispatch({ type: "minus", num: 1 })}>减</div>
//       <div>{res.result}</div>
//     </div>
//   );
// }

// export default App;
import { produce } from "immer";
interface Data {
  a: {
    c: {
      e: number;
      f: number;
    };
    d: number;
  };
  b: number;
}

interface Action {
  type: "add";
  num: number;
}

function reducer(state: Data, action: Action) {
  switch (action.type) {
    case "add":
      return produce(state, (state) => {
        state.a.c.e += action.num;
      });
    //   return {
    //     ...state,
    //     a: {
    //       ...state.a,
    //       c: {
    //         ...state.a.c,
    //         e: state.a.c.e + action.num,
    //       },
    //     },
    //   };
  }
  return state;
}

function App() {
  const [res, dispatch] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    "zero",
    (param) => {
      return {
        a: {
          c: {
            e: 0,
            f: 0,
          },
          d: 0,
        },
        b: 0,
      };
    }
  );

  return (
    <div>
      <div onClick={() => dispatch({ type: "add", num: 2 })}>加</div>
      <div>{JSON.stringify(res)}</div>
    </div>
  );
}

export default App;
