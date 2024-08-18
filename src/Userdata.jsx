import { useEffect, useState } from "react";
import UserCard from "./components/UserCard.jsx";
import { deleteUserData, readAllData , addUserData, editUserData} from "./apis/crud-api.js";

const Userdata = () =>{
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });
    const [prods, setProds] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);
    const [editingUserId, setEditingUserId] = useState(null);
    
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleAddressChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value
        }
      });
    };
  
    const handleGeoChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          geo: {
            ...formData.address.geo,
            [name]: value
          }
        }
      });
    };
  
    const handleCompanyChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        company: {
          ...formData.company,
          [name]: value
        }
      });
    };


    const loadData = async()=>{
        const data = await readAllData();
         setProds(data);
        // console.log(data);
    }

    const removeUserData = async(userId)=>{
      await deleteUserData(userId);
      setProds(prods.filter((users)=>users.id !== userId));
    }

    const createUserData = async (formData)=>{
      const newUser = await addUserData(formData);
       setProds([...prods, newUser]);
    }
    useEffect(()=>{
        loadData();
    },[]);

    const updateUserData = async (id, formData) => {
      const updatedUser = await editUserData(id, formData);
      setProds(prods.map((user) => (user.id === id ? updatedUser : user)));
    };
  
    const handleEditClick = (user) => {
      setFormData(user);
      setIsEditMode(true);
      setEditingUserId(user.id);
    };

    const handleSubmit = (e)=>{
      e.preventDefault();
      if(isEditMode){
        updateUserData(editingUserId, formData);
      }else {
      createUserData(formData);
      }
      resetForm();
      setIsEditMode(false);
      setEditingUserId(null);
    };

    const resetForm = () => {
      setFormData({
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: ''
          }
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      });
    };
 return (
    <>
      <h1>Welcome To User Data Page</h1>
      <br/><br/>
      <div className ='form-container'>
      <form onSubmit={handleSubmit}>
        <br/>
          <h4>User Form to Add New User</h4>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              className="uniform-input"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              className="uniform-input"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              className="uniform-input"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Street:</label>
            <input
              type="text"
              name="street"
              className="uniform-input"
              value={formData.address.street}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label>Suite:</label>
            <input
              type="text"
              name="suite"
              className="uniform-input"
              value={formData.address.suite}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label>City:</label>
            <input
              type="text"
              name="city"
              className="uniform-input"
              value={formData.address.city}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label>Zipcode:</label>
            <input
              type="text"
              name="zipcode"
              className="uniform-input"
              value={formData.address.zipcode}
              onChange={handleAddressChange}
            />
          </div>
          <div>
            <label>Latitude:</label>
            <input
              type="text"
              name="lat"
              className="uniform-input"
              value={formData.address.geo.lat}
              onChange={handleGeoChange}
            />
          </div>
          <div>
            <label>Longitude:</label>
            <input
              type="text"
              name="lng"
              className="uniform-input"
              value={formData.address.geo.lng}
              onChange={handleGeoChange}
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="text"
              name="phone"
              className="uniform-input"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Website:</label>
            <input
              type="text"
              name="website"
              className="uniform-input"
              value={formData.website}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Company Name:</label>
            <input
              type="text"
              name="name"
              className="uniform-input"
              value={formData.company.name}
              onChange={handleCompanyChange}
            />
          </div>
          <div>
            <label>CatchPhrase:</label>
            <input
              type="text"
              name="catchPhrase"
              className="uniform-input"
              value={formData.company.catchPhrase}
              onChange={handleCompanyChange}
            />
          </div>
          <div>
            <label>Business:</label>
            <input
              type="text"
              name="bs"
              className="uniform-input"
              value={formData.company.bs}
              onChange={handleCompanyChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">{isEditMode ? 'Update User' : 'Add User'}</button><br/>
        </form>
      </div>
      <br/>
      <h2>List of Users</h2><br/>
      {prods.map((user) => (
        <UserCard {...user } key={user.id} removeUserData={removeUserData} handleEditClick={handleEditClick}/>
      ))}
    </>
 );
};
export default Userdata;