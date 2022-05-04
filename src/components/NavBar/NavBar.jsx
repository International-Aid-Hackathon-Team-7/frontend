import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <h1>Welcome, {user.name}</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/climate">Featured</Link></li>
            <li><Link to="/forum">Forum</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/createpost">Create Post</Link></li>
            <li><Link to="/createprofile">Create Profile</Link></li>
            <li><Link to="" onClick={handleLogout}>Log out</Link></li>
            {/* <li><Link to="/changePassword">Change Password</Link></li> */}
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/climate">Featured</Link></li>
            <li><Link to="/forum">Forum</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
