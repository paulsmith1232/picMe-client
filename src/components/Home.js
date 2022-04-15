import React from 'react';
import HomeNavbar from './HomeNavbar';
import PostMain from './PostMain';

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
  const renderedPostList = postData.map((post) => {
    return <PostMain key={post.id} postData={post} />
  })
  return (
    <div>
      <HomeNavbar />
      {renderedPostList}

    </div>
  );
};

export default Home;