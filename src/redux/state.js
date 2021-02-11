const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE='SEND-MESSAGE';
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
            newMessageBode: ""
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
        if(action.type==='ADD-POST'){
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
       
        }
        else if (action.type==='UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        } else if (action.type===UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody=action.body;
            this._callSubscriber(this._state);

        }else if (action.type===SEND_MESSAGE){
            let body =this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody='';
            this._state.dialogsPage.messages.push({ id: 1, message: body });

            this._callSubscriber(this._state);

        }
    }
}
export const addPostActionCreator=()=>{
    return{
      type: 'ADD_POST'
    }
  }
  export const updateNewPostTextActionCreator=(text)=>{
    return{
      type:'UPDATE-NEW-POST-TEXT',newText:text
    }
  }
  export const sendMessageCreator=()=>({type: SEND_MESSAGE})
  
  export const updateNewMessageBodyCreator=(body)=>{
    return{
      type:UPDATE_NEW_MESSAGE_BODY,body:body
    }
  }

export default store;
window.state=store;
