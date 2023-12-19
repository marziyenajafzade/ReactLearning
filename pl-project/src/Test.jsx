
function Test() {
    const Books =[
        {id:'1', name:'book1'},
        {id:'2', name:'book2'},
        {id:'3', name:'book3'},
        {id:'4', name:'book4'},
        {id:'5', name:'book5'}
    ]
  return (
   <ul>
    {Books.map((book)=>(<li key={book.id}>{book.name}</li>))}
   </ul>
  )
}

export default Test