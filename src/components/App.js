import React from "react"

import Handle from "./Handle"
import Display from "./Display"
import logo from "../img/codeforces_logo.jpg"


function App(props){

        let styles = {
            textAlign : "center",
            border : "double",
            margin : 100
        }
    
        return(
            <div className="container" style={styles}>
                <img className="logo-img" src={logo} alt="codeforces logo"/>
                <h1>Random - CP</h1>
                <Handle 
                    handleChange = {props.handleChange}
                    handleClick ={props.handleClick}
                    handle = {props.data.handle}
                    handleDisable = {props.data.handleDisable}
                    loading = {props.data.loading}
                    tags = {props.data.tags}
                    selectedTag = {props.data.selectedTag}
                    randomTopic = {props.data.randomTopic}
                />
                <Display 
                    enableDisplay = {props.data.enableDisplay}
                    handleDisable = {props.data.handleDisable}
                    rating = {props.data.rating}
                    approxRating = {props.data.approxRating}
                    problemLink = {props.data.currentProblem}
                    approxRatingChanger = {props.approxRatingChanger}
                />
            </div>
        )
}

export default App