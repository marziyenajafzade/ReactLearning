import React, { useState } from "react";

const InlineCss = () => {
  const items = [
    { id: 1, name: 'text1' },
    { id: 2, name: 'text2' },
    { id: 3, name: 'text3' },
    { id: 4, name: 'text4' }
  ];

  const [selected, setSelected] = useState(true);

  const toggleStyle = () => {
    setSelected((s) => !s);
  };
  const cssStyle={marginTop:'10px', color:'red',border:'1px dashed'};
  const cssStyleClass={marginTop:'10px', color:'blue',border:'1px dashed'}

  return (
    <div className="row">
      <button onClick={toggleStyle}>Change Style</button>
      <ul >
        {items.map((item) => (
          <li key={item.id} style={selected ? cssStyle : cssStyleClass}>{item.name}
          </li>
          
        ))}
      </ul>
    </div>
  );
};

export default InlineCss;
