import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='Home'>
        <h1>
          Welcome
        </h1>
        <div id='text'>
          <img id='pic' src='/images/profile.png' alt='Profile Pic' />
          <p id='greeting'>
            Hi, I'm Wentana <span id='flag'>🇪🇷</span>
          </p>
          <p id='goals'>
            Full-Stack Software Engineer in the Making
          </p>
        </div>
    </div>
  )
}
