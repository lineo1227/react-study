import { createContext, useContext } from "react";

const countContext = createContext(111);

function Aaa() {
    return (
        <div>
            <countContext.Provider value={222}>
                <Bbb></Bbb>
            </countContext.Provider>
        </div>
    );
}

function Bbb() {
    return (
        <div>
            <Ccc></Ccc>
        </div>
    );
}
function Ccc() {
    const count = useContext(countContext);
    return <h2>context 的值为：{count}</h2>;
}

// 用 createContext 创建 context 对象，用 Provider 修改其中的值， function 组件使用 useContext 的 hook 来取值，class 组件使用 Consumer 来取值。

export default Aaa;
