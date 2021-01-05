import React, {Component} from 'react';


import 'whatwg-fetch'
import cookie from 'react-cookies'

import EditDistancePostsInline from "./edit_distance_posts_inline";
import EditDistanceCreate from "./edit_distance_create";

class EditDistance extends Component {
    constructor(props) {
        super(props)
        this.handleNewEditdistance = this.handleNewEditdistance.bind(this)
    }

    state = {
        words: [],
    }

    loadEditDistanceWords() {
        const endpoint = '/soft-dev/api/editdistance/EditDistanceWords/'
        let thisComp = this
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
            thisComp.setState({
                    words: responseData
                })

        }).catch(function (errors) {
            console.log("error", errors)
        })
    }

    handleNewEditdistance(editDistanceItemData){
        console.log(editDistanceItemData)
        let currentEditDistance = this.state.words
        currentEditDistance.unshift(editDistanceItemData)
        this.setState({
            words: currentEditDistance
        })

    }


    componentDidMount() {
        this.setState({
            words:[]
        })
        this.loadEditDistanceWords()
    }

    render() {

        const {words}  = this.state
        const csrfToken = cookie.load('csrftoken')
        const divStyle = {
          color: 'white',
          textAlign: 'center',
        };

        return(


            <div style={divStyle}>
            <h1>Lets calculate edit distance</h1>
                {(csrfToken !== undefined && csrfToken !== null) ?
                    <EditDistanceCreate newEditDistanceItemCreated={this.handleNewEditdistance} />:""}

                {words.length > 0 ? words.map((wordItem, index) =>{
                    return (
                        <EditDistancePostsInline word_one={wordItem.word_one} word_two={wordItem.word_two} word_one_calc={wordItem.word_one_calc} word_two_calc={wordItem.word_two_calc} distance={wordItem.distance}/>

                    )
                }): <p> no posts found</p>}


                </div>
        );
    }
}

export default EditDistance;
