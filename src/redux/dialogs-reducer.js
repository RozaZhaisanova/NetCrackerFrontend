const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
  messages: [{ id: 0, message: 'Hi' },
  { id: 1, message: 'Wow' },
  { id: 2, message: 'Yo' }],
  dialogs: [{ id: 0, name: 'Gera' },
  { id: 1, name: 'Sveta' },
  { id: 2, name: 'Roza' }],
  newMessageBody: ""
};
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;

            return state;


        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 1, message: body });



            return state;
        default:
            return state;

    }
}
export const sendMessageCreator=()=>({type: SEND_MESSAGE})
  
export const updateNewMessageBodyCreator=(body)=>{
  return{
    type:UPDATE_NEW_MESSAGE_BODY,body:body
  }
}
export default dialogsReducer;