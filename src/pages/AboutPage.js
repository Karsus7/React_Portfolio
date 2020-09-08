import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <div className="col-md-6 col-lg-4 col-xl-3 d-none d-md-block float-left mr-4" >
            <img src="src\assets\images\Me.png" class="img-fluid img-thumbnail" alt="William Broussard"/>
            </div>
            <p>Hello, my name is William Broussard. I'm a full stack engineer with experience in 
                Express JS, Node JS, MySQL, MongoDB, and React.</p>
            <p></p>

            <p></p>

            <p></p>

            <p></p>
            </Content>
        </div>
    );

}

export default AboutPage;