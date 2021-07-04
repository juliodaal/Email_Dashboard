import React from "react";

class EmailFooter extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"my-6 flex justify-between items-center"}>
                <div>
                    <p className={"text-sm font-semibold text-gray-400"}>120.04MB <span className={"text-gray-600"}>Total</span></p>
                </div>
                <button className={"flex justify-start items-center py-2 px-6 rounded-md border border-gray-600 text-gray-600 duration-200 hover:text-white hover:bg-gray-600"}>
                    <i className="bi bi-cloud-download mr-2"></i>
                    Download All
                </button>
            </div>
        )
    }
}

export default EmailFooter