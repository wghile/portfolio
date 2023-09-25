import './App.css'

export default function App() {

  return (
    <div className='App'>
      App
      <nav>
        <ul>
            <li>
                About Me
            </li>
            <li>
                Projects
            </li>
            <li>
                Contact
            </li>
        </ul>
      </nav>
      <main></main>
      <footer>
        <p>
            ⓒ Wentana Ghile
        </p>
        <div id='social-media'>
            <a href='https://www.linkedin.com/in/wentanaghile/' target='_blank'>
                <img className='social-media' src='/images/linkedin-icon.png' alt = 'LinkedIn Logo'/>
            </a>
            <a href='https://github.com/wghile' target='_blank'>
                <img className='social-media' src='/images/github-icon.png' alt='GitHub Logo' />
            </a>
            <a href='mailto: weghile@gmail.com'>
                <img className='social-media' src='/images/email-icon.png' alt='Email Icon'/>
            </a>
        </div>
      </footer>
    </div>
  )
}
