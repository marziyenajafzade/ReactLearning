import { useState } from "react";
function ChildComponent(props) {

    const [count, setCount] = useState(0);
    const counter = () => {
        setCount(count + 1);
        return count

    }
    return (
        <div className="div-child">

            <h1>This is Child Component  </h1>

            <button onClick={() => props.sendToParent(counter())} >Click me</button>

        </div>
    )
}
export default ChildComponent;