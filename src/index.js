import React from "react";
import ReactDom from "react-dom";

// CSS
import './index.css'
// stateless functional component always return JSX

// function Greating(){
//   return <h3>Luka's First compenent.</h3>
// }

// const Greating = () =>{
//   return React.createElement('h1', {}, 'Hello There!')
// }

// Better way
// function Greating(){
//   return(
//     <div>
//       <h1>Hello There</h1>
//     </div>
//   )
// }

// Messy Way
// const Greating = () =>{
//   return React.createElement(
//     'div',
//     React.createElement('h1', {}, 'Hello There !')
//   )
// }


// JSX Rules
// return single element
// div - section - article or Fragment 
// use camelCase for HTML attribute 
// className instead of class
// close every element 
// formmating 

// function Greating(){
//   return(
//     <section>
//       <div>
//         <h1>Hello There</h1>
//       </div>
//     </section>
//   )
// }

// Nested Components, React Tools

// function Greating(){
//   return(
//     <section>
//       <div>
//         <Person/>
//         <Message/>
//       </div>
//     </section>
//   )
// }
// const Person = ()=>  <h1>Luke Skywalker</h1>;
// const Message = ()=> {
//   return(
//     <p>This is my message.</p>
//   )
// }

// Nested Components, React Tools [MORE]

function BookList(){
  return(
    <section className="booklist">
      <Book/>
      <Book/>
    </section>
  )
}

const Book = () =>{
  return(
    <article className="book">
      <Image/>
      <Title/>
      <Author/>
    </article>
  )
}

const Image = () =>{
  return(
    <img src="https://media.gq.com/photos/5ad64204c8be07604e8b5f2f/1:1/w_1332,h_1332,c_limit/21-books-GQ-April-2018-041718-3x2.jpg" width={200}  alt="The Book" />
  )
}

const Title = () => <h1>This is Title of the book</h1>
const Author = () => (
  <p style={{ color: '#FAB700', fontSize: '0.75rem', marginTop: '0.5rem'}}>The Author of The book</p>
)


ReactDom.render(
  <BookList/>, 
  document.getElementById('root')
)