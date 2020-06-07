import React, { Component } from "react"

class Display extends Component{
    
    
    getProbability(){
        // 1/(1+10**((i+j)/400))
        let fraction = (this.props.approxRating-this.props.rating)/400;
        let denominator = Math.pow(10,fraction) + 1;

        return ((1/denominator)*100).toFixed(2)
    }

    render(){
        
        let styles = {display : this.props.enableDisplay?"block":"none"}

        return (
            <div style={styles} >
                <h1 
                    style={{
                        display : this.props.rating?"block":"none" 
                    }}
                >Your rating  : {this.props.rating}</h1>
                <h1>
                    <button type="button" name="sub" onClick={this.props.approxRatingChanger}>-</button>
                    &nbsp;Suggested rating of problem : {this.props.approxRating}&nbsp;
                    <button type="button" name="add" onClick={this.props.approxRatingChanger}>+</button>
                </h1>
                <div
                    style = {{
                        display : this.props.rating?"block":"none"
                }}>
                    <strong>    You will be able to solve this Problem with the probability of {this.getProbability()} % </strong>
                </div>
                <div style={{ margin : "10px"}}>
                    <a 
                        className = "problemLink"
                        href={this.props.problemLink}
                        target="_blank"
                    >
                        <strong>
                        {this.props.problemLink? "Your Problem is ready..! Happy Coding ;)" : "Please wait till we get your problem"}
                        </strong>
                    </a>
                </div>
            </div>
        )
    }
}
export default Display