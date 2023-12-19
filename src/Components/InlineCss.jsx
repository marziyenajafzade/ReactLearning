
const InlineCss = () =>{
    const items = [
        {id:1, name : 'text1'},
        {id:2, name : 'text2'},
        {id:3, name : 'text3'},
        {id:4, name : 'text4'}
    ];
  return (
   <ul>
    {items.map((item)=>(
        <li key={item.id}>{item.name}</li>
    )
    
    )}
   </ul>
  );
}

export default InlineCss