// import logo from './logo.svg';
import './App.css';
import React from 'react'
import FilmsList from './components/filmsList';

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
        <form onSubmit = {this.onSubmit}> 
        <input
        type = 'text'
        value = {this.state.next}
        onChange={(event) => this.setState({ text: event.target.value })}
        />
        <button type ="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item,index)=>{
            return <li key = {index + index}>{item}</li>
          })}
        </ul>
        <FilmsList />
      </div>
    );
  }
}

export default App;
