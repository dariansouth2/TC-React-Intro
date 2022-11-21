// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import FilmsList from './components/filmsList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          React is so cool!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <h1>
//         <p></p>
//         <ul>
//           <li></li>
//           <li></li>
//           <li></li>
//         </ul>
//       </h1>
//     </div>
//   );
// }

class App extends React.Component {

  constructor(props){
    super(props)

    this.state={
      list:['ready','set','GO'],
      text: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onSubmit(event){
    event.preventDefault();
    this.setState({
      list:[...this.state.list, this.state.text]
    })
  }

  handInput(event){
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <input
        type = 'text'
        value = {this.state.next}
        onChange={this.handleInput}
        />
        <button type ="submit">Add</button>
        <form>
          <input 
          type="text"
          value={this.state.text}
          onChange={this.handleInput}
           />
           <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item,index)=>{
            return <li key = {index}>{item}</li>
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

const myApp = new App('stuff');











export default App;
