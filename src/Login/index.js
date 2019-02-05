import React, { Component } from 'react'
import Form from '../components/Form'
import Input from '../components/Input'
import Button from '../components/Button'

export class Login extends Component {
  onSubmit = () => {}
  onChange = () => {}
  render(){
    return (
      <Form onSubmit={this.onSubmit} className='form'>
        <Input type='text' placeholder='user' onChange={this.onChange} className='text-input' />
        <Input type='password' placeholder='password' onChange={this.onChange} className='password-input' />
        <Button type='submit' className='button-submit' text='Sigin' />
      </Form>
    )
  }
}

export default Login;