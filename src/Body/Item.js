import { Component } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";
import React, {useState} from 'react'
import {Link} from 'react-router-dom';
class Item extends Component{
    
    state={
        count:0,
        items:[],
        searchField:'',
        config : {
            headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
        }
    }

    
componentDidMount(){

    axios.get('http://localhost:90/Description/all')
    .then((Response)=>{
        console.log(Response)

        
        this.setState({
            items:Response.data
        })
    })
    .catch((err)=>{
console.log(err.Response)
    })
  
}

increment=()=>{
    this.setState({count:this.state.count+1});
}

deleteBus=(busId)=>{
    axios.delete('http://localhost:90/Description/delete/'+busId,this.state.config)

    .then((response)=>{
        window.location.href = '/item'
        console.log(response)
        alert("delete successful")
    })
    .catch((err)=>{
        alert("delete failed")
        console.log(err.repsonse)
    })
}
    
    render(){

        window.onload=function(){
            const notify=document.querySelector('.notify');

            const btn=document.querySelector('.btn');
            btn.addEventListener('click', function () {
                var add = Number(notify.getAttribute('data-count'))|| 0;
                notify.setAttribute('data-count', add + 1);
                if (add === 0) {
                    notify.classList.add('add-numb');
                }
                else{
                return false;
                }
              });
            
            
        }
        return(  
            <div>
       <div className="notify">
       <button class="btn">Push Notify</button>
                     
                <img class="imagecart" src={'./images/cart.png'}></img>  
               
               {<h1 style={{'fontSize':"60px"}}>{this.state.count}</h1>}
                
               
                                 
                     <h1>Choose your own bus</h1>                  
              <h2>this is bus count</h2>

              
                      <div className="card cardone mt-5">

                          <div className="container">
                              <div className="row">
                       {
                           this.state.items.map((first)=>{
                               return(
                                   
                                   <div className="items col-md-4">

<p><img src={"http://localhost:90/"+first.nimage} class="card-img-top" /></p>
                                   {/* <h1>{first.title}</h1>
                                   <h2>{first.image}</h2>
                                   <h2>{first.desc}</h2>
                                   <h2>{first.name}</h2> */}

                                    <div class="card-body">
                                     <p>Name :
                           {
                           first.title 
                           }
                           </p>
                           <p>image :
                           {
                           first.image 
                           }
                           </p>
                           <p>detail :
                           {
                           first.desc
                           }
                           </p>
                           <p>price :
                           {
                           first.name
                           }
                           </p>

                          


                                   <button class="btn btn-primary" onClick={this.deleteBus.bind(this,first._id)}>delete</button>
                                  <Link class="btn btn-primary" to={'/UpdateBus/'+first._id}>Update</Link>
                                  <Link class="btn btn-primary" to={'/Cart/'+first._id}>Cart</Link>
                                  <button  class="btn btn-primary" id="btnadd" onClick={this.increment}>Add</button>
                                   </div>
                                   </div>
                               )
                           })

                           

                       }
                      
                      

                      </div>
                      </div>
                   </div>
                                </div> 
                                </div>
           
        )
        }
}

export default Item;