import React,{useState} from 'react'; 
import UserList from './components/UserList';
import AddUsers from './components/AddUsers';

function App() {
  const[usersList,setUsersList] = useState([]);
  const addUserHandler = (uName, uAge)=>{
    setUsersList((prevUsersList) =>{
      return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];

    });

  };
  return (
    <div className="App">
    <AddUsers onAddUser = {addUserHandler}/>
    <UserList users = {usersList}/>
    </div>
  );
}

export default App;
