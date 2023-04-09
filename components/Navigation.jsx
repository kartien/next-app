import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'


function Navigation() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/services">Services</Link>
                        </li>
                    </ul>
                    <a className="navbar-brand ms-auto">Next First App</a>
                    <li className='ms-auto'>
                        <h2 >
                            <a href="https://github.com/kartien/next-app"><FaGithub /></a>
                        </h2>
                    </li>
                </div>
            </div>
        </nav>
    )
}

export default Navigation