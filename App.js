import './App.css';
import React, {useState} from 'react';


function App() 
{
  const[formdata,setformdata]=useState({
    username: 'Name',
    emailid: 'default@gmail.com',
    password: '',
    gender: '',
    occupation: [],
    profilePic: null,

  })
  const [formErrors] = useState({});
   
   
  
  const onChangeHandler =(event)=>{
    console.log(event.target.name,event.target.value)
    if(event.target.name==='Interests')
    setformdata(()=>({
      ...formdata,
      [event.target.name]:event.target.value

    }

    ))
    
  }  
 
  const onsubmithandler=(event)=>{
    event.preventdefoult()
    console.table('formdata')
  }

   
  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={onsubmithandler}>
        
        <div className='From-group'>
          <label htmlFor='userfrom'className='From-label'>Name</label>
          <input className='form-control' name="username" onChange={onChangeHandler}  ></input>

        </div>
        
        <div className='From-group'>
          <label htmlFor='userfrom'className='From-label'>Email id</label>
          <input className='form-control' name="enter email"onChange={onChangeHandler}></input>

        </div>
        <div className='From-group'>
          <label htmlFor='userfrom'className='From-label'>Password</label>
          <input className='form-control' name="enter password"onChange={onChangeHandler}></input>
           
        </div>
        <div className='From-group'>
          <label htmlFor='userfrom'className='From-label'>Occupation</label>

          <select className='form-select' name ="occupation">

           
            <option value="">Select your Occupation</option>
              <option value="student">student</option>
              <option value="Employee">  employee</option>
              <option value="Other"> other  </option>
            
          </select>
          
          <div className='form-group'>
          <label htmlFor='gender'className='form-label'>Gender</label>
          <div>
            <div>
              <input type="radio" name ="gender"value="male"onChange={onChangeHandler} checked={formdata.gender==='male'}></input>
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" name ="gender"value="Female"onChange={onChangeHandler}checked={formdata.gender==='Female'} ></input>
              <label htmlFor="male">Female</label>
            </div>
            <div>
              <input type="radio" name ="gender"value="Other"onChange={onChangeHandler} checked={formdata.gender==='other'}></input>
              <label htmlFor="male">Other</label>
            </div>
          </div>
        </div>
        </div>
        <div className='form-group'>
        <label htmlFor='intersts'className='form-label'>Interests</label>
        <div>
            <div>
              <input type="checkbox" name ="Intersts"value="male"onChange={onChangeHandler} ></input>
              <label htmlFor="male">Cricket</label>
            </div>
            <div>
              <input type="checkbox" name ="Intersts"value="Music"onChange={onChangeHandler} ></input>
              <label htmlFor="male">Music</label>
            </div>
            <div>
              <input type="checkbox" name ="Intersts"value="Readingbook"onChange={onChangeHandler} ></input>
              
              <label htmlFor="male">Reading Book</label>
            </div>
          </div>


        </div>
        
        
        
        <div>
        <label htmlFor="profilePic">Profile Picture:</label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
         />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
         
        
        </div>
        
      <button className="button" type="button" onClick={()=>console.log(formdata)} >Submit</button>
      </form>
      
    </div>
    
  );
}

export default App;
