import React,{ Component } from "react";

class Message extends Component{
    constructor(props){
        super(props)
        this.state = {
            message:'Hello visitor'
        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for click'
        },()=>{
            console.log('Callback value', this.state.count)
        })
      console.log(this.state.count)  
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Click to change message</button>
            </div>
        )
    }
}


export default Message