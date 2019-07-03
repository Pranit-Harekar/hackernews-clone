import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { History } from 'history'
import { LoginMutation } from './__generated__/LoginMutation'
import { SignupMutation } from './__generated__/SignupMutation'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component<{ history: History }> {
  state = {
    login: true, // switch between Login and SignUp
    email: '',
    password: '',
    name: '',
  }

  public render() {
    const { login, email, password, name } = this.state
    return (
      <div>
        <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
        <div className="flex flex-column">
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div className="flex mt3">
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={(data: LoginMutation & SignupMutation) => this._confirm(data)}
          >
            {(mutation: any) => (
              <div className="pointer mr2 button" onClick={mutation}>
                {login ? 'login' : 'create account'}
              </div>
            )}
          </Mutation>
          <div className="pointer button" onClick={() => this.setState({ login: !login })}>
            {login ? 'need to create an account?' : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  public _confirm = async (data: LoginMutation & SignupMutation) => {
    if (this.state.login && data.login) {
      const { token } = data.login
      this._saveUserData(token)
      this.props.history.push(`/`)
    }

    if (!this.state.login && data.signup) {
      const { token } = data.signup
      this._saveUserData(token)
      this.props.history.push(`/`)
    }
  }

  public _saveUserData = (token: string | null) => {
    if (token) {
      localStorage.setItem(AUTH_TOKEN, token)
    }
  }
}

export default Login
