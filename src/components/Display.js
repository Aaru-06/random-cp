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
        let innerstyles = {display : (this.props.enableDisplay||this.props.handleDisable)?"block":"none"}

        return (
            <div>
            <div style={styles} >
                <h1 
                    style={{
                        display : this.props.rating?"block":"none" 
                    }}
                >Your rating  : {this.props.rating}</h1>
            </div>
                <div style = {innerstyles}>
                    <h1>Suggested rating of problem</h1>
                    <div>
                        <button type="button" name="sub" onClick={this.props.approxRatingChanger} className="btn-rating">-</button>
                        <span><strong>&nbsp; {this.props.approxRating}&nbsp;</strong></span>
                        <button type="button" name="add" onClick={this.props.approxRatingChanger} className="btn-rating">+</button>
                    </div>
                </div>
            <div style={styles}>
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
                        rel = "noopener noreferrer"
                        target="_blank"
                    >
                        <strong>
                        {this.props.problemLink? "Your Problem is ready..! Happy Coding ;)" : "Please wait till we get your problem"}
                        </strong>
                    </a>
                </div>
            </div>
            </div>
        )
    }
}
export default Display