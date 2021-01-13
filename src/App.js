import React,{Component} from "react";
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      value:""
      }
      this.textInput=React.createRef();
  }

btn1=(e)=>{
  this.setState(
  {value:this.textInput.current.value}
  )
  }
  btn2=(e)=>{
    e.preventDefault();
    const number = this.state.value;
    let n1 = 0, n2 = 1, nextTerm;
    
    var y=document.createElement("div")
    y.textContent="FIBONACCI SERIES :";
    document.body.appendChild(y);

    for (let i = 0; i <= number; i++) {
    
    var x= document.createElement("div");
    x.textContent=n1;
    document.body.appendChild(x);
    if(nextTerm>=number)
    {
      break;
    }
    nextTerm = n1 + n2;
    
    n1 = n2;
    n2 = nextTerm;

    }
    } 
render(){
return (
 <>

 <h1>Fibonacci Series Program</h1><br/>
 
 enter number : <input type="text" ref={this.textInput} />
 <button type ="submit" onClick={this.btn1}>insert number</button>
 <h3>Value you submit : {this.state.value}</h3>
 <h3>Press the fibcon button to get Fibonacci Series</h3>
 <button type ="submit" onClick={this.btn2}>fibcon</button>

 </>
)
}
}
export default App;