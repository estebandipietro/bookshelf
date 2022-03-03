// 🐨 you'll need to import React and ReactDOM up here
import * as React from 'react'
import ReactDOM from 'react-dom'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

// 🐨 you'll also need to import the Logo component from './components/logo'
import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        const {username, password} = event.target.elements

        onSubmit({
          username: username.value,
          password: password.value,
        })
      }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

// 🐨 create an App component here and render the logo, the title ("Bookshelf"), a login button, and a register button.
// 🐨 for fun, you can add event handlers for both buttons to alert that the button was clicked
function App() {
  const [openModal, setOpenModal] = React.useState('none')

  function login(formData) {
    console.log('login', formData)
  }

  function register(formData) {
    console.log('register', formData)
  }

  return (
    <div>
      <Logo width="80" height="80" />
      <h1>Bookshelf</h1>
      <Dialog
        aria-label="Login form"
        isOpen={openModal === 'login'}
        onDismiss={() => setOpenModal('none')}
      >
        <h1>Login</h1>
        <LoginForm onSubmit={login} buttonText="Login" />
      </Dialog>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <Dialog
        aria-label="Register form"
        isOpen={openModal === 'register'}
        onDismiss={() => setOpenModal('none')}
      >
        <h1>Register</h1>
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>
    </div>
  )
}

// 🐨 use ReactDOM to render the <App /> to the root element
// 💰 find the root element with: document.getElementById('root')

ReactDOM.render(<App />, document.getElementById('root'))
