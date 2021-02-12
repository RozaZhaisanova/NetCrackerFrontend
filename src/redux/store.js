import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store={
    _state:{
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
            { id: 2, name: 'Roza' }],
            newMessageBody: ""
        }
       
    },
    _callSubscriber(){
        console.log('dfg');
    },
    getState(){
        return this._state;
    },
    

    subscribe (observer){
        this._callSubscriber=observer;
    },
    dispatch(action){

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
  
    }
}



export default store;
window.state=store;
