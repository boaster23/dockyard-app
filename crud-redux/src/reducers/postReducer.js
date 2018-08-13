
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
      return state.map((boat)=>boat.id === action.id ? {...boat,editing:!boat.editing, detailview:!boat.detailview}:boat)
    case 'UPDATE':
      return state.map((boat)=>{
        if(boat.id === action.id) {
          return {
             ...boat,
             name:action.data.newName,
             type:action.data.newType,
	     photo:action.data.newPhoto,
	     work_description:action.data.newWorkDescription,
	     length:action.data.newLength,
	     delivery_date:action.data.newDeliveryDate,
	     arrival_date:action.data.newArrivalDate,
	     status:action.data.newStatus,
             editing: !boat.editing
          }
        } else return boat;
      })
    default:
      return state;
  }
}
export default postReducer;
