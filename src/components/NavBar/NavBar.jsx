import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div style={{display: "flex"}}>
          <Link className={"navbar-brand"} to="/">Bridge</Link>
          <Link  className="nav-link" to="#">
            <img
              src="/notification.png"
              alt="notifications"
              className={styles.navBar}
            />
          </Link>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/learn">Learn</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forum">Forum</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li> */}
            <li className="nav-item">
              <Link  className="nav-link" to="/createpost">Create Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="" onClick={handleLogout}>Log out</Link>
            </li>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
            </ul>
        </div>
      </nav>
      :
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className={"navbar-brand"} to="/">Bridge</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className='nav-link' to="/">Home</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/login">Log In</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/signup">Sign Up</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/learn">Learn</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/forum">Forum</Link></li>
            {/* <li className="nav-item"><Link className='nav-link' to="/about">About Us</Link></li> */}
          </ul>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar
