const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
let initialState = {
  posts: [{ id: 0, message: 'post1', likesCount: 11 },
  { id: 1, message: 'post2', likesCount: 12 }],
  newPostText: 'roni'

};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 2,
                message: state.newPostText,
                likesCount: 0
            };


            state.posts.push(newPost);
            state.newPostText = '';
            return state;


        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;

            return state;
        default:
            return state;

    }
}
export const addPostActionCreator=()=>{
    return{
      type: ADD_POST
    }
  }
  export const updateNewPostTextActionCreator=(text)=>{
    return{
      type:UPDATE_NEW_POST_TEXT,newText:text
    }
  }
export default profileReducer;