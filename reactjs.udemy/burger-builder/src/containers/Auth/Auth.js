import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import classes from './Auth.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spiner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/actions/index';

class Auth extends Component {

    state = {
        controls: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'E-mail'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        isSignup: false
    }

    checkValidity = (value, rules) => {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.isEmail) {
            const pattern = /.+@.+\..+/g;
            return pattern.test(value) && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (e, controlName) => {
        const updatedControls = {
            ...this.state.controls,
            [controlName]: {
                ...this.state.controls[controlName],
                value: e.target.value,
                valid: this.checkValidity(e.target.value, this.state.controls[controlName].validation),
                touched: true
            }
        };

        this.setState({ controls: updatedControls });
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.onAuth(
            this.state.controls.email.value,
            this.state.controls.password.value,
            this.state.isSignup
        );
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        });
    }

    render () {

        if (this.props.isAuth) {
            return <Redirect to="/"/>;
        }

        const formField = Object.keys(this.state.controls);
        let form = formField.map(fieldName => (
            <Input
                key={fieldName}
                elementType={this.state.controls[fieldName].elementType}
                elementConfig={this.state.controls[fieldName].elementConfig}
                value={this.state.controls[fieldName].value}
                invalid={!this.state.controls[fieldName].valid}
                shouldValidate={this.state.controls[fieldName].validation}
                touched={this.state.controls[fieldName].touched}
                changed={(e) => this.inputChangedHandler(e, fieldName)}
            />
        ));

        if (this.props.loading) {
            form = <Spiner/>;
        }

        let errorMessage = !this.props.error ? null : (<p>{this.props.error.message}</p>);

        return (
            <div className={classes.Auth}>
                <h3>{this.state.isSignup ? 'Sign In' : 'Login'}</h3>
                {errorMessage}
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType="Success">SUBMIT</Button>
                </form>
                <Button
                    clicked={this.switchAuthModeHandler}
                    btnType="Danger"
                >SWITCH TO {this.state.isSignup ? 'LOGIN' : 'SIGNUP'}</Button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuth: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
