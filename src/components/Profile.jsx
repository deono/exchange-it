import React from "react";
import { USER } from "../data/user";

const Profile = () => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-3">
            <img
              src={USER.profileImage}
              className="card-img"
              alt={`${USER.firtname} ${USER.lastname}`}
            />
          </div>
          <div className="col-md-9">
            <div className="card-body">
              <h3 className="card-title text-warning">{`${USER.firstName} ${USER.lastName}`}</h3>
              <p className="card-text">Member since: {USER.dateJoined}</p>
              <p className="card-text">
                Location: {`${USER.location.city}, ${USER.location.country}`}
              </p>
              <p className="card-text">Exchanges made: {USER.exchangesMade}</p>
              <h4>Bio</h4>
              <p className="card-text text-muted">{USER.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
