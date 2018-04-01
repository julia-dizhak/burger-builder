import React, { Component } from 'react';
import Button from './../../widgets/Button';

import instance from './../../utils/axios-orders';
import Spinner from './../../widgets/Spinner/';
import Input from './../../forms/Input';
import Textarea from './../../forms/Textarea';

import classes from './contact-data.css';

export default class ContactData extends Component {
    state = {
        name : '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    handleOrder = (event) => {
        event.preventDefault(); // to prevent default behaviour which will be sending request
        // stored on firebase immediatelly
        this.setState({loading: true});

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Julia Dizhak',
                address: {
                    street: 'Hungry 1',
                    zipCode: '1000',
                    country: 'Ukraine'
                },
                email: 'yulia.scherbina@gmail.com',
                deliveryMethod: 'fastest'
            }
         };

        instance.post('/orders.json', order)
            .then(response => {
                this.setState({loading: false})
                this.props.history.push('/'); // redirect to homepage
            })
            .catch(error => {
                this.setState({loading: false})
            });
    }

    render() {
        let form = (
            <form>
                <Input 
                    type="text" 
                    name="name" 
                    label="Name"
                    placeholder="please enter your name" />

                <Input 
                    type="email" 
                    name="email"
                    label="Email"
                    placeholder="please enter your mail" />
                <Input type="text" name="street" placeholder="enter your street" />
                <Input type="number" name="post" placeholder="enter your post code" />
                
                <Textarea 
                    name="comments"
                    cols={20}
                    rows={3}
                    label="Comments" 
                    placeholder="please leave your comments" />
        
                <Button 
                    btnType="success"
                    clicked={this.handleOrder}>
                    order
                </Button>
            </form>   
        );
        
        if (this.state.loading === true) {
            form = <Spinner />
        }

        return (
            <div className={classes.contactData}>
                <h2>Enter your contact data</h2>
                 {form}
            </div>
        )
    }
}
