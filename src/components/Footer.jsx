export default function Footer() {
  return (
    <div className="Footer">
        <p>
            ⓒ Wentana Ghile 2023
        </p>
        <div id='social-media'>
            <a href='https://www.linkedin.com/in/wentanaghile/' target='_blank'>
                <img className='social-media' src='/images/linkedin-icon.png' alt = 'LinkedIn Logo'/>
            </a>
            <a href='https://github.com/wghile' target='_blank' style={{paddingRight: '5px'}}>
                <img className='social-media' src='/images/github-icon.png' alt='GitHub Logo' />
            </a>
            <a href='mailto: weghile@gmail.com'>
                <img className='social-media' src='/images/email-icon.png' alt='Email Icon'/>
            </a>
        </div>
    </div>
  )
}
