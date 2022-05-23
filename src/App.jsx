import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Learn from './pages/Learn/Learn';
// import Climate from './pages/ClimateAbout/Climate'
// import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as postService from './services/postServices'
import Forum from './pages/Forum/Forum'
import CreatePost from './pages/CreatePost/CreatePost'
// import CreateProfile from './pages/CreateProfile/CreateProfile'
import About from './pages/About/About'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [forumPostsData , setForumPostsData] = useState({});
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    postService.getAllPosts().then((posts) => {
      // console.log({posts});
      const forumPosts = posts.filter(post => post.category !== "Learning");
      console.log(forumPosts);
      setForumPostsData(forumPosts);
    })
  },[]);

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} forumPostsData={forumPostsData}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/learn"
          element={<Learn  />}
        />
        {/* <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/forum/*"
          element={<Forum forumPostsData={forumPostsData} user={user}/>}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/createpost"
          element={<CreatePost user={user}/>}
        />
        {/* <Route
          path="/createprofile"
          element={<CreateProfile />}
        /> */}
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}

export default App
