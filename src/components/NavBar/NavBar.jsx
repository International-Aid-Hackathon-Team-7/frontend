import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/climate">Featured</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/forum">Forum</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/createpost">Create Post</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/createprofile">Create Profile</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="" onClick={handleLogout}>Log out</Link>
            </li>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
            </ul>
        </div>
        <Link className={"navbar-brand"} to="/">Bridge</Link>
      </nav>
      :
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className='nav-link' to="/">Home</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/login">Log In</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/signup">Sign Up</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/climate">Featured</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/forum">Forum</Link></li>
            <li className="nav-item"><Link className='nav-link' to="/about">About Us</Link></li>
          </ul>
          </div>
          <Link className={"navbar-brand"} to="/">Bridge</Link>
        </nav>
      }
    </>
  )
}

export default NavBar
