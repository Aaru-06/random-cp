import React, { Component } from "react"

class Handle extends Component{
    render(){
        let handlestring = this.props.handle?this.props.handle:""
        let styles = {
            margin : "10px",
            border : "double"
        }

        // console.log(this.props)
        // console.log("tags : ",this.props.tags)
        let options = undefined
        if(this.props.tags)
            options = this.props.tags.map((obj,index) => {return (<option value = {obj} key={index}>{obj}</option>)})
        // console.log(options)

        return(
            <div>
                <input 
                    type="text" 
                    className="handlebox"
                    name="handle" 
                    value={handlestring} 
                    onChange={this.props.handleChange} 
                    style={Object.assign({display : this.props.handleDisable?"none":null},styles)}
                />
                <br />
                <label>
                    <input 
                        type="checkbox" 
                        name="handleDisable" 
                        checked={this.props.handleDisable}
                        onChange = {this.props.handleChange}
                    />
                    I won't share my handle.!
                </label>
                <br />
                <select 
                    name="tags" 
                    value={this.props.selectedTag}
                    disabled={this.props.loading||this.props.randomTopic}
                    onChange={this.props.handleChange}
                    style ={{margin : 10}}
                >{options}</select>
                <br/>
                <label>
                    <input
                        type="checkbox"
                        name="randomTopic"
                        checked={this.props.randomTopic}
                        onChange = {this.props.handleChange}
                    />
                    Give me problems on random topics
                </label>
                <br/>
                <button 
                    type="button" 
                    name="fetchbtn"
                    disabled = {this.props.loading}
                    onClick={this.props.handleClick}
                    style={styles}
                >Search</button>
                <br />
                <button 
                    type="button" 
                    name="clearbtn" 
                    disabled = {this.props.loading}
                    onClick={this.props.handleChange}
                    style={styles}
                >Clear</button>
            </div>
        )
    }
}
export default Handle