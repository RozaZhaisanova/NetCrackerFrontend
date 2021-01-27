import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [{ id: 0, message: 'post1', likesCount: 11 },
        { id: 1, message: 'post2', likesCount: 12 }],
        newPostText: 'roni'

    },
    dialogsPage: {
        messages: [{ id: 0, message: 'Hi' },
        { id: 1, message: 'Wow' },
        { id: 2, message: 'Yo' }],
        dialogs: [{ id: 0, name: 'Gera' },
        { id: 1, name: 'Sveta' },
        { id: 2, name: 'Roza' }]
    }

}
export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);

}
export let updateNewPostText = (newText) => {

    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}
export default state;