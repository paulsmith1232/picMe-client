import React, { useRef, useEffect, useState, useContext } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import { ShowContext } from "./showContext";
import "./AddPost.css"
import { Button, Form, Modal, Image } from "semantic-ui-react";

const AddPost = () => {
  const cardRef = useRef();

  const { add } = useContext(ShowContext);
  const [showAddPosts, toggleAddPost] = add;
  const [clickState, setClickState] = useState(false);
  const [picture, setPicture] = useState(null);
  const [caption, setCaption] = useState("");
  const [showError, setShowError] = useState(false);

  const [open, setOpen] = useState(false);

  useEffect(
    () => {
      function handleClickOutside(event) {
        if (cardRef.current && !cardRef.current.contains(event.target)) {
          toggleAddPost(!showAddPosts)
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    [clickState]
  );

  function getFile(file) {
    var exp = /\d+/;
    if (file.size.match(exp)[0] > 2000) {
      setShowError(true);
    } else {
      setShowError(false);
      setPicture(file);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    var token = localStorage.getItem("my_user_token");
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    var userId = JSON.parse(atob(base64)).id;

    console.log(userId);
    var data = JSON.stringify({
      caption,
      image: picture.base64
    });

    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/posts/add/${userId}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      },
      data: data
    };

    axios(config)
      .then(function(response) {
        toggleAddPost(!showAddPosts);
      })
      .catch(function(error) {
        console.log(error);
      });    

  };
  return (
    <Modal onClick={() => setClickState(!clickState)} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}  open={open} className="comments-modal" trigger={<Button className="post-button">Add Post</Button>}>
      <div ref={cardRef} className="comment-card">
        <div
          className="comment-img add-post"          
        >
          {showError && <p className="error">File must be less 2mb</p>}
          {!picture
            ? <FileBase64 onDone={getFile} />
            : <span onClick={() => setPicture(null)} className="remove-button">
                x
              </span>}
        </div>
        {picture ?
          
            <Image centered={true} size='medium' src={picture.base64} ></Image> 
          :
          null
        }

        <div className="comments-main">
          <Form onSubmit={e => handleSubmit(e)} className="form">
            <input
              onChange={e => setCaption(e.target.value)}
              placeholder="say something..."
              className="form-input"
              type="text"
            />
            
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

export default AddPost;