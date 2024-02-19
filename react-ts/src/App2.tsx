import React, { useState, useEffect, useRef } from "react";
// hook 类型
function App() {
  // useState
  const [num, setNum] = useState<number>(0);
  // useRef
  // 我们知道,可以保存 dom 引用或者其他内容
  // 保存 dom 引用的时候,参数需要传个 null,不然也会报错
  // 而保存别的内容的时候,不能传 null,不然也会报错,说是 current 只读:
  // ref 既可以保存 dom 引用,又可以保存其他数据,而保存 dom 引用又要加上 readonly,所以才用 null 做了个区分
  // 传 null 就是 dom 引用,返回 RefObject,不传就是其他数据,返回 MutableRefObject
  // 所以,这就是一种约定,知道传 null 和不传 null 的区别就行了
  const ref = useRef<HTMLDivElement>(null);
  const ref2 = useRef<{ num: number }>();
  ref2.current = { num: 100 };
  useEffect(() => {
    setNum(100);
  }, []);
  return <div ref={ref}>{num}</div>;
}

export default App;
