import React, { useContext } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { Button, Card, Icon, Label, Image } from "semantic-ui-react";
import LikeButton from './LikeButton'
import {AuthContext} from '../context/auth'
import DeleteButton from './DeleteButton'

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const { user } = useContext(AuthContext)

  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
       <LikeButton user={user} post={{id, likes, likeCount}}/>
        <Button as={Link} labelPosition="right">
          <Button color="blue" basic as={Link} to={`/posts/${id}`}>
            <Icon name="comments" />
          </Button>
          <Label basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
