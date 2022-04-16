import React, { useEffect, useState } from 'react';
import HomeNavbar from '../components/HomeNavbar';
import PostMain from '../components/PostMain';
import axios from "axios";
import { useNavigate } from "react-router-dom";



// The main feed component - will serve as the homepage


const postData = [
  {
    id: '1',
    username: "Matthew",
    postText: "Just having my favourite drink!",
    img: './images/272996463_335150491953636_4476931795740479873_n.jpg',
    comments: [
      {
        username: "Terry",
        postText: "How wonderful!"
      }
    ]
  },
  {
    id: '12',
    username: "Terry",
    postText: "Painted this in like an hour",
    img: './images/273452909_329727205734743_9149999286650663727_n.jpg',
    comments: [
      {
        username: "Terry",
        postText: "How wonderful!"
      }
    ]
  },
  {
    id: '3',
    username: "Jim",
    postText: "I'm sad.",
    img: './images/pierre-bamin-5B0IXL2wAQ0-unsplash.jpg',
    comments: [
      {
        username: "Terry",
        postText: "How wonderful!"
      }
    ]
  }
]

const Home = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = React.useState(null);
  const [userName, setUsername] = useState("");


  useEffect(() => {
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
  }, []);

  const renderedPostList = postData.map((post) => {
    return <PostMain key={post.id} postData={post} />
  })

  return (
    <div>
      <p>{!posts ? "Loading..." : posts}</p>
      <HomeNavbar />
      {renderedPostList}

    </div>
  );
};

export default Home;