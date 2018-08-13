
const postReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_BOATS':
	 return state.concat(action.data)
    case 'LOAD_BOAT':
	 return state.map((boat)=>{
        if(boat.id === action.id) {
          return {
             ...boat,
             detailview: action.detailview
	    }
          } else return boat;
       })
   
    case 'DELETE_BOAT':
      return state.filter((boat)=>boat.id !== action.id);
    case 'EDIT_BOAT':
      return state.map((boat)=>boat.id === action.id ? {...boat,editing:!boat.editing}:boat)
    case 'UPDATE':
      return state.map((post)=>{
        if(post.id === action.id) {
          return {
             ...post,
             title:action.data.newTitle,
             message:action.data.newMessage,
             editing: !post.editing
          }
        } else return post;
      })
    default:
      return state;
  }
}
export default postReducer;
