import { useLayoutEffect, useState } from "react";
// 创建 launch.json,输入 chrome 类型的调试配置,点击调试,这时候代码就会在打的断点处断住。
// 断点类型有普通断点、条件断点、hit count、logpoint 等。
// 此外,chrome 的各种用户数据是保存在 userDataDir 下,一个 userDataDir 只能跑一个实例。
// 默认跑的浏览器是会创建新的临时 userDataDir,所以没有之前的用户数据,也就没有之前安装的 React DevTools 等插件。
// 可以把它设置为 false,然后关掉别的浏览器再跑,这时候就是在默认 userDataDir 跑的,各种用户的数据都有。
async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666);
    }, 2000);
  });
  return data;
}

function App() {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    queryData().then((data) => {
      setNum(data);
    });
  }, []);

  return (
    <div
      onClick={(e) => {
        setNum((prevNum) => prevNum + 1);
      }}
    >
      {num}
    </div>
  );
}

export default App;
