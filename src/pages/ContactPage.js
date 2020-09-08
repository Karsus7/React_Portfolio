import React from "react"


function Contact() {

    return (
    <div>
        <div className="center">
            <div className="card border-dark mb-3; center" style={{maxWidth: "60%"}}>
                <h4 className="card-text">
                    Please don't hesitate to reach out to me.
            </h4>
                <br />
                <h4>
                    email at <a href="mailto:wbroussard@me.com">wbroussard@me.com</a> .
            </h4>
                <br />
                <h4>
                    Also contact me by calling my personal line at (512)-992-9624.
            </h4>
            <br />
                <h4>
                    Take a look at my Resume here:
                <a href="images\William Broussard Resume.com.microsoft.word.openxmlformats.wordprocessingml.document.com.
microsoft.word.openxmlformats.w.pdf" target="_blank" class="btn btn-light">Resume</a>
            </h4>
            </div>
        </div>
    </div>
        

    )
}

export default Contact