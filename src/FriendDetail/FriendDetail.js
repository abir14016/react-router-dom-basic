import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState({})
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h3>Details Of My Friends: {friendId}</h3>
            <h4>name: {friend.name}</h4>
            <p><small>email: {friend.email}</small></p>
            <p><small>city: {friend.address?.city}</small></p>
            <p><small>Geo: {friend.address?.geo.lat}</small></p>
        </div>
    );
};

export default FriendDetail;