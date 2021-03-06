import React from 'react';
import Headline from '../components/Headline';
import Content from '../components/Content';

import Me from '../assets/images/Me.png';

function AboutPage(props) {

    return(
        <div>
            <Headline title={props.title} />

            <Content>
            <div className="col-md-6 col-lg-4 col-xl-3 d-none d-md-block float-left mr-4" >
            <img src={Me} class="img-fluid img-thumbnail" alt="William Broussard" title="Picture of myself"/>
            </div>
            <p>Hello, my name is William Broussard. I'm a full stack web designer with experience in 
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