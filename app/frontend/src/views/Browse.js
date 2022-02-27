import React, { useEffect, useState } from "react";
import TinderCard from 'react-tinder-card'
import faker from "@faker-js/faker"
import NavBar from '../components/NavBar';
import axios from "axios";

const Browse = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [lastDirection, setLastDirection] = useState()

    useEffect(() => {
        // Update the document title using the browser API
        // let temp = []
        // for (let i = 0; i < 10; i++) {
        //     var randomName = faker.name.findName();
        //     var img = faker.image.animals()+"?random=" + Math.round(Math.random() * 1000);
        //     var uuid = faker.datatype.uuid();
        //     console.log(img);
        //     temp.push({name: randomName, avatar: img, id: uuid});
        // };
        // setUsers({
        //     ...users,
        //     users: temp
        // })
        fetch("https://dinder1-rtzfqvvfia-nw.a.run.app/unseen?id1=2")
          .then((res)=>res.json())
          .then((json)=> {
            let temp = json.data
            for (let i = 0; i < temp.length; i++) {
              console.log(temp[i])
              temp[i].avatar = faker.image.animals()+"?random=" + Math.round(Math.random() * 1000);
            }
            setUsers(temp);
          })
        
        setLoading(false);
        console.log(users)
      },[]);
      

      const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
      }

      const swiped = (direction, id) => {
        console.log('removing: ' + id)
        setLastDirection(direction)
        if (direction === "right") {
          const headers = { id1: 2, id2: id  };
          axios.post('https://dinder1-rtzfqvvfia-nw.a.run.app/match', headers)
          .then(response => console.log(response));
          console.log("okay imma send this to flask")
        }
        
        const headers = { id1: 2, id2: id  };
        axios.post('https://dinder1-rtzfqvvfia-nw.a.run.app/seenuser', headers)
          .then(response => console.log(response));
      }

    return (
      <div className="main">
        <NavBar/>
        <div className="cards">
          <div className="cardContainer">
            {!loading && users.map((user, index) => {
              return (
                <TinderCard className='swipe' key={index} onSwipe={(dir) => swiped(dir, user.id)} onCardLeftScreen={() => outOfFrame(user.id)}>
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