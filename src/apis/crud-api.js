 import axios from "axios";
 
 const url = "https://66bdf80174dfc195586e2e1d.mockapi.io/CRUD_API";


//  const readAllData = async ()=>{
//     const response = await fetch(url);

//     const data = await response.json();
//     return data;
//  };

 const readAllData = async ()=>{
    try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
      }
 };


//  const deleteUserData = async (userId) =>{
//     const response = await fetch(`${url}/${userId}`, {
//         method : "DELETE",
//     });
//     const data = await response.json();
//     return data;
//  };

const deleteUserData = async(userId) =>{
    const response = await axios.delete(`${url}/${userId}`);
    return response.data;
}

//  const addUserData = async(userData)=>{
//     const response = await fetch(url, {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {
//             "Content-Type" : "application/json; charset=utf-8"
//         },
//     });
//     const data = await response.json();
//     return data;
//  };

const addUserData = async (userData)=>{
    const response = await axios.post(url, userData, {
        headers : {
            "Content-Type" : "application/json; charset=utf-8"
        },
    });
   return response.data;
}

//  const editUserData = async(id, userdata)=>{
//   const response = await fetch(`${url}/${id}`, {
//     method: "PUT",
//     body: JSON.stringify(userdata),
//     headers : {
//         "Content-Type" : "application/json; charset=utf-8"
//     },
//   });
//   const data = await response.json();
//   return data;
//  }

const editUserData = async(id, userData)=>{
    const response = await axios.put(`${url}/${id}`, userData, {
        headers :{
            "Content-Type" : "application/json; charset=utf-8"
        },
    });
    return response.data;
}



 export {readAllData, deleteUserData, addUserData, editUserData};