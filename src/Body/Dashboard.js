import axios from "axios";
import { Component } from "react";

import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Dashboard extends Component{


    state={
        items:[],
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        },
        username : '',
        address  :'',
        userType:''
    }
componentDidMount(){
    axios.get('http://localhost:90/user/one',this.state.config)
    .then((Response)=>{
        console.log(Response)
        this.setState({
            items:Response.data,
            username : Response.data.username,
            address:Response.data.address,
            userType:Response.data.userType
        })

       console.log(Response.data.username);
    })
    .catch((err)=>{
console.log(err.Response)
    })
}

deleteBus=(busId)=>{
    axios.delete('http://localhost:90/Description/delete/'+busId)

    .then((response)=>{
        console.log(response)
        alert("Delete successful")
    })
    .catch((err)=>{
        alert("delete failed")
        console.log(err.repsonse)
    })
}

// updateBus = (e)=>{
//     e.preventDefault()
//     axios.put("http://localhost:90/Description/update", this.state)
//     .then((response)=>{
//         console.log(response)
//     })
//     .catch((err)=>{
//         console.log(err.response)
//     })
// }



    render(){
        return(
            <div>
                this is drag page
                <div class="wrapper">
    <div class="left">
        {/* <img src="https://i.imgur.com/cMy8V5j.png" alt="user" width="100"> */}
        <h2>{this.state.username}</h2>
         <p>{this.state.userType}</p>
    </div>
    <div class="right">
        <div class="info">
            <h3>Information</h3>
            <div class="info_data">
                 <div class="data">
                    <h4>Email</h4>
                    <p>{this.state.address}</p>
                 </div>
                 <div class="data">
                   <h4>Phone</h4>
                    <p>0001-213-998761</p>
              </div>
            </div>
        </div>
      
      <div class="projects">
            <h3>Projects</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
      
        <div class="social_media">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
          </ul>
      </div>
    </div>
</div>
                </div>
            
            
        )
    }
}

export default Dashboard;