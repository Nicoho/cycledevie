import React, {Component} from 'react';

class App extends Component{
  constructor (props){
    super (props);
    this.state={  
      title:"",
      globalTitle:""
    }
  }

  componentDidMount (){
    console.log('Formulaire rendu')
  }
    
  onChange = (e)=>{
    this.setState({title:e.target.value})
  }
  
  getSubmit = (e) => {
    e.preventDefault()
    this.setState({globalTitle:`Mon Formlaire - ${this.state.title}`})
  }

  componentDidUpdate(){
    console.log('titre changé')
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.getSubmit}>
          <input type="text" 
                name='text' 
                id='text'
                value={this.state.title}
                onChange={this.onChange}
                />
                

          <button> cliquez</button>
        </form>
        
      </div>
    );
  }
  
}

export default App;
