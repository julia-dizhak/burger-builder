import React, { Component } from 'react';
import Button from './../../shared/ui/Button';

import instance from './../../utils/axios-orders';
import Spinner from './../../components/UI/Spinner';

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
