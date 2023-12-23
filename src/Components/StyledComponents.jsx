import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components"

const DIV = styled.div`
color: orange;
&:hover{
    color : red;
    font-weight : bold;
     font-size : small
}
`;
const SecondDiv = styled.div`
  font-size: large;
  color: ${props => (props.selected ? "blue" : "gray")};
`;

const StyledComponents = () => {
    const [selected, setSelected] = useState(true)
    return (
        <div className="row">
         { /*styled components */}
        <DIV>
            <h1>
                StyledComponents
            </h1>
        </DIV>
         { /* styled components with props */}
        <SecondDiv selected={selected}>
            <button onClick={()=>setSelected((s)=> !s)}>Change</button>
            <span>test styled componets with props</span>
        </SecondDiv>
        </div>
    )
}

export default StyledComponents