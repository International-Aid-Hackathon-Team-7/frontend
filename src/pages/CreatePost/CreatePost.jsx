import { useEffect, useRef, useState } from "react";
import { getAllCategories, createPost } from "../../services/postServices";
import { useNavigate } from "react-router-dom";

import { uploadFile } from "react-s3";

import styles from "./CreatePost.module.css";

window.Buffer = window.Buffer || require("buffer").Buffer;

const S3_BUCKET = "bridge-app-bucket";
const REGION = "us-east-1";
const ACCESS_KEY = process.env.REACT_APP_ACCESSKEYID;
const SECRET_ACCESS_KEY = process.env.REACT_APP_SECRETACCESSKEY;

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};

export default function CreatePost(props) {
  const formElement = useRef();
  const [validForm, setValidForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    isAnonymous: false,
    media: "",
    category: "Carbon Footprint",
  });
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  const [fileName, setFileName] = useState("No File Chosen");

  useEffect(() => {
    getAllCategories().then((categories) => {
      console.log("just pulled the cats", categories);
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let owner = props.user.id;
    let categoryId = categories.filter(
      (category) => category.category === formData.category
    );
    const postFormData = {
      owner: owner,
      category: formData.category,
      title: formData.title,
      content: formData.content,
      media: formData.media,
      isAnonymous: formData.isAnonymous,
    };
    createPost(`/${categoryId[0]._id}`, postFormData);
    navigate("/forum");
  };

  const handleChangePhoto = (evt) => {
    console.log("in the upload photo function: ", evt.target.files[0]);
    setFileName(evt.target.files[0].name);
    uploadFile(evt.target.files[0], config)
      .then((data) => {
        console.log(data);
        setFormData({ ...formData, media: data.location });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const categoryOptions = categories.map((category) => {
    return <option value={category.category}>{category.category}</option>;
  });

  return (
    <>
      <div className={styles.formContainer}>
        <h1 className={styles.pageTitle}>Create Post</h1>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
          <div className={styles.titleInputContainer}>
            <label htmlFor="title-input" className={styles.createPostTitle}>
              <span>Title:</span>
            </label>
            <input
              type="text"
              className={styles.textInput}
              id="title-input"
              name="title"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter title"
              required
            />
          </div>

          <div className={styles.contentInputContainer}>
            <label htmlFor="content-input">
              <span>Content:</span>
            </label>
            <textarea
              type="text"
              className={styles.contentInput}
              id="content-input"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Enter content"
              required
            />
            {/* <div classname={styles.wordsRemaining}>300 words remaining</div> */}
          </div>

          <div className={styles.mediaUploadContainer}>
            Media:
            <div className={styles.uploadLabel}>
              <input
                type="file"
                className={styles.uploadButton}
                id="media-upload"
                name="media"
                accept="image/*"
                onChange={handleChangePhoto}
              />
              <label for="media-upload" className={styles.fileUploadButton}>
                Choose File
              </label>
              <div className={styles.fileName}> {fileName}</div>
            </div>
          </div>

          <div className={styles.categorySelectionContainer}>
            <span>Category:</span>
            <select
              onChange={(event) => handleChange(event)}
              name="category"
              id="selectCategory"
              className={styles.categorySelection}
            >
              {categoryOptions}
            </select>
          </div>

          <div className={styles.postAnonymously}>
            <label for="anonymous" className={styles.switch}>
              <input type="checkbox" id="anonymous"/>
              <span className={styles.slider}></span>
            </label>
              Post Anonymously
          </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!validForm}
            >
              Create Post
            </button>
        </form>
      </div>
    </>
  );
}
