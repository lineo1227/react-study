import { memo, useCallback, useEffect, useState, useMemo } from "react";
// memo + useCallback、useMemo 是搭配着来的，少了任何一方，都会使优化失效。
function Aaa() {
    const [, setNum] = useState(1);
    const [count, setCount] = useState(2);
    useEffect(() => {
        setInterval(() => {
            setNum(Math.random());
        }, 2000);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setCount(Math.random());
        }, 2000);
    }, []);
    const count2 = useMemo(() => {
        return count * 10;
    }, [count]);
    const bbbCallback = useCallback(function () {}, []);
    return (
        <div>
            <MemoBbb count={count2} callback={bbbCallback}></MemoBbb>
        </div>
    );
}

interface BbbProps {
    count: number;
    callback: Function;
}

function Bbb(props: BbbProps) {
    console.log("bbb render");

    return <h2>{props.count}</h2>;
}
const MemoBbb = memo(Bbb);
export default Aaa;
