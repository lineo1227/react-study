import {
  useCallback,
  useMemo,
  memo,
  useState,
  createContext,
  useContext,
} from "react";
function Ccc(prop: CccProps) {
  return (
    <div>
      {prop.obj.aaa}
      {prop.fn()}
      <Bbb />
    </div>
  );
}
function Bbb() {
  const count = useContext<number>(countContext);
  return <div>{count}</div>;
}
interface CccProps {
  obj: { aaa: number };
  fn: Function;
}
const CccMemo = memo<CccProps>(Ccc);
const countContext = createContext<number>(0);
function App() {
  const [count, setCount] = useState<number>(0);
  // useCallback 的类型参数是传入的函数的类型
  const fn = useCallback<() => number>(() => {
    console.log("fn");
    return 666;
  }, []);
  // useMemo 的类型参数是传入的函数的返回值类型
  const obj = useMemo<{ aaa: number }>(() => {
    console.log("obj");
    return {
      aaa: 111,
    };
  }, []);
  return (
    <div onClick={() => setCount(count + 1)}>
      <countContext.Provider value={222}>
        <CccMemo fn={fn} obj={obj} />
      </countContext.Provider>
    </div>
  );
}

export default App;
