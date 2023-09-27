import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className='Nav'>
        <ul>
            <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                    Home
                </li>
            </Link>
            <Link to='/about' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                    About Me
                </li>
            </Link>
            <Link to='/portfolio' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                    Projects
                </li>
            </Link>
            {/* <Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>
                <li>
                    Contact
                </li>
            </Link> */}
        </ul>
    </div>
  )
}
