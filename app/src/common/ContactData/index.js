import React, { Component } from 'react';
import Button from './../../shared/ui/Button';

import classes from './contact-data.css';

export default class ContactData extends Component {
    state = {
        name : '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    handleOrder = () => {
       
    }

    render() {
        return (
            <div className={classes.contactData}>
                <h2>Enter your contact data</h2>
                <form>
                    <input type="text" name="name" className={classes.customInput} placeholder="enter your name" />
                    <input type="email" name="email" className={classes.customInput} placeholder="enter your mail" />
                    <input type="text" name="street" className={classes.customInput} placeholder="enter your street" />
                    <input type="number" name="postal" className={classes.customInput} placeholder="enter your postal code" />
                    <Button 
                        btnType="success"
                        clicked={this.handleOrder}>
                        order
                    </Button>
                </form>    
            </div>
        )
    }
}
