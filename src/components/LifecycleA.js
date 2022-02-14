import React, { Component } from 'react'

class LifecycleA extends Component {
   constructor(props) {
     super(props)

     this.state = {
        name:'Lifecycle'
     }
     console.log('LifecycleA constructor')
   }

   static getDrivedStateFromProps(props,state){
    console.log("this is in marks in getDrivedStateFromProps");
    return null;
}

   componentDidMount(){
    console.log('LifecycleA componentDidMount') 
   }

  render() {
      console.log('LifecycleA render')
    return (
      <div>LifecycleA</div>
    )
  }
}

export default LifecycleA