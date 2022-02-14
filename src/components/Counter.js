import React,{ Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }


    increment(){
        this.setState(old=>({
            count:old.count+1
        }))
        console.log(this.state.count)
    }

    incrementFives(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render(){
        return(
            <div>
                <h1>Count {this.state.count}</h1>
                <button onClick={()=>this.incrementFives()}>Click to add</button>
            </div>
        )
    }
}

export default Counter