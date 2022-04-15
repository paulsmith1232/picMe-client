import React from 'react'
import { Card, Divider, Grid, Icon, Image, Segment, Comment, Header } from 'semantic-ui-react'
import './PostMain.css';
// import picture from '../resources/272996463_335150491953636_4476931795740479873_n.jpg';




const PostMain = ({postData}) => {
  // const commentList = postData.comments.map((comment) => {

  console.log(postData);
  const picture = postData.img;
  return (
    <Segment >
      <Grid container>
        <Grid.Column width={5}>
          
          <Card.Header as='h1'><Icon name='user' />{postData.username}</Card.Header>
          <br></br>
          <Card.Description>
          {postData.postText}
          </Card.Description>
          
          <Comment.Group>
            <Header as='h5' dividing>
              Comments
            </Header>
            <Comment>
              <Comment.Avatar src='' />
              <Comment.Content>
                <Comment.Author as='a'>Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How wonderful!</Comment.Text>
              
              </Comment.Content>
            </Comment>
          </Comment.Group>

        </Grid.Column>
        <Grid.Column width={11}>
          <Image src={postData.img}  size='huge' floated='right'/>          
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default PostMain;