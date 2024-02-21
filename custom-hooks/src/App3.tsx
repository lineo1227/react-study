import { useUpdate, useCreation, useSafeState } from "./hooks";
import { Button } from "antd";

const Index = () => {
  const update = useUpdate();
  const [count, setCount] = useSafeState(0);
  const getNowData = () => {
    return Math.random();
  };
  const nowData = useCreation(() => getNowData(), [count]);
  return (
    <div>
      <div>时间：{Date.now()}</div>
      <div>随机数：{nowData}</div>
      <Button
        type="primary"
        onClick={() => {
          update();
          setCount(count + 1);
        }}
      >
        更新
      </Button>
    </div>
  );
};

export default Index;
