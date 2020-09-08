import React from "react"
import Headline from '../components/Headline';

import resume from "../assets/images/William_Broussard_Resume.pdf"

function Contact(props) {

    return (
        <div>
            <Headline title={props.title} />
            <br />
            <h4>
                email me at: <a href="mailto:wbroussard@me.com">wbroussard@me.com</a>
            </h4>
            <br />
            <h4>
                Call me at (512)-992-9624.
            </h4>
            <br />
            <h4>
                See my LinkedIn page here: 
                <a href="https://www.linkedin.com/in/william-broussard-071476105/" target="_blank" rel="noopener noreferrer" 
                class="btn btn-light"> here</a>
            </h4>
            <br />
            <h4>
                Take a look at my GitHub profile: 
                <a href="https://github.com/Karsus7" target="_blank" rel="noopener noreferrer" 
                class="btn btn-light"> here</a>
            </h4>
            <br />
            <h4>
                Take a look at my Resume here:
                <a href={resume} target="_blank" rel="noopener noreferrer" class="btn btn-light">Resume</a>
            </h4>
        </div>
    )
}

export default Contact