import React from 'react'
import renderHTML from 'react-render-html';
import moment from 'moment'
import './Post.css'
import { connect } from 'react-redux';

const PostSummary = ({post, deletePost, auth}) => {
    return (
        <div className="card">
          <div className="card-body">
            <h2>{post.title}</h2>
            {renderHTML(post.body)}
            <div className="footer">
              Posted by {post.authorFirstName} {post.authorLastName} ({post.authorCls}) {moment(post.createdAt.toDate()).calendar()} 
              {auth.uid === post.authorId &&
              <button onClick={() => {deletePost(post.id)}} className="btn btn-danger pull-right">Delete</button>
              }
            </div>
          </div>
        </div>
      )
    }

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps) (PostSummary);