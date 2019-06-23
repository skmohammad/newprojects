import React,{ Component } from 'react';
class Flexi extends Component {
	constructor(props){
	super(props);
	this.state ={};
	this.formFields = this.formFields.bind(this);
   }
   formFields() {
      let data = this.props.config;
      let textInput,dropdownSelect = '';
     
      let result =  data.items.map(item =>{ 
         if(item.type == 'TextField'){
            return textInput = <div>{item.label}:<input type="text" /></div>;
         }else if(item.type == 'DropDown'){
            let dropDownValues = item.values.map(data =>{ return (<option>{data}</option>) });
            return dropdownSelect = <div>{item.label}:<select>{dropDownValues}</select></div>;
         }
         else{
            return '';
         }
         
      })
      return result;
   }

   render() {
	   let data = this.props.config;
	   console.log('data-->', data);
      return (
            <div>
               {this.formFields()}
               <button type="submit" onClick={this.props.onSubmit}>Submit</button>
            </div>
      );
   }
}
export default Flexi;
