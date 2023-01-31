import React from 'react';
import Card from '../UI design/Card';
import classes from './UserList.module.css';
const UserList =(props) =>{
  return (
    <Card className = {classes.users}>
    <ul>
        {props.users.map((user)=>(
            <li key = {user.id}> Your Name Is {user.name} And You Are {user.age} Years Old</li>
        ))}
   
    </ul>
    </Card>
  )
}

export default UserList;
