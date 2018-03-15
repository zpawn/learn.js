import React, { Component } from 'react';
import axios from "../../../axios";

import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from "../FullPost/FullPost";
import { Route } from 'react-router-dom';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount () {

        console.log('>>> Posts:', this.props);

        axios.get('/posts')
            .then(res => {
                const posts = res.data.slice(0, 4),
                    updatedPosts = posts.map(post => {
                        return {
                            ...post,
                            author: 'Max'
                        }
                    });
                this.setState({
                    posts: updatedPosts,
                    // error: false
                });
            })
            .catch(err => {
                console.log('>>> errBlog:', err);
                // this.setState({ error: true });
            });
    }

    postSelectedHandler = (id) => {
        // this.props.history.push({ pathname: '/posts/' + id });
        this.props.history.push('/posts/' + id);
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something want wrong!</p>;

        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id}>
                        <Post
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}
                        />
                    // </Link>
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Posts;
