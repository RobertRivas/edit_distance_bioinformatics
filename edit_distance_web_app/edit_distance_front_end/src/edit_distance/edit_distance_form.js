import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'whatwg-fetch'
import cookie from 'react-cookies'

class EditDistance extends Component {

    loadEditDistanceWords() {
        const endpoint = 'api/editdistance/EditDistanceWords/'
        let lookupOptions = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(endpoint, lookupOptions)
            .then(function (response) {
                return response.json()
            }).then(function (responseData) {
            console.log(responseData)
        }).catch(function (errors) {
            console.log("error", errors)
        })
    }

    createEditDistanceWords() {
        const endpoint = 'api/editdistance/EditDistanceWords/'
        const csrfToken = cookie.load('csrftoken')
        let data = {
            "word_one": "",
            "word_two": ""
        }
        if (csrfToken !== undefined) {
            let lookupOptions = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken

                },
                body: JSON.stringify(data),
                credentials: 'include'
            }


            fetch(endpoint, lookupOptions)
                .then(function (response) {
                    return response.json()
                }).then(function (responseData) {
                console.log(responseData)
            }).catch(function (errors) {
                console.log("error", errors)
            })
        }
    }

    componentDidMount() {
        this.loadEditDistanceWords()
    }

    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
    }

    handleInputChange(event){

        event.preventDefault()
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name] : event.target.value

        })
    }
    render() {
        return(

            <div>
            <h1>Lets calculate edit distance</h1>

            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="wordOne">
                <Form.Label>Enter Word one</Form.Label>
                <Form.Control type="Word" placeholder="Enter Word" onChange={this.handleInputChange}  />
                <Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>

              <Form.Group controlId="wordTwo">
                <Form.Label>Enter Word Two</Form.Label>
                <Form.Control type="wordTwo" placeholder="Enter Word" onChange={this.handleInputChange} />
              </Form.Group>

              <Button variant="primary" type="Compute Edit Distance">
                Submit
              </Button>
        </Form>
                </div>
        );
    }
}

export default EditDistance;
