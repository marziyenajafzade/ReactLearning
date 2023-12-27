import { React, useState } from 'react';
import Test from "./Components/Test";
import InlineCss from "./Components/InlineCss";
import StyledComponents from "./Components/StyledComponents";
import Price from "./Components/Price";
import RangeSlider from "./Components/RangeSlider";
import Calculator from "./Components/Calculator";
import ChildComponent from './Components/ChildComponent';

function App() {

  const [ChildValue, SetChildValue] = useState()

  const getChildData = (val) => {

    console.log(val)

    SetChildValue(val)

  }
  return (
    <>
      <h1>React learning</h1>
      <p>React learning</p>
      <Test />
      <InlineCss />
      <StyledComponents />
      <Price />
      <RangeSlider />
      <Calculator />
      <div className='div-parent'>

        <h1> This is Parent Component - {ChildValue} </h1>

      </div>

      <ChildComponent sendToParent={getChildData} />

    </>
  );
}

export default App;
