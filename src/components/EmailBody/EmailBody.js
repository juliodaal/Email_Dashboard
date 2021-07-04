import React from "react";

import HeaderEmail from "../HeaderEmail/HeaderEmail"
import ButtonAttachment from "../ButtonAttachment/ButtonAttachment"

import EmailFooter from "../EmailFooter/EmailFooter";

class EmailBody extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"h-email-content p-10 overflow-y-scroll scroll-custom"}>
                {/* Header */}
                <HeaderEmail />
                <div>
                    {/* Subject */}
                    <p className={"mb-6 text-gray-400 text-lg font-semibold"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                    {/* Body */}
                    <p className={"mb-6 text-gray-600 text-sm font-semibold"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <p className={"mb-6 text-gray-600 text-sm font-semibold"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <ul className={"grid grid-cols-3 grid-flow-row gap-4"}>
                        <ButtonAttachment />
                        <ButtonAttachment />
                        <ButtonAttachment />
                        <ButtonAttachment />
                        <ButtonAttachment />
                        <ButtonAttachment />
                    </ul>
                </div>
                <EmailFooter />
            </div>
        )
    }
}

export default EmailBody