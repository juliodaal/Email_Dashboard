import React from "react";

import ActionBar from "../ActionBar/ActionBar"
import EmailBody from "../EmailBody/EmailBody"

class Mail extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"h-screen col-span-5"}>
                <ActionBar />
                <EmailBody />
            </div>
        )
    }
}

export default Mail