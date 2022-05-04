
import { Row, Col, Form, Button, FloatingLabel } from "react-bootstrap"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

export default function CreatePost() {
  const navigate = useNavigate()
  // return( <h1> create event</h1>)
  const [postForm, setpostForm] = useState({
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
    //     postForm,
    //     options
    //   )
    //   .then((response) => {
    //     setpostForm({})
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
        <h1 className="createCardTitle">Create Post</h1>
        <Form.Group className="mb-3" controlId="formGridTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            value={postForm.title}
            onChange={(e) =>
              setpostForm({ ...postForm, title: e.target.value })
            }
            required
            placeholder=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Content:</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            value={postForm.body}
            onChange={(e) =>
              setpostForm({ ...postForm, body: e.target.value })
            }
            required
            placeholder="Tell the world your story.."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Media:</Form.Label>
          <Form.Control
           type="file"
           multiple
            value={postForm.content}
            onChange={(e) =>
              setpostForm({ ...postForm, media: e.target.value })
            }
            required
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>category:</Form.Label>
            <Form.Select
              value={postForm.category}
              onChange={(e) =>
                setpostForm({ ...postForm, category: e.target.value })
              }
              required
            >
              <option>Please select a Category</option>
              <option value="Deforestation">Deforestation</option>
              <option value="Air Pollution">Air Pollution</option>
              <option value="Water Pollution">Water Pollution</option>
              <option value="Ground Pollution">Ground Pollution</option>
              <option value="Extreme Weather">Extreme Weather</option>
              <option value="Other">Other</option>
            </Form.Select>
          </Form.Group>

          <Row className="mb-3 mt-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Check
                type="switch"
                value={postForm.anonymous}
                onChange={(e) =>
                  setpostForm({ ...postForm, anonymous: !postForm.anonymous })
                }
                id="custom-switch"
                label="Post Anonymously"
                required
              />
            </Form.Group>
          </Row>
        </Row>

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