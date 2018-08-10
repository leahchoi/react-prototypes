import React, {Component} from 'react';
import ContactCard from './contact_card'
import contactData from '../data/contacts'

class ContactList extends Component {
    constructor(props){
        super(props);
        this.state = {
            'contacts': contactData
        }
    }
    render(){
        const list = this.state.contacts.map((item, index) => {
            return <ContactCard key={index} contact = {item}/>
        });
       return <div className = 'col-8'>
            <div className = 'row'>
                {list}
            </div>
        </div>
    }

    // number 6: Create a new const called list

}


export default ContactList;