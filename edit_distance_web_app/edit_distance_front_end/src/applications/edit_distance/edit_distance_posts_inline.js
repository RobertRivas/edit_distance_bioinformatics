import React, {Component} from 'react';


class EditDistancePostsInline extends Component{
  render()
  {
      const wordOne = this.props.word_one
      const wordTwo = this.props.word_two
      const wordOneCalc = this.props.word_one_calc
      const wordTwoCalc = this.props.word_two_calc
      const distance = this.props.distance

      const outputStyle = {
          fontFamily: "Courier New",
          color: "white"
        }
    return (
        <div >

            <h1 style={outputStyle} >Words: </h1>
            <h1 style={outputStyle} >word_1: {wordOne} </h1>
            <h1 style={outputStyle} >word_2: {wordTwo} </h1>
            <h1 style={outputStyle} > Edit Distance: </h1>
            <h1 style={outputStyle} > {distance} </h1>
            <h1 style={outputStyle} >alignment:</h1>
            <h1 style={outputStyle} >{wordOneCalc}</h1>
            <h1 style={outputStyle} >{wordTwoCalc}</h1>
        </div>
    );
  }
}




export default EditDistancePostsInline;