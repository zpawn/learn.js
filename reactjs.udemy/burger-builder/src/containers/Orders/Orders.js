import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }

    componentDidMount () {
        axios.get('/orders.json')
            .then(res => {
                console.log('>>> res:', res.data);
                const fetchedOrders = [];

                for (let orderId in res.data) {
                    fetchedOrders.push({
                        ...res.data[orderId],
                        id: orderId
                    });
                }

                this.setState({
                    orders: fetchedOrders,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render () {

        let orders = <Spinner/>;

        if (!this.state.loading) {
            orders = this.state.orders.map(
                order => <Order
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price}
                />
            );
        }

        return (
            <div>
                {orders}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);
