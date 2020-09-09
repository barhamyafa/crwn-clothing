import React from 'react';

import './sign-up.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        const { displayName, email, password, confirmPassword } = this.state;
        event.preventDefault();
        if(password !== confirmPassword) {
            alert (`Password's not match`);
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(`Error is accured`)
        }

    }
    handleChange = event => {
        const {name, value}= event.target
        this.setState({
            [name]: value
        })

    }
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        label='display Name'
                        name='displayName'
                        type='text'
                        value={displayName}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='email'
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='password'
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <FormInput
                        label='confirm password'
                        name='confirmPassword'
                        type='password'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>
                        sign up
                    </CustomButton>
                </form>

            </div>
        )
    }

}
export default SignUp;