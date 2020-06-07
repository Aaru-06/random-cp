import React , {Component} from "react"

import App from "./App"

class AppContainer extends Component{
    
    constructor(){
        super()

        this.state ={
            handle : undefined,
            rating : undefined,
            loading : true,
            currentProblem : undefined,
            handleDisable : false,
            approxRating : 1000,
            enableDisplay : false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.fetchProblems = this.fetchProblems.bind(this)
        this.approxRatingChanger = this.approxRatingChanger.bind(this)
        this.fetchRandomProblem = this.fetchRandomProblem.bind(this)
    }
    
    componentDidMount(){
        document.title = "Random - CP";

        this.fetchProblems()
    }

    handleChange(event){

        const {value,type,checked} = event.target

        let nextState = {
            handle : undefined,
            rating : undefined,
            currentProblem : undefined,
            enableDisplay : false,
            approxRating : 1000        
        };

        if (type==="checkbox"){
            nextState.handleDisable = checked
        }
        else if (type==="text"){
            nextState.handle = value
        }

        this.setState(nextState)

        
    }

    handleClick(event){

        if(this.state.handle===undefined && !this.state.handleDisable){
            window.alert("Please enter a valid Handle ID of codeforces")
            return
        }

        this.setState({
            currentProblem : undefined
        })

        if(!this.state.handleDisable){
        
            let url = "https://codeforces.com/api/user.info?handles=" + this.state.handle

            fetch(url)
                .then(data => data.json())
                .then(data => {
                    if(data.status==="OK"){
                        this.setState({
                            rating : data.result[0].rating
                        })
                        
                        let newApproxRating  = Math.round((data.result[0].rating+50)/100)*100
                        this.setState({
                            approxRating : newApproxRating
                        })
                        this.fetchRandomProblem()
                    }         
                })
                .catch(()=>
                {
                    window.alert("Please enter a valid Handle ID of codeforces")
                })
        }
        else{
            this.fetchRandomProblem()
        }

    }

    fetchProblems(){

        let url = "https://codeforces.com/api/problemset.problems"
        
        fetch(url)
            .then(data => data.json())
            .then(data => {
                
                this.setState({
                    problems : data
                })
            })
            .then(()=> this.setState({ loading : false }))
    }

    fetchRandomProblem(){

                //console.log("fetch called with rating ",this.state.approxRating)
                
                let filteredProblems = this.state.problems.result.problems.filter(obj => this.state.approxRating===obj.rating ? true : false)
                
                const lengthOfFilteredProblems = filteredProblems.length

                let randomNumber  =  Math.floor(Math.random()*(lengthOfFilteredProblems-1))

                const selectedProblem = filteredProblems[randomNumber]

                let problemUrl = "https://codeforces.com/contest/"+selectedProblem.contestId+"/problem/"+selectedProblem.index

                setTimeout  (()=>{
                    this.setState({
                        currentProblem : problemUrl,
                        enableDisplay : true
                    })
                },1000)
    }

    approxRatingChanger(event){

        const op = event.target.name

        if(op==="add"){
            this.setState(prevState => {
                let newState = Object.assign({},prevState);

                (prevState.approxRating<3500) && (newState.approxRating = prevState.approxRating + 100)

                newState.currentProblem = undefined

                return newState
            },this.fetchRandomProblem)
        }
        else{
            this.setState(prevState => {
                let newState = Object.assign({},prevState);

                (prevState.approxRating>800) && (newState.approxRating = prevState.approxRating - 100)

                newState.currentProblem = undefined

                return newState
            },this.fetchRandomProblem)
            
        }

    }

    render(){
        return(
            <div>
                <App 
                    handleChange ={this.handleChange}
                    handleClick = {this.handleClick}
                    approxRatingChanger = {this.approxRatingChanger}
                    data = {this.state}
                />
            </div>
        )
    }

}
export default AppContainer