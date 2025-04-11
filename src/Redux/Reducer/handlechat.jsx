const initialState = {
  chatUser: [],
};

const handleChat = (state = initialState, action) => {
  switch (action.type) {
    case 'user':
      return {
        ...state,
        chatUser: action.payload,
      };
      
    default:
      return state;
  }
};

export default handleChat;