import React, { Component } from "react"

class Handle extends Component{
    render(){
        let handlestring = this.props.handle?this.props.handle:""
        let styles = {
            margin : "10px",
            border : "double"
        }

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
                {/* <select name="tags" value={this.props.selectedTag}>
                    {this.props.tags.map(obj => {<option value="obj">obj</option>})}
                </select> */}
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