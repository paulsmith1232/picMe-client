/*
* FILE          :   PostMain.js
* PROJECT       :   SENG3080 - Group Project
* PROGRAMMER    :   Paul Smith
* STUDENT #     :   7964422
* FIRST VERSION :   2022-04-18
* DESCRIPTION   :   The post display for the home screen.
*/
import React, { useContext } from 'react'
import { Card, Grid, Icon, Image, Segment, Comment, Header } from 'semantic-ui-react'
import './PostMain.css';
import { ShowContext } from './showContext';

const PostMain = ({postData}) => {
  const { comments } = useContext(ShowContext);
  const [showComments, toggleComments] = comments;
  const handleClick = () => {
    toggleComments({
      status: true,
      postData
    });
  };

  // post construted from various semantic-ui-react components
  return (
    <Segment >
      <Grid container>
        <Grid.Column width={5}>          
          <Card.Header as='h1'><Icon name='user' />{postData.username}</Card.Header>
          <br></br>
          <Card.Description>
          {postData.caption}
          </Card.Description>
          
          <Comment.Group>
            <Header as='h5' dividing>
              Comments
            </Header>
            {postData.comments.length > 0
          ? <p onClick={handleClick} className="view-comments">
              View all comments
            </p>
          : <p onClick={handleClick} className="view-comments">
              Post a comment
            </p>}
          </Comment.Group>

        </Grid.Column>
        <Grid.Column width={11}>
          <Image src={postData.image}  size='huge' floated='right'/>          
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PostMain;