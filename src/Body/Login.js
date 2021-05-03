import { Component } from "react";
import axios from 'axios';
import PersonIcon from '@material-ui/icons/Person';
import {Redirect} from 'react-router-dom'
import $ from 'jquery';
class Login extends Component{
   
        state={
            username:"",
            pwd:"",
            loginChk : false
        }

     

       changeHandle2=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
               
            })
        }

       btnsubmit2=(e)=>{
            //now we need to sent data to our api
            e.preventDefault();//prevents from form to be refreshed
            
            axios.post('http://localhost:90/user/login',this.state)
            .then((Response)=>{
                this.setState({
                    loginChk : true
                })
                //localStorage.setItem('token',Response.data.token);
                localStorage.setItem('token', Response.data.token)

                localStorage.setItem('userType',Response.data.userType)
                console.log(Response.data.token)
                console.log(Response.data.userType)
                window.location.href = '/dashboard'

                alert("user login successful !!")
            })
            .catch((err)=>{
                alert("invalid credentials!!")
                    console.log(err.Response)
                }
            )
        }
    
            
       
        render(){


            $('.options-02 a').click(function(){
                $('form').animate({
                    height: "toggle", opacity: "toggle"
                }, "slow");
            });
            
            $(document).ready(function(){
            $('#cpwd').keyup(function(){
                var pwd= $('#pwd').val();
                var cpwd= $('#cpwd').val();
                var pswlen=pwd.length;

                if(pswlen < 8){
                    $('#showErrorcPwd').html('**minimum 8 character required');
                    $('#showErrorcPwd').css('color','red');
                  return false;
                }
                else {
                     if(cpwd!=pwd){
                    $('#showErrorcPwd').css('color','red');
                    $('#showErrorcPwd').html('**password are not matching');
                    return false;
                    }else if(cpwd=pwd) {
                    $('#showErrorcPwd').css('color','blue');
                    $('#showErrorcPwd').html('**password match');
                    return true;
                    }
                    return true;
                }
            

            })
        })
            if(this.state.loginChk==true){
                return <Redirect to='./dashboard'/>
            }
            // if (localStorage.getItem('token')) {
            //     return <Redirect to='/items'/>
            //   }
            
        return(
            <div>
                <main>
               <section class="Flogin">
                <div class="form">
	
    <form class="login-form" action="" method="post">
    <img id="us" src="./usera.jpg"></img>
        <input class="user-input" type="text" name="username" placeholder="Username" defaultValue={this.state.username} onChange={this.changeHandle2} required/>
        <input class="user-input" type="text" name="pwd" id="pwd" placeholder="Password" defaultValue={this.state.pwd} onChange={this.changeHandle2} required/>
        <input class="user-input" type="text" name="cpwd" id="cpwd" placeholder="Confirm Password" required/>
        <span id="showErrorcPwd"></span>
        <div class="options-01">
            <label class="remember-me"><input type="checkbox" name=""/>Remember me</label>
            <a class="forget"href="#">Forgot your password?</a>
        </div>
        <input class="btn" type="submit" onClick={this.btnsubmit2}  name="" value="LOGIN"/>
        <div class="options-02">
            <p>Not Registered? <a href="/register">Create an Account</a></p>
        </div>
    </form>
  

</div>

              
</section> 
</main>


            </div>
        )
    }
}

export default Login