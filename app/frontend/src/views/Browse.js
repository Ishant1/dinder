import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import faker from "@faker-js/faker"
import NavBar from '../components/NavBar';

const Browse = () => {

    const [users, setUsers] = useState({users: []});
    const [loading, setLoading] = useState(true);
    const [lastDirection, setLastDirection] = useState()

    useEffect(() => {
        // Update the document title using the browser API
        let temp = []
        for (let i = 0; i < 10; i++) {
            var randomName = faker.name.findName();
            var img = faker.image.animals()+"?random=" + Math.round(Math.random() * 1000);
            var uuid = faker.datatype.uuid();
            console.log(img);
            temp.push({name: randomName, avatar: img, id: uuid});
        };
        setUsers({
            ...users,
            users: temp
        })
        setLoading(false);
        console.log(users)
      },[]);
      

      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }

      const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
      }

    return (
      <div className="main">
        <NavBar/>
        <div className="cards">
          <div className="cardContainer">
            {!loading && users.users.map((user, index) => {
              return (
                <TinderCard className='swipe' key={index} onSwipe={(dir) => swiped(dir, user.name)} onCardLeftScreen={() => outOfFrame(user.id)}>
                  <div style={{ backgroundImage: 'url(' + user.avatar + ')' }} className='card'>
                  <h3>{user.name}</h3>
                </div>
                </TinderCard>
              );
            })}
          </div>
          {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' > </h2>}
        </div>
      </div>
        
        
    )
}

export default Browse;