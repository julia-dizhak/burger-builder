import React, { Component } from 'react';
import styled from 'styled-components';
import Order from './Order';
import axios from './../utils/axios-orders';
import WithErrorHandler from './../hoc/WithErrorHandler';

class _Orders extends Component {
    state = {
        orders: [],
        loading: true
    };

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const fetchedOrders = [];
                for (let key in response.data) {
                    fetchedOrders.push({
                        ...response.data[key],
                        id: key
                    })
                }

                this.setState({
                    loading: false,
                    orders: fetchedOrders
                });
            })
            .catch(error => {
                this.setState({loading: false})
            })
    }

    render() {
        return (
            <div className={this.props.className}>
                {
                    this.state.orders.map(order1 => (
                        <Order
                            key={order1.id}
                            ingredients={order1.ingredients}
                            price={order1.price}
                        />
                    ))
                }
            </div>
        );
    }
}

const Orders = styled(_Orders)`
    padding: 0 15px;
    box-sizing: border-box;
`;

export default WithErrorHandler(Orders, axios);
