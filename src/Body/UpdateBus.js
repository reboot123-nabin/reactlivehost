import { Component,state,changeHandle,btnsubmit } from "react";

import axios from 'axios';
class UpdateBus extends Component{
   
        state={
           
            title:"",
            //nimage:"",
            desc:"",
            name:"",
            id:this.props.match.params.id,
            config : {
                headers : {'Authorization': `Bearer ${localStorage.getItem('token')}`}
            }
        }
        fileHandler = (e)=>{
            this.setState({
                nimage : e.target.files[0]
            })
        }
        changeHandle=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
               
            })
        }
       
        componentDidMount(){
           
            axios.get("http://localhost:90/Description/single/"+this.state.id)
            .then((response)=>{
                console.log(response)
                this.setState({
                    title:response.data.title,
                    desc:response.data.desc,
                    //nimage:response.data.nimage,
                    name:response.data.name
                })
            })
            .catch((err)=>{
                console.log(err.response)
            })
        }
        updateBus2 = (e)=>{
            e.preventDefault()
            const userData={
                title:this.state.title,
                desc:this.state.desc,
                name:this.state.name

            }
            axios.put("http://localhost:90/Description/update",this.state,{ headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`}
            })
            .then((response)=>{
                window.location.href = '/Item'
                alert("update successfully")
                console.log(response)
            })
            .catch((err)=>{
                alert("update failed")
                console.log(err.response)
            })
        }
        render(){
        return(
            <div>this is register page

{/* <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">update Info</h2>
                    <form>
                       
                        <div class="input-group">
                        <p>title</p>
                            <input class="input--style-3" type="text" placeholder="title" name="title" defaultValue={this.state.title} onChange={this.changeHandle}></input>
                        </div>
                        {/* <div class="input-group">
                            <p>image</p>
                            <input class="input--style-3" type="text" placeholder="Birthdate" name="image" defaultValue={this.state.image} onChange={this.changeHandle}></input>
                          
                        </div> */}
                        {/* <div class="input-group">
                            <p>desc</p>
                            <input class="input--style-3" type="text" placeholder="Birthdate" name="desc" defaultValue={this.state.desc} onChange={this.changeHandle}></input>
                          
                        </div>
                      
                        <div class="input-group">
                            <input class="input--style-3" type="name" placeholder="name" name="name" defaultValue={this.state.name} onChange={this.changeHandle}></input>
                        </div>
                        
                        
                        <div class="p-t-10">
                            <button onClick={this.updateBus2} class="btn btn--pill btn--green" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> */} 


    <section class="register container-fluid bg">
<h1 class="r1">this is Update Bus page</h1>
                    <section class="row justify-content-center">
                       
                        <form class="cover">
                        {this.state.title}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"name="username">Title</label>
    <input type="email" class="form-control"  placeholder="title" name="title" defaultValue={this.state.title} onChange={this.changeHandle}id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">description</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="desc" name="desc" defaultValue={this.state.desc} onChange={this.changeHandle}></input>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">desc</label>
    <input type="email" class="form-control" placeholder="name" name="name" defaultValue={this.state.name} onChange={this.changeHandle}></input>
  </div>
 

  <div class="p-t-10">
                            <button onClick={this.updateBus2} class="btn btn--pill btn--green" type="submit">Submit</button>
                        </div>
</form>
                        </section>
                    </section>
            </div>
            
        )
        
    }
}
export default UpdateBus