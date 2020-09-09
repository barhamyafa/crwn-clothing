import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmi = async event => {
        event.preventDefault();
        try {
            await auth.signInWithEmailAndPassword()
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(`Error is accured`)
        }
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange =event=> {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' value={this.state.email} type='email' label='Email' handleChange={this.handleChange} required />
                    <FormInput name='password' value={this.state.password} type='password' label='Password' handleChange={this.handleChange} required />
                    <div className='button'>
                        <CustomButton name='submit' type='submit' >sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} >sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;