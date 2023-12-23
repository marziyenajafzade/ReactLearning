import styled from "styled-components"

const DIV = styled.div`
&:hover{
    color : red;
font-weight : bold;
font-size : large
}
`;
const StyledComponents = () => {
    return (
        <DIV>
            <h1>
                StyledComponents
            </h1>
        </DIV>
    )
}

export default StyledComponents