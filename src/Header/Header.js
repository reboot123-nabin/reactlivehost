import { Component } from "react";
import CloseIcon from '@material-ui/icons/Close';
import $ from 'jquery';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HorizontalSplitIcon from '@material-ui/icons/HorizontalSplit';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
class Header extends Component{

  logout = ()=>{
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    window.location.href = '/'
 
}




    render(){
        window.onload=function(){
            $(document).ready(function(){
                //jquery for toggle sub menus
                $('.sub-btn').click(function(){
                  $(this).next('.sub-menu').slideToggle();
                  $(this).find('.dropdown').toggleClass('rotate');
                });
            
                //jquery for expand and collapse the sidebar
                $('.menu-btn').click(function(){
                  $('.side-bar').addClass('active');
                  $('.menu-btn').css("visibility", "hidden");
                });
            
                $('.close-btn').click(function(){
                  $('.side-bar').removeClass('active');
                  $('.menu-btn').css("visibility", "visible");
                });
              })



 
            const menuIcon = document.getElementById("menu-icon");
            const slideoutMenu = document.getElementById("slideout-menu");
            const searchIcon = document.getElementById("search-icon");
            const searchBox = document.getElementById("searchbox");
            
            
            searchIcon.addEventListener('click', function () {
         
              if (searchBox.style.top == '72px') {
                searchBox.style.top = '24px';
                searchBox.style.pointerEvents = 'none';
              } else {
                searchBox.style.top = '72px';
                searchBox.style.pointerEvents = 'auto';
              }
            });
            
            menuIcon.addEventListener('click', function () {
              
              if (slideoutMenu.style.opacity == "1") {
                slideoutMenu.style.opacity = '0';
                slideoutMenu.style.pointerEvents = 'none';
              } else {
                slideoutMenu.style.opacity = '1';
                slideoutMenu.style.pointerEvents = 'auto';
              }
            })
            
          }
        return(

            <div>
       <div id="slideout-menu">
        <ul>
        
            <li>
                <a href="index.html">Home</a>
            </li>
            <li>
                <a href="blogslist.html">Blog</a>
            </li>
            <li>
                <a href="blogslist.html">Projects</a>
            </li>
            <li>
                <a href="about.html">About</a>
            </li>
  

            <li>
                <input type="text" placeholder="Search Here"/>
            </li>
        </ul>
    </div>

  <nav>
  <div class="menu-btn">
      <HorizontalSplitIcon style={{ fontSize: 40 }}/>
    </div>
    <div class="side-bar">
      <div class="close-btn">
        <CloseIcon></CloseIcon>
      </div>
      <div class="menu">
        <div class="item"><a href="#"><i class="fas fa-desktop"></i>Dashboard</a></div>
        <div class="item">
          <a class="sub-btn"><i class="fas fa-table"></i>Tables<i class="fas fa-angle-right dropdown"></i></a>
          <div class="sub-menu">
            <a href="#" class="sub-item">Sub Item 01</a>
            <a href="#" class="sub-item">Sub Item 02</a>
            <a href="#" class="sub-item">Sub Item 03</a>
          </div>
        </div>
        <div class="item"><a href="#"><i class="fas fa-th"></i>Forms</a></div>
        <div class="item">
          <a class="sub-btn"><i class="fas fa-cogs"></i>Settings<i class="fas fa-angle-right dropdown"></i></a>
          <div class="sub-menu">
            <a href="#" class="sub-item">Sub Item 01</a>
            <a href="#" class="sub-item">Sub Item 02</a>
          </div>
        </div>
        <div class="item"><a href="#"><i class="fas fa-info-circle"></i>About</a></div>
      </div>
    </div>
      <div id="logo-img">
          <a href="#">
              <img src={'./img/logo.png'} alt="GTCoding Logo"/>
          </a>
      </div>
      <div id="menu-icon">
          <i class="fas fa-bars"></i>
      </div>
      <ul>
          <li>
              <a class="active" href="index.html">Home</a>
          </li>
          <li>
              <a href="blogslist.html">Blog</a>
          </li>
          <li>
              <a href="blogslist.html">Projects</a>
          </li>
          <li>
              <a  href="about.html">About</a>
          </li>
          <li>
          <div class="rama">
    <div class="notify ml-1">
    </div>
    <NotificationsActiveIcon className="cart"  style={{ fontSize: 40 }}/>
   
</div>
    </li>
          <li>
              <div id="search-icon">
                  <SearchIcon></SearchIcon>
              </div>
          </li>

      </ul>
  </nav>

  <div id="searchbox">
      <input type="text" placeholder="Search Here"/>
  </div>
                </div>

                


        )
    }
}

export default Header