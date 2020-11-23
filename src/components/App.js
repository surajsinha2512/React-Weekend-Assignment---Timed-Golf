import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0, x: 0, y: 0 ,ballRender: false, fun:null};
    this.renderBall=this.renderBall.bind(this)
    this.moveBall=this.moveBall.bind(this)
    
  }

    renderBall(){
    this.setState({ballRender:true})
    this.state.fun=setInterval(()=>{this.setState({time:this.state.time+1})},1000);
  
    document.addEventListener('keydown',this.moveBall);
    //document.removeEventListener("onKeyDown",this.moveBall)
  }
  
 moveBall(evt){
    if(this.state.ballRender){
      if(evt.keyCode===37){
        this.setState({x:this.state.x-5})
      }
      else if(evt.keyCode===38){
        this.setState({y:this.state.y-5})
      }
      else if(evt.keyCode===39){
        this.setState({x:this.state.x+5})
      }
      else if(evt.keyCode===40){
        this.setState({y:this.state.y+5})
      }
    }
  
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {
    
  }   

componentDidUpdate(){
  if(this.state.ballRender){
    if(this.state.x===250&&this.state.y===250){
      document.removeEventListener('keydown',this.moveBall)
      clearInterval(this.state.fun)
    }
  }
 
}
//()=>{this.setState({ballRender:true})}

//()=>{setInterval(()=>{this.setState({time:this.state.time+1})},1000)}

  render() {
    return (
 <>
 {this.state.ballRender?null:<button className="start" onClick={this.renderBall}> click here</button>}
 {this.state.ballRender?<div className="ball" style={{left:this.state.x+'px',top:this.state.y+'px'}}></div>:null}
 {this.state.ballRender?<div className="hole" style={{left:250+'px',top:250+'px'}}></div>:null}
 {/*<div className="ballProvider">{this.state.time}</div>*/}
 {this.state.ballRender?<div className="heading-timer" >{this.state.time}</div>:null}
</>
    );
  }
}

export default Timer;
