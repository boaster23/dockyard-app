

const APIData = (data = {}) => {    

    const API_URL = 'http://localhost:3000'
                                               
    fetch(API_URL+data.API_PATH, {
  		headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json'
  		},
  		method: data.method,                                                   
  		body: JSON.stringify(data.data)                                        
    })
   
}

export default APIData;
