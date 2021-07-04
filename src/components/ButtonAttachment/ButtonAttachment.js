import React from "react";

class ButtonAttachment extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className={"mr-4"}>
                <button className={"w-full h-56 rounded-md overflow-hidden shadow-xl relative"}>
                    <img 
                        src="https://images.pexels.com/photos/443383/pexels-photo-443383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        className={"h-full absolute top-0 left-0 object-cover"}
                        alt="building"/>
                    <div className={"absolute top-0 left-0 w-full h-full bg-gray-700 btn-download-bg duration-200"}></div>
                    <div className={"absolute top-0 left-0 w-full h-full p-6 flex justify-center items-end text-gray-100 btn-download-content duration-200"}>
                        <div className={"flex justify-center items-center"}>
                            <p className={"opacity-100 mr-2"}>Download</p>
                            <button className={"py-1 px-2 rounded-md border border-gray-100 duration-200 hover:border-gray-800 hover:bg-gray-100 hover:text-gray-800"}>
                                <i class="bi bi-cloud-download"></i> 
                            </button>
                        </div>
                    </div>
                </button>
            </li>
        )
    }
}

export default ButtonAttachment