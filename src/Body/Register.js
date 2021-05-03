import { Component,state,changeHandle,btnsubmit } from "react";

import axios from 'axios';
class Register extends Component{
   
        state={
            username:"",
            password:"",
            address:"",
            userType:""
        }

        changeHandle=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
               
            })
        }

        btnsubmit=(e)=>{
            //now we need to sent data to our api
            e.preventDefault();//prevents from form to be refreshed
            
            axios.post('http://localhost:90/user/insert',this.state)
            .then((Response)=>{
                console.log(Response)
                alert("registered successful")
            })
            .catch((err)=>{
                alert("registered failed")
                    console.log(err.Response)
                }
            )
        }
        render(){
        return(
            <div>

               <section class="Flogin">
                <div class="form">
	
                <form class="login-form" action="" method="post">
                <img id="us" src="./usera.jpg"></img>
        <input class="user-input" type="text"  name="username" defaultValue={this.state.username} onChange={this.changeHandle} placeholder="Username" required/>
        <input class="user-input" type="email" name="address" defaultValue={this.state.address} onChange={this.changeHandle} placeholder="Email Address" required/>
        <input class="user-input" type="password" placeholder="password" name="password" defaultValue={this.state.password} onChange={this.changeHandle} required/>
        <div class="mb-3">
  
  
      <select class="select-input" name="userType" value={this.state.userType}  onChange={this.changeHandle}>
             <option value="Driver">Driver</option>
            <option value="User">User</option>
          
            <option value="Admin">Admin</option>
      </select>

    {/* <label for="exampleInputPassword1" class="form-label">UserType</label>
    <input type="email" class="form-control" placeholder="userType" name="userType" defaultalue={this.state.userType} onChange={this.changeHandle}></input> */}
  </div>
        <input class="btn" type="submit" onClick={this.btnsubmit}  name="" value="SIGN UP"/>
        <div class="options-02">
            <p>Already Registered? <a href="/login">Sign In</a></p>
        </div>
    </form>
  
</div>

              
</section> 
            </div>
         
            
        )
        
    }
}
export default Register