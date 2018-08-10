import React, {Component} from 'react';
import Field from './field';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            'form': {
                firstName: '',
                lastName: '',
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(event){
        const {value, name} = event.target;
        const {form} = this.state;
        form[name] = value;
        
        this.setState({
            form: {
                
            }
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log('handleSubmit called, form values are:', this.state.form)
    }
    render(){
        const {firstName, lastName} = this.state.form;
        return (
        <form onSubmit= {this.handleSubmit}>
            <div className = 'form-group'>
                <div>
                    
                        <Field name="soora"/>
                        <button>Add Contact </button>
                </div>
            </div>
        </form>
        ) 
    }
}

export default ContactForm;

