import { Component,state,changeHandle,btnsubmit } from "react";

import axios from 'axios';
class Cart extends Component{
   
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
<h1>
{this.state.title}
</h1>
{this.state.desc}
            </div>
            
        )
        
    }
}
export default Cart