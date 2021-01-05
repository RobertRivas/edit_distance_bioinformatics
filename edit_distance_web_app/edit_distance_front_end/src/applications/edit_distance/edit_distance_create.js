import React, {Component} from "react";
import cookie from "react-cookies";
import 'whatwg-fetch';



class EditDistanceCreate extends Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)

        this.state = {
            word_one: null,
            word_two: null
        }

    }
    createEditDistanceWords(data) {
        const endpoint = '/soft-dev/api/editdistance/EditDistanceWords/'
        const csrfToken = cookie.load('csrftoken')
        let thisComp = this

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
                if(thisComp.props.newEditDistanceItemCreated){
                    thisComp.props.newEditDistanceItemCreated(responseData)
                }
                // thisComp.clearForm()
            }).catch(function (errors) {
                console.log("error", errors)
            })
        }
    }


     handleSubmit(event){
        event.preventDefault()
        // console.log(this.state)
         let data = this.state
         console.log(data)
         this.createEditDistanceWords(data)
         this.setState({
             word_one: '',
            word_two: ''
         });



    }

    handleInputChange(event){

        event.preventDefault()
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name] : event.target.value

        })
    }

    componentDidMount() {

    }

    render() {
        const {word_one} = this.state
        const {word_two} = this.state
        return(
            <form onSubmit={this.handleSubmit} ref={(el) => this.editDistanceCreateForm = el}>
                <div className='form-group'>

                    <label htmlFor='word_one'>Word One</label>
                    <input
                        type='text'
                        id='word_one'
                        name='word_one'
                        value={word_one}
                        className='form-control'
                        placeholder='word_one'
                        ref={this.editDistanceWordOneRef}
                        onChange={this.handleInputChange}
                        required='required'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='word_two'>Word Two</label>
                    <textarea
                        id='word_two'
                        ref={this.editDistanceWordTwoRef}
                        name='word_two'
                        value={word_two}
                        className='form-control'
                        placeholder='word_two'
                        onChange={this.handleInputChange}
                        required='required'/>

                </div>
                <button type='submit' className='btn btn-primary'>Save</button>

        </form>
        )
    }

}
export default EditDistanceCreate