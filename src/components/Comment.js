import React, { useContext, useRef, useEffect, useState } from "react";

import { ShowContext } from "./showContext";
import UserComment from "./UserComment";
import axios from "axios";
import { Modal, Button } from "semantic-ui-react";

const Comment = () => {
  const { comments } = useContext(ShowContext);
  const [showComments, toggleComments] = comments
  const [clickState, setClickState] = useState(false);
  const [content, setContent] = useState("");
  const cardRef = useRef();


  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        toggleComments({
          status: false,
          post: null
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickState, toggleComments]);

  const handleSubmit = (e) => {
    console.log('submitting')
    e.preventDefault();
    var postId = showComments.postData._id;
    var token = localStorage.getItem("my_user_token");
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    var userId = JSON.parse(atob(base64)).id;

    var data = JSON.stringify({
      content
    });
    var config = {
      method: "post",
      url: `${process.env.REACT_APP_BE}/posts/add-comment/${postId}/${userId}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal onClick={() => setClickState(!clickState)} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}  open={open} className="comments-modal" trigger={<Button className="post-button">Show Comments</Button>}>
      <div ref={cardRef} className="comment-card">
        <div
          className="comment-img"
          style={{
            background: `url(${showComments.postData.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        ></div>
        <div className="comments-main">
          <div className="post-card-header">
            {showComments.postData.username}
          </div>
          {showComments.postData.comments.map((ele, i) => {
            return <UserComment key={i} item={ele} />;
          })}
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <input
              onChange={(e) => setContent(e.target.value)}
              placeholder="say something..."
              className="form-input"
              type="text"
            />
          </form>
        </div>
      </div>
    </Modal>
  );
};
export default Comment;