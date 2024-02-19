import React, {
  ReactNode,
  PropsWithChildren,
  CSSProperties,
  //   HTMLAttributes,
  //   AnchorHTMLAttributes,
  ComponentProps,
  MouseEvent,
} from "react";

// 写的组件希望可以当成普通 html 标签一样用
// 可以继承HTMLAttributes
// interface BbbProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}
// 其实也可以用 ComponentProps
interface BbbProps extends ComponentProps<"a"> {
  clickHandler: (e: MouseEvent<HTMLDivElement>) => void;
}

// 如果不想通过参数传入内容,可以在 children 里
// 这时候就要声明 children 的类型为 ReactNode

// 实没有必要自己写,传 children 这种情况太常见了,React 提供了相关类型
// interface CccProps {
//     content: ReactNode,
//     children: ReactNode
//   }
type CccProps = PropsWithChildren<{
  content: ReactNode;
  color: CSSProperties["color"];
  styles?: CSSProperties;
}>;

function Ccc(props: CccProps) {
  return (
    <div style={{ ...props.styles, color: props.color }}>
      ccc,{props.content}
      {props.children}
      {/* HTMLAttributes 是其中一些 onClick、onMouseMove 等事件处理函数的类型参数 */}
      {/* 继承 HTMLAttributes 只有 html 通用属性,有些属性是某个标签特有的,这时候可以指定 FormHTMLAttributes、AnchorHTMLAttributes 等 */}
      <Bbb
        clickHandler={(e) => {
          console.log(e);
        }}
      />
    </div>
  );
}

function Bbb(props: BbbProps) {
  return <div onClick={props.clickHandler}>bbb</div>;
}
function App() {
  return (
    <div>
      <Ccc
        content={<div>666</div>}
        color="yellowgreen"
        styles={{
          backgroundColor: "gray",
        }}
      >
        <button>7777</button>
      </Ccc>
    </div>
  );
}

export default App;
