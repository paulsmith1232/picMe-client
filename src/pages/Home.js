import React, { useEffect, useState } from 'react';
import PostMain from '../components/PostMain';
import Comment from '../components/Comment';
import AddPost from '../components/AddPost';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ShowContext } from '../components/showContext';

// The main feed component - will serve as the homepage

const Home = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = React.useState([]);
  const [userName, setUsername] = useState("");

  const [showComments, toggleComments] = useState(false);
  const [showAddPosts, toggleAddPost] = useState(false);



  useEffect(() => {   
    if(posts.length === 0){
      getData();
    }    
  });

  const getData = () =>{
    var token = localStorage.getItem("my_user_token");
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace("-", "+").replace("_", "/");
    setUsername(JSON.parse(atob(base64)).username);
    var config = {
      method: "get",
      url: `${process.env.REACT_APP_BE}/posts`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("my_user_token")}`
      }
    };
    axios(config)
      .then(function (response) {
        setPosts(response.data);
        
      })
      .catch(function (error) {
        navigate("/");
        console.log(error);
      });
  }

  useEffect(()=>{
    
  },[showAddPosts])


  

  const renderedPostList = posts.map((post, i) => {
    return <PostMain key={i} postData={post} />
  })

  return (
    <ShowContext.Provider
      value={{
        comments: [showComments, toggleComments],
        add: [showAddPosts, toggleAddPost],
      }}
    >
      <div>
    
        {showComments.status ? <Comment /> : null}
        <AddPost />
        {renderedPostList}
      </div>
    </ShowContext.Provider>
  );
};

export default Home;