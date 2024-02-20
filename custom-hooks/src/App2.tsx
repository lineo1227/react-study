import { useState } from "react";
import { useMount, useUnmount, useUnmountedRef, useSafeState } from "./hooks";

import { Button, message } from "antd";

const Child = () => {
  const unmountedRef = useUnmountedRef(); // 创建一个不可变的ref，用于记录组件是否卸载
  const [count, setCount] = useSafeState(0);
  useMount(() => {
    message.info("首次渲染" + unmountedRef.current);
  });

  useUnmount(() => {
    message.info("组件已卸载" + unmountedRef.current);
    console.log("组件已卸载" + count);
  });

  return (
    <div onClick={() => setCount(count + 1)}>
      大家好,我是{count},一起玩转Hooks吧!
    </div>
  );
};

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换 {flag ? "unmount" : "mount"}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
