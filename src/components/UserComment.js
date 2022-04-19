/*
* FILE          :   UserComment.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   The comment component to be displayed in the comment modal
*/
import React, { useEffect, useState } from "react";
import axios from "axios";

const UserComment = (item) => {
  const [comment, setComment] = useState(null);
  useEffect(() => {
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/comment/${item.item}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      }
    };

    axios(config)
      .then(function (response) {
        setComment(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="comment-line">
      {comment ? (
        <>
          User: {comment.username}  
          Comment: <span className="user-comment">{comment.content}</span>
        </>
      ) : null}
    </div>
  );
};

export default UserComment;