import APIData from '../APIData';

const boatReducer = (state = [], action) => {
  let APIPath='';
  let method='';
  let data={};

  switch(action.type) {
    case 'LOAD_WORKERS':
	 let workers=[action.initialWorkers];
	 return state.concat(workers)
    case 'LOAD_BOATS':
	 return state.concat(action.initialBoats)
    case 'LOAD_BOAT':
	 return state.map((boat)=>{
        if(boat.id === action.id) {
          return {
             ...boat,
             detailview: action.detailview
	    }
          } else return boat;
       })
    case 'ADD_BOAT':
	action.data.id=state.length+1
	APIData({method:"POST",data: action.data, API_PATH:'/boats'})
	return state.concat(action.data)
    case 'DELETE_BOAT':
	APIPath='/boats/'+action.id
	data=state.filter((boat)=>boat.id !== action.id);
	APIData({method:"DELETE",data: data, API_PATH: APIPath})
        return data
    case 'EDIT_BOAT': 
	return state.map((boat)=>boat.id === action.id ? {...boat,editing:!boat.editing, detailview:!boat.detailview}:boat)
    case 'UPDATE':
      return state.map((boat)=>{
	APIPath='/boats/'+action.id
	data={
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
        if(boat.id === action.id) {
	  APIData({method:"PATCH",data: data, API_PATH: APIPath})
          return data
        } else return boat;
      })
    default:
      return state;
  }
  
}

export default boatReducer;
