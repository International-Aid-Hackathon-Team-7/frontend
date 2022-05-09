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
  const [conetentLength, setContentLength] = useState(300);

  useEffect(() => {
    getAllCategories().then((categories) => {
      setCategories(categories);
    });
  }, []);

  useEffect(() => {
    formElement.current.checkValidity()
      ? setValidForm(true)
      : setValidForm(false);
  }, [formData]);

  const handleChange = (evt) => {
    if (evt.target.name === "content") {
      if (evt.target.value === "") {
        setContentLength(300);
      } else {
        let contentArray = evt.target.value.split(" ");
        setContentLength(300 - contentArray.length);
      }
    }
    if (evt.target.name === "isAnonymous") {
      setFormData({ ...formData, [evt.target.name]: !formData.isAnonymous });
    } else {
      setFormData({ ...formData, [evt.target.name]: evt.target.value });
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let owner = props.user._id;
    let categoryId = categories.filter(
      (category) => category.category === formData.category
    );
    const postFormData = {
      owner: owner,
      category: formData.category,
      title: formData.title,
      content: formData.content,
      media: formData.media,
      // isAnonymous: formData.isAnonymous
    };
    console.log("Post Data: ", postFormData)
    createPost(`/${categoryId[0]._id}`, postFormData);
    navigate("/forum");
  };

  const handleChangePhoto = (evt) => {
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

  const categoryOptions = categories.map((category, index) => {
    return (
      <option key={index} value={category.category}>
        {category.category}
      </option>
    );
  });

  return (
    <>
      <div key="i1a" className={styles.formContainer}>
        <h1 className={styles.pageTitle}>Create Post</h1>
        <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
          <div key="i1" className={styles.titleInputContainer}>
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

          <div key="i2" className={styles.contentInputContainer}>
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
          </div>
          <div key="i2b" className={styles.wordsRemaining}>
            {conetentLength} words remaining
          </div>

          <div key="i3" className={styles.mediaUploadContainer}>
            Media:
            <div key="i3b" className={styles.uploadLabel}>
              <input
                type="file"
                className={styles.uploadButton}
                id="media-upload"
                name="media"
                accept="image/*"
                onChange={handleChangePhoto}
              />
              <label htmlFor="media-upload" className={styles.fileUploadButton}>
                Choose File
              </label>
              <div key="i3c" className={styles.fileName}>
                {" "}
                {fileName}
              </div>
            </div>
          </div>

          <div key="i4" className={styles.categorySelectionContainer}>
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

          <div key="i5" className={styles.postAnonymously}>
            <label htmlFor="anonymous" className={styles.switch}>
              <input
                type="checkbox"
                id="anonymous"
                name="isAnonymous"
                onChange={(event) => handleChange(event)}
              />
              <span className={styles.slider}></span>
              <span className={styles.anonymousText}>Post Anonymously</span>
            </label>
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
