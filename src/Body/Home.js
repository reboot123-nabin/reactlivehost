import { Component } from "react";
// import ReactDOM from "react-dom";

class Home extends Component{
    render(){

      
        return(  
            <div>
        
        <main>
        <a href="blogslist.html">
            <h2 class="section-heading">All Blogs</h2>
        </a>

        <section>
            <div class="card">
                <div class="card-image">
                    <a href="blogpost.html">
                        <img src={'./img/1.jpg'} alt="Card Image"/>
                    </a>
                </div>

                <div class="card-description">
                    <a href="blogpost.html">
                        <h3>The Blog Title Here</h3>
                    </a>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ullam facilis consequuntur eligendi sit accusamus tempora
                        cum distinctio pariatur ipsa quod, odit dolorum non vero recusandae? Corporis voluptatem optio nulla.
                    </p>
                    <a href="blogpost.html" class="btn-readmore">Read more</a>
                </div>
            </div>

            <div class="card">
                <div class="card-image">
                    <a href="blogpost.html">
                        <img src={'./img/2.jpg'} alt="Card Image"/>
                    </a>
                </div>

                <div class="card-description">
                    <a href="blogpost.html">
                        <h3>The Blog Title Here</h3>
                    </a>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ullam facilis consequuntur eligendi sit accusamus tempora
                        cum distinctio pariatur ipsa quod, odit dolorum non vero recusandae? Corporis voluptatem optio nulla.
                    </p>
                    <a href="blogpost.html" class="btn-readmore">Read more</a>
                </div>
            </div>
        </section>

        <a href="blogslist.html">
        	<h2 class="section-heading">All Projects</h2>
    	</a>

        <section>
            <div class="card">
                <div class="card-image">
                    <a href="blogpost.html">
                        <img src={'./img/3.jpg'} alt="Card Image"/>
                    </a>
                </div>

                <div class="card-description">
                    <a href="blogpost.html">
                        <h3>The Project Title Here</h3>
                    </a>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ullam facilis consequuntur eligendi sit accusamus tempora
                        cum distinctio pariatur ipsa quod, odit dolorum non vero recusandae? Corporis voluptatem optio nulla.
                    </p>
                    <a href="blogpost.html" class="btn-readmore">Read more</a>
                </div>
            </div>

            <div class="card">
                <div class="card-image">
                    <a href="blogpost.html">
                        <img src={'./img/4.jpg'} alt="Card Image"/>
                    </a>
                </div>

                <div class="card-description">
                    <a href="blogpost.html">
                        <h3>The Project Title Here</h3>
                    </a>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, ullam facilis consequuntur eligendi sit accusamus tempora
                        cum distinctio pariatur ipsa quod, odit dolorum non vero recusandae? Corporis voluptatem optio nulla.
                    </p>
                    <a href="blogpost.html" class="btn-readmore">Read more</a>
                </div>
            </div>
        </section>

        <h2 class="section-heading">Source Code</h2>

        <section id="section-source">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum neque qui delectus ad dolor blanditiis perferendis praesentium
                consectetur aut sed provident obcaecati aspernatur perspiciatis, dolores nobis pariatur ipsum vel corrupti!
            </p>
            <a href="#" class="btn-readmore">GitHub Profile</a>
        </section>
        </main>

                              
                                </div> 
           
        )
        }
}

export default Home;