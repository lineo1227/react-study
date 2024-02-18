import { useEffect, useRef, useState, useImperativeHandle } from "react";
import React from "react";
interface RefProps {
    aaa: () => void;
}
const Lineo: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    // 但有的时候，我不是想把原生标签暴露出去，而是暴露一些自定义内容。 这时候就需要 useImperativeHandle 的 hook 了。
    // 它有 3 个参数，第一个是传入的 ref，第二个是是返回新的 ref 值的函数，第三个是依赖数组。
    useImperativeHandle(
        ref,
        () => {
            return {
                aaa() {
                    inputRef.current?.focus();
                },
            };
        },
        [inputRef]
    );
    return (
        <div>
            <input ref={inputRef} />
        </div>
    );
};
const WrapedLineo = React.forwardRef(Lineo);
function App() {
    // ref 其实就是一个有 current 属性的对象，除了可以保存 dom 引用，也可以放别的内容：
    // 但它不会触发重新渲染 想触发渲染，还是得配合 state
    const numRef = useRef<number>(0);
    const inputRef = useRef<RefProps>(null);
    const [, forceRender] = useState(0);
    useEffect(() => {
        console.log("ref", inputRef.current);
        inputRef.current?.aaa();
    });

    return (
        <div>
            <WrapedLineo ref={inputRef} />
            <div
                onClick={() => {
                    numRef.current += 1;
                    forceRender(Math.random());
                }}
            >
                {numRef.current}
            </div>
        </div>
    );
}

export default App;
