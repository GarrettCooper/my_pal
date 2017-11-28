import React, { Component } from 'react';
import { Form, Text, Radio, RadioGroup, Select, Checkbox, TextArea } from 'react-form';
import logo from './ppcc_logo.png';
import './App.css';


 const statusOptions = [
   {
     label: 'Parent',
     value: 'parent'
   },
   {
     label: 'Legal Guardian',
     value: 'guardian'
   },
   {
     label: "Family",
     value: 'family'
   },
   {
     label: "Other",
     value: 'other'
   }
 ];

 class BasicForm extends Component {

   constructor( props ) {
     super( props );
     this.state = {};
   }

   render() {
     return (
       <div className="App">
         <Form onSubmit={submittedValues => this.setState( { submittedValues } )}>
           { formApi => (
             <form onSubmit={formApi.submitForm} id="form2"><br/>
               <label htmlFor="firstName">First name</label>
               <Text field="firstName" id="firstName" className="mr-3 d-inline-block"/> &nbsp;
               <label htmlFor="lastName">Last name</label>
               <Text field="lastName" id="lastName"/><br/><br/>

               <label htmlFor="street">Street</label>
               <Text field="street" id="street" className="mr-3 d-inline-block"/> &nbsp;

               <label htmlFor="city">City</label>
               <Text field="city" id="city" className="mr-3 d-inline-block"/> &nbsp;

               <label htmlFor="state">State</label>
               <Text field="state" id="state" className="mr-3 d-inline-block"/> &nbsp;

               <label htmlFor="zip">Zip</label>
               <Text field="zip" id="zip" className="mr-3 d-inline-block"/> &nbsp;
               <br/><br/>

               <RadioGroup field="gender">
                 { group => (
                   <div>
                     <label htmlFor="male" className="mr-2">Male</label>
                     <Radio group={group} value="male" id="male" className="mr-3 d-inline-block" />
                     <label htmlFor="female" className="mr-2">Female</label>
                     <Radio group={group} value="female" id="female" className="d-inline-block" />
                   </div>
                 )}
               </RadioGroup><br/>

               <label htmlFor="notes">Notes</label> &nbsp;
               <TextArea field="notes" id="notes" /><br/><br/><br/><br/>
               <label htmlFor="status" className="d-block">Relationship status</label> &nbsp; &nbsp;
               <Select field="status" id="status" options={statusOptions} /> &nbsp; &nbsp;
               <button type="submit" className="mb-4 btn btn-primary">Submit</button>
             </form>
           )}
         </Form>
       </div>
     );
   }
 }

export default BasicForm;
