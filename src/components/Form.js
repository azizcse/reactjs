import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comment:'',
         topic:''
      }
    }

 handleUserNameChange= (event)=>{
     this.setState({
         userName: event.target.value
     })
 }

 handleCommentChange = (event)=>{
     this.setState({
         comment:event.target.value
     })
 }

 handleTopicChange= (event)=>{

    this.setState({
        topic : event.target.value
    })
 }

 handleSubmit = (event)=>{
     alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`)
     event.preventDefault()
 }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <div>
              <label>User name</label>
              <input type='text' value={this.state.userName} onChange = {this.handleUserNameChange}/>            
          </div>
          <br/>
          <div>
              <label>Comments</label>
              <textarea type='text' value={this.state.comment} onChange={this.handleCommentChange}/>
          </div>
          <div>
              <label>Topic</label>
              <select value={this.state.topic} onChange={this.handleTopicChange}>
                  <option value='React'>React</option>
                  <option value='Jave'>Java</option>
                  <option value='php'>PHP</option>
              </select>
          </div>
          <br/>
          <br/>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
