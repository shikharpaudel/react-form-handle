import React,{useState} from 'react';
import classes from './addUser.module.css';
import Card from '../UI design/Card';
import Button from '../UI design/Button';
import ErrorModel from '../UI design/ErrorModel';
import classess from '../UI design/ErrorModel.module.css';

const AddUsers =  (props)=> {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');
  const[error,setError] = useState();
  const submitHandler = (event)=>{
    event.preventDefault();
    if(name.trim().length === 0 || age.trim().length === 0){
      setError({
        title:'Invalid Input!',
        message:'Please Enter A Valid Name And Age',
      });
      return;
    }
    if(+age < 1){
      setError({
        title:'Invalid Age!',
        message:'Please Enter A Valid Age(> 0)',
      });
      return;
    }
    {/*the + above is used in age for coverting the string value which we getting from a state to a integer value so that we can 
  make comparision between numbers */}
   props.onAddUser(name,age);
    setName('');
    setAge('');
    
  };
  
  const handleUserChange = (event)=>{
    setName(event.target.value);
    
  };
  const handleAgeChange = (event)=>{
    setAge(event.target.value);
  }
 const errorHandler =()=> {
  setError(null);
 };
  return (
    <div>
    {error && <ErrorModel header = {error.title} message = {error.message} onConfirm = {errorHandler}/>}
    <Card className = {classes.input}> 
    <header className = {classess.header}>
    <h2>My f**king Final Year Project</h2>
    </header>
        <form onSubmit={submitHandler}>
            <label htmlFor='username'>Your Username:</label>
            <input type = "text" id = "username" name = "text" placeholder="enter name" onChange = {handleUserChange} value = {name}  />
            <label htmlFor='age'>Your Age(in Years):</label>
            <input type = "number" id = "age" name = "text" placeholder="enter Age" onChange = {handleAgeChange} value = {age}  />
            <Button type = 'submit' >Add User</Button>
            
        </form>
       </Card>
       </div>
  );
};

export default AddUsers;
