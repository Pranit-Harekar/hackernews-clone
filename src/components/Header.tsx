import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
import { History } from 'history'

interface IProps {
  history: History
}

const Header = (props: IProps) => {
  const authToken = localStorage.getItem(AUTH_TOKEN)

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <div className="fw7 mr1">Hacker News</div>
        {authToken && (
          <div className="flex">
            <Link to="/create" className="ml1 no-underline black">
              new
            </Link>
          </div>
        )}
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link to="/" className="ml1 no-underline black">
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN)
              props.history.push('/')
            }}
          >
            logout
          </div>
        ) : (
          <Link to="/login" className="ml1 no-underline black">
            login
          </Link>
        )}
      </div>
    </div>
  )
}

export default withRouter(Header)
