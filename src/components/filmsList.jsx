import React, { Component } from 'react';

class FilmsList extends Component{
    constructor(props){
        super(props);

        this.state = {
            list: [],
        }
    }
    getFilms(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then((res) => {
            return res.json();
        })
        .then((result)=>{
            console.log(result)
            this.setState({
                list:result,
            });
        })
        .catch((error)=>{
            console.log(error)
        });
    }

    componentDidMount(){
        this.getFilms();
    }

    render() {
      return <ul>
        {this.state.list.map((element, index, array) =>{
            return <li key={element.id}>{element.title}</li>
        })}
      </ul>;
    }
  }

  export default FilmsList;