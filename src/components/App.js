import React from "react"

import Handle from "./Handle"
import Display from "./Display"

function App(props){

        let styles = {
            textAlign : "center",
            border : "double",
            margin : 100
        }
    
        return(
            <div className="container" style={styles}>
                <Handle 
                    handleChange = {props.handleChange}
                    handleClick ={props.handleClick}
                    handle = {props.data.handle}
                    handleDisable = {props.data.handleDisable}
                    loading = {props.data.loading}
                />
                <Display 
                    enableDisplay = {props.data.enableDisplay}
                    rating = {props.data.rating}
                    approxRating = {props.data.approxRating}
                    problemLink = {props.data.currentProblem}
                    approxRatingChanger = {props.approxRatingChanger}
                />
            </div>
        )
}

export default App