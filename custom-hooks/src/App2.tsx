import { useState } from "react";
import { useMount, useUnmount, useUnmountedRef } from "./hooks";

import { Button, message } from "antd";

const Child = () => {
  const unmountedRef = useUnmountedRef(); // 创建一个不可变的ref，用于记录组件是否卸载
  useMount(() => {
    message.info("首次渲染" + unmountedRef.current);
  });

  useUnmount(() => {
    message.info("组件已卸载" + unmountedRef.current);
  });

  return <div>大家好,我是小杜杜,一起玩转Hooks吧!</div>;
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
