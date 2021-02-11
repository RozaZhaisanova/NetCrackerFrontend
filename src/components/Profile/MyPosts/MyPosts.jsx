import React from "react";
import { addPostActionCreator, updateNewPostText, updateNewPostTextActionCreator } from "../../../redux/state";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {

let postElements = 
props.posts.map(p =>       <Post message ={p.message} likesCount ={p.likesCount}/>
);
let newPostElement = React.createRef();
let addPost=()=>{
  //props.addPost();
  props.dispatch(addPostActionCreator());
}
let onPostChange=()=>{
  let text=newPostElement.current.value;
  //props.updateNewPostText(text);
 // let action={type:'UPDATE-NEW-POST-TEXT',newText:text};
  let action=updateNewPostTextActionCreator(text);

  props.dispatch(action);

}
    return  (   
    <div className = {s.postsBlock}> <h3>My posts</h3>
      <div><div>
        <textarea onChange = {onPostChange} ref={newPostElement} value={props.newPostText}/></div>
      <button onClick={addPost}>Add post</button>  
      <button>Remove</button>  

      </div>
      <div className = {s.posts}>
      {postElements}

      </div>
    </div>
  )}
export default MyPosts;