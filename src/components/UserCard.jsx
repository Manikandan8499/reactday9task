import PropTypes from 'prop-types';

const UserCard = ({ name, username, email, phone, website, address, company, id, removeUserData, handleEditClick }) => {
  return (
    <div className = "card-container">
    <div className="card mb-4" style={{ maxWidth: '500px'}}>
      <div className="card-header text-center bg-primary text-white">
        <h2 className="card-title mb-0">Name: {name}</h2>
        <h4 className="card-subtitle mt-2">Username : {username}</h4>
      </div>
      <div className="card-body">
        <p className="card-text"><strong>Email:</strong> {email}</p>
        <p className='card-text'><strong>Street: </strong>{address.street}</p>
        <p className='card-text'><strong>Suite: </strong>{address.suite}</p>
        <p className='card-text'><strong>City: </strong>{address.city}</p>
        <p className='card-text'><strong>Zipcode: </strong>{address.zipcode}</p>
        <p className='card-text'><strong>Geo Latitude: </strong>{address.geo.lat}</p>
        <p className='card-text'><strong>Geo Longitude: </strong>{address.geo.lng}</p>
        <p className="card-text"><strong>Phone:</strong> {phone}</p>
        <p className="card-text"><strong>Website:</strong> <a href={`http://${website}`} target="_blank" rel="noopener noreferrer">{website}</a></p>
        <p className='card-text'><strong>Company Name: </strong>{company.name}</p>
        <p className='card-text'><strong>Company CatchPhrase: </strong>{company.catchPhrase}</p>
        <p className='card-text'><strong>Company bs: </strong>{company.bs}</p>
        <button className="btn btn-danger" onClick={() => removeUserData(id)}>Delete</button>
        <button className="btn btn-secondary" onClick={() => handleEditClick({name, username, email, phone, website, address, company, id})}>Edit</button>
      </div>
    </div>
    </div>
  );
};

// PropTypes validation
UserCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  removeUserData: PropTypes.func.isRequired,
  handleEditClick: PropTypes.func.isRequired,
};

export default UserCard;
