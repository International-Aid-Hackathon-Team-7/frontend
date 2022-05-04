import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default function CreateProfile() {
  const navigate = useNavigate()
  // return( <h1> create event</h1>)
  const [profileForm, setprofileForm] = useState({
    anonymous: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    // const token = localStorage.getItem("jwt")
    // console.log("token", token)
    // // make the auth headers
    // const options = {
    //   headers: {
    //     Authorization: token,
    //   },
    // }
    // axios
    //   .post(
    //     `${process.env.REACT_APP_SERVER_URL}/api-v1/events/`,
    //     profileForm,
    //     options
    //   )
    //   .then((response) => {
    //     setprofileForm({})
    //     const eventId = response.data[1]._id
    //     navigate(`/events/${eventId}`)
    //   })
    //   .catch(console.log)
  }
  
  return (
    <>
    <div style={{padding: '50px'}}>
      <Form
        className="BebasNeue createFormCard container-fluid mb-5"
        onSubmit={handleSubmit}
        style={{ color: "black" }}
      >
        <h1 className="createCardTitle">Create Profile</h1>
        <Form.Group className="mb-3" controlId="formGridTitle">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            value={profileForm.first_name}
            onChange={(e) =>
              setprofileForm({ ...profileForm, first_name: e.target.value })
            }
            required
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridTitle">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            value={profileForm.last_name}
            onChange={(e) =>
              setprofileForm({ ...profileForm, last_name: e.target.value })
            }
            required
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridTitle">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="text"
            value={profileForm.email}
            onChange={(e) =>
              setprofileForm({ ...profileForm, email: e.target.value })
            }
            required
            placeholder=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Avatar:</Form.Label>
          <Form.Control
           type="file"
           multiple
            value={profileForm.avatar}
            onChange={(e) =>
              setprofileForm({ ...profileForm, avatar: e.target.value })
            }
            required
          />
        </Form.Group>

        <Button
          style={{ color: "white" }}
          size="lg"
          type="submit"
          className="mb-3"
        >
          next
        </Button>
      </Form>
      </div>
    </>
  )
}