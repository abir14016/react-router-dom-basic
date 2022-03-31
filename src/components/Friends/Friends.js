import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './friends.css'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            <h2>Here Are My Friends</h2>
            <h4>Number of friends: {friends.length} </h4>
            <div className="friends">
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;