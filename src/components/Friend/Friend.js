import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './friend.css'

const Friend = (props) => {
    const { name, username, id } = props.friend
    const navigate = useNavigate()
    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path);
    }
    return (
        <div className='friend'>
            <h4>Friends Name: {name}</h4>
            <Link to={/friend/ + id}>CLICK</Link>
            <button onClick={showFriendDetail}>{username} | id: {id}</button>
        </div>
    );
};

export default Friend;