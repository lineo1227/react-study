// ReactNode > ReactElement > JSX.Element
// 一般情况下，如果你想描述一个参数接收 JSX 类型，就用 ReactNode 就行
interface AaaProps {
  name: string;
  content: React.ReactNode; // 这里需要是JSX.Element类型
}
// ReactElement 就是 jsx 类型，但如果你传入 null、number 等就报错了
// 换成 ReactNode 就好了

// 函数组件类型是 FunctionComponent
const Aaa: React.FunctionComponent<AaaProps> = (props: AaaProps) => {
  return (
    <div>
      aaa, {props.name}
      {props.content}
    </div>
  );
};
// const content: JSX.Element = <button>xxx</button>;

function App() {
  return (
    <div>
      <Aaa name="lineo" content={<button>xxx</button>}></Aaa>
    </div>
  );
}

export default App;
