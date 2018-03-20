import React, { Component } from 'react';

import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]
                },
                value: ''
            }
        },
        loading: false
    }

    inputChangedHandler = (e, fieldName) => {

        const updatedOrderForm = { ...this.state.orderForm };

        // Deep Clone
        const updatedFormElement = { ...updatedOrderForm[fieldName] };

        updatedFormElement.value = e.target.value;
        updatedOrderForm[fieldName] = updatedFormElement;

        this.setState({ orderForm: updatedOrderForm });
    }

    orderHandler = (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
        };

        axios.post('/orders.json', order)
            .then(res => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render () {

        const formFieldsName = Object.keys(this.state.orderForm);

        let form = (
            <form>
                {formFieldsName.map(fieldName => (
                    <Input
                        key={fieldName}
                        elementType={this.state.orderForm[fieldName].elementType}
                        elementConfig={this.state.orderForm[fieldName].elementConfig}
                        value={this.state.orderForm[fieldName].value}
                        changed={(e) => this.inputChangedHandler(e, fieldName)}
                    />
                ))}
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner/>
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
