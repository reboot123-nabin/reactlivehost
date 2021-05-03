import { Component,state,changeHandle,btnsubmit } from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios';
class AddBus extends Component{
   
        state={
            title:"",
            nimage:"",
            desc:"",
            name:"",
            config :{
                headers :{
                        'Authorization' : `Bearer ${localStorage.getItem('token')}`
                    }
                }
        }

        changeHandle=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
               
            })
        }
        fileHandler = (e)=>{
            this.setState({
                nimage : e.target.files[0]
            })
        }
        btnsubmitBus=(e)=>{
            //now we need to sent data to our api
            const data = new FormData()
            e.preventDefault();//prevents from form to be refreshed
            data.append('title', this.state.title)
        data.append('nimage', this.state.nimage)
        data.append('desc', this.state.desc)
        data.append('name', this.state.name)
            axios.post('http://localhost:90/Description/insert',data,{ headers :{
                'Authorization' : `Bearer ${localStorage.getItem('token')}`}
            })
            .then((Response)=>{
                console.log(Response)
                alert("bus added")
            })
            .catch((err)=>{
                alert("bus add failed")
                    console.log(err.Response)
                }
            )
        }
        render(){


            if(localStorage.getItem('userType') && localStorage.getItem('userType')=='User' ){
                return <Redirect to= '/'/>
            }
        return(
            <div>this is Add Bus page
<section class="register container-fluid bg">
<h1 class="r1">this is Add Bus page</h1>
                    <section class="row justify-content-center">
                       
                        <form class="cover">
                        <img id="us" src="./images/buslogo.jpg"></img>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"name="username">Title</label>
    <input type="email" class="form-control"  placeholder="title" name="title" defaultValue={this.state.title} onChange={this.changeHandle}id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    
  </div>
  
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Name</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="name" name="name" defaultValue={this.state.name} onChange={this.changeHandle}></input>
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">desc</label>
    <input type="email" class="form-control"placeholder="desc" name="desc" defaultValue={this.state.desc} onChange={this.changeHandle}></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="file" class="form-control" name="nimage"  defaultalue={this.state.nimage} onChange={this.fileHandler} />
  </div>

  <button type="submit" class="btn btn-primary" onClick={this.btnsubmitBus} >Submit</button>
</form>
                        </section>
                    </section>
{/* <div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Add Bus Info</h2>
                    <form>
                       
                        <div class="input-group">
                        <p>title</p>
                            <input class="input--style-3" type="text" placeholder="title" name="title" defaultValue={this.state.title} onChange={this.changeHandle}></input>
                        </div>
                        <div class="input-group">
                            <p>image</p>
                            <input class="input--style-3" type="text" placeholder="Birthdate" name="image" defaultValue={this.state.image} onChange={this.changeHandle}></input>
                          
                        </div>
                        <div class="input-group">
                            <p>desc</p>
                            <input class="input--style-3" type="text" placeholder="Birthdate" name="desc" defaultValue={this.state.desc} onChange={this.changeHandle}></input>
                          
                        </div>
                        <div class="input-group">
                            <div class="rs-select2 js-select-simple select--no-search">
                                <select name="gender">
                                    <option disabled="disabled" selected="selected">Gender</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                                <div class="select-dropdown"></div>
                            </div>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="name" placeholder="name" name="name" defaultValue={this.state.name} onChange={this.changeHandle}></input>
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="text" placeholder="userType" name="userType" defaultalue={this.state.userType} onChange={this.changeHandle} ></input>
                        </div>
                        <p>
                        <input type="file" name="nimage"  defaultalue={this.state.nimage} onChange={this.fileHandler} />
                        </p>
                        <div class="p-t-10">
                            <button onClick={this.btnsubmitBus} class="btn btn--pill btn--green" type="submit">Submit</button>
                        </div>


                        <div className="seat">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="box">
                                            <h1>A1</h1>
                                        </div>
                                    </div>
                                    <div className="col-md-4"></div>
                                    <div className="col-md-4"></div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div> */}
            </div>
            
        )
        
    }
}
export default AddBus