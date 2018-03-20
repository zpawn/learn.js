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
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false
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

    checkValidity = (value, rules) => {
        let isValid = false;

        if (rules.required) {
            isValid = value.trim() !== '';
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength;
        }

        return isValid;
    }

    inputChangedHandler = (e, fieldName) => {

        const updatedOrderForm = { ...this.state.orderForm };

        // Deep Clone
        const updatedFormElement = { ...updatedOrderForm[fieldName] };

        updatedFormElement.value = e.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[fieldName] = updatedFormElement;

        console.log('>>> afterValidation:', updatedOrderForm);

        this.setState({ orderForm: updatedOrderForm });
    }

    orderHandler = (e) => {
        e.preventDefault();

        this.setState({ loading: true });

        const formData = {};
        for (let formFieldName in this.state.orderForm) {
            formData[formFieldName] = this.state.orderForm[formFieldName].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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
            <form onSubmit={this.orderHandler}>
                {formFieldsName.map(fieldName => (
                    <Input
                        key={fieldName}
                        elementType={this.state.orderForm[fieldName].elementType}
                        elementConfig={this.state.orderForm[fieldName].elementConfig}
                        value={this.state.orderForm[fieldName].value}
                        changed={(e) => this.inputChangedHandler(e, fieldName)}
                    />
                ))}
                <Button btnType="Success">ORDER</Button>
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
