import React,{ Component } from 'react';
import Flexi from './components/Flexi.component';
class App extends Component {
	constructor(props){
	super(props);
   this.state ={};
   this.onFlexiSubmit = this.onFlexiSubmit.bind(this);
	this.flexiConfig ={  
	items: [  
      {  
         name: "person_name",
         label: "Person's Name",
         type: "TextField"
      },
      {  
         name: "states",
         label: "Person's state",
		   type: "DropDown",
         values: [  
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
         ]
      }
   ]
   }
}
   
   onFlexiSubmit() {
      alert("data");
   }

   render() {
	   
      return (
         <div>
			<Flexi onSubmit={this.onFlexiSubmit} config={this.flexiConfig} />
         </div>
      );
   }
}
export default App;
