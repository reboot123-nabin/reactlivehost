import { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap';

import {Switch,Route} from 'react-router-dom';
import GalleryReact from './GalleryReact';
import Cart from './Cart'
import Main from './Main';
import Home from './Home';
import Item from './Item';
import Register from './Register';
import Login from './Login'
import Error from './Error'
import AddBus from './AddBus'

import UpdateBus from './UpdateBus'
import Dashboard from './Dashboard'


class Body extends Component{
    render(){

       
        return(
            <div>
               <Container fluid>
                   <Row>
                       <Col>
                       <Switch>
                       <Route exact path="/GalleryReact" component={GalleryReact}></Route>
                       <Route exact path="/Dashboard" component={Dashboard}></Route>
                       <Route exact path="/" component={Home}></Route>
                       <Route exact path="/About"  component={Main}></Route>
                       <Route exact path="/Item"  component={Item}></Route>
                       <Route exact path="/login"  component={Login}></Route>
                       <Route exact path="/AddBus"  component={AddBus}></Route>
                       <Route exact path="/register"  component={Register}></Route>
                       <Route exact path="/Cart/:id"  component={Cart}></Route>
                       <Route path="/UpdateBus/:id" exact component={UpdateBus}></Route>
                        <Route component={Error}/>
                        </Switch>
                       </Col>
                   </Row>
               </Container>

               
             
               </div>

               
        )
    }
}

export default Body;