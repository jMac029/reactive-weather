import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

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

    render() {
        return ( <
            Form inline onSubmit = { this.searchWeather } >
            <
            FormGroup bsSize = "large"
            controlId = "formInlineName" >
            <
            FormControl type = "text"
            name = "location"
            value = { this.state.value }
            placeholder = "Honolulu, HI or 96815" / >
            <
            /FormGroup>{' '} <
            Button bsStyle = "success btn-lg"
            input type = "submit" > Get the weather! < /Button> < /
            Form >
        );
    }
}

export default SearchForm;