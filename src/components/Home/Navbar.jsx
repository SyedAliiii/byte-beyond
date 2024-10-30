import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navBar justify-content-between justify-content-lg-start z_inf'>
      <Link className="slogan" to={'/'}>Byte & Beyond</Link>

        <ul className="links">
          <li>
            <Link className="link active" to={'/'}>Home</Link>
          </li>
          <li>
            <Link className="link" to={'/blogs'}>Blogs</Link>
          </li>
        </ul>

    </nav>
    // <nav className="navbar navbar-expand-lg nav-underline bg-light p-1 d-none">
    //     <div className="container-fluid">
    //         <Link className="navbar-brand" to={'/'}>Byte & Beyond</Link>
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //         </button>
    //         <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav">
    //             <li className="nav-item">
    //             <Link className="nav-link active" to={'/'}>Home</Link>
    //             </li>
    //             <li className="nav-item">
    //             <Link className="nav-link" to={'/blogs'}>Blogs</Link>
    //             </li>
    //         </ul>
    //         </div>
    //     </div>
    // </nav>

  )
}
