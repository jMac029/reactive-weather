import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import axios from 'axios';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import './App.css';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        // this.handleChange = this.handleChange.bind(this);
        this.searchWeather = this.searchWeather.bind(this);
    }

    // searchWeather(event) {
    //     this.setState({ value: event.target.value });
    // }

    searchWeather(event) {
        axios.get('http://localhost:3002/weather/:location', {
                params: {
                    location: this.location
                }
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            })
        event.preventDefault();
    }
}

class App extends Component {
    render() {
        return ( < div className = "App" >
            <
            Jumbotron >
            <
            h1 > Reactive Weather < /h1> <
            p >
            This is a simple app
            for looking up the weather
            for any location in the world.Simply input the location you wish to look up below. <
            /p> <
            Form inline onSubmit = { this.searchWeather } >
            <
            FormGroup bsSize = "large"
            controlId = "formInlineName" >
            <
            FormControl type = "text"
            name = "location"
            placeholder = "Honolulu, HI or 96815" / >
            <
            /FormGroup>{' '} <
            Button bsStyle = "success btn-lg"
            input type = "submit" > Get the weather! < /Button> < /
            Form > < /
            Jumbotron > <
            /div >

        );
    }
}

export default App;