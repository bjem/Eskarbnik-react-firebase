import React, { Component } from 'react';
import PostList from './PostList';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase';
import { createPost } from './../actions/classActions';
import { compose } from 'redux';
import firebase from 'firebase/app';

class ManageClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',

    };
    // bind
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onHandleChange(e) {
    this.setState({ body: e });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createPost(this.state);
    this.setState({
      title: '',
      body: ''
    });
  }

  deletePost(id) {
    firebase.firestore().collection('posts').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={e => {
                this.setState({ title: e.target.value.substr(0,50) });
              }}
              ref="title"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <ReactQuill
              modules={ManageClass.modules}
              formats={ManageClass.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onHandleChange}          
            />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
        <br />
        <div>
        <PostList deletePost={this.deletePost} posts={posts} />
        </div>
      </div>
    );
  }
}

ManageClass.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

ManageClass.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
];

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createPost: (newPost) => dispatch(createPost(newPost))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
      {collection: 'posts', orderBy: ['createdAt', 'desc'] }
  ])
)(ManageClass)