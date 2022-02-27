import React , {useState}from "react";
import NavBar from "../components/NavBar";
import faker from "@faker-js/faker";
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import axios from "axios";

const matchData = (num) => {
  let res = [];
  for (let i = 0; i < num; i++) {
    let temp = {
      id: faker.datatype.uuid(),
      name: faker.name.firstName(),
      img: faker.image.animals()+"?random=" + Math.round(Math.random() * 1000),
      breed: faker.animal.type()
    }
    res.push(temp);
  };
  return res;
};

const Profile = () => {
  const [matches, setMatches] = useState(matchData(10));
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="main">
        <NavBar />
        <div className="profile">
          <h2>Your Doggo</h2>
          <div className="detail-holder">
          <div className="details personal">
            <div className="image-cropper">
              <img className="profile-pic" src="doggo-meme.jpg" alt="dog"/>
            </div>
            <h3 className="name">Lexi</h3><img className="verified" src="verified.png" alt="verified"/>
            <span className="age">3 years old</span>
            <span className="breed">Cockapoo</span>
            <span className="bio">Bio:</span>
            <p>
              Hey there, I am a cool doggo, the rest of this paragraph
              is written by the coolest dog. Dog walks are life and these
              this are extremely cool to talk about with my friends machine
              learning is writing soon.
            </p>
          </div>
          <div className="details matches">
            <div className="matches">
              <h3>✨ Your Matches ✨</h3>
              {matches.map(match => (
                <div className="match">
                  <img src={match.img} alt="profile"/>
                  <div className="match-details">
                    <span className="name">✨ {match.name}</span><br/>
                    <span className="breed">{match.breed}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>

      </div>
    )
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <>Loading</>,
});