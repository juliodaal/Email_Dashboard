import React from "react";

class Card extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <li className={"mb-2 relative bg-white rounded-md overflow-hidden duration-200 hover:shadow-xl"}>
                <div className={"top-3 left-3 w-4 absolute mx-auto h-1 rounded-full bg-blue-600"}></div>
                <button className={"w-full p-8 flex justify-start items-center"}>
                    <img  
                        className={"w-20 h-20 rounded-full"}
                        src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                        alt="User"/>
                    <div className={"px-6 flex flex-col items-start"}>
                        <div className={"w-full flex justify-between"}>
                            <p className={"text-gray-600 text-sm text-justify"}>Julie Smith</p>
                            <ul className={"flex justify-center items-center"}>
                                <li>
                                    <button className={"text-gray-400"}>
                                        <i class="bi bi-star text-sm mr-2"></i>
                                    </button>
                                </li>
                                <li>
                                    <button className={"text-gray-400"}>
                                        <i class="bi bi-archive text-sm mr-2"></i>
                                    </button>
                                </li>
                                <li>
                                    <p className={"text-xs"}>May 20</p>
                                </li>
                            </ul>
                        </div>
                        <p className={"text-gray-600 text-sm text-justify"}>Freelance Job Oportunity</p>
                        <p className={"text-gray-400 text-xs text-justify"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                    </div>
                </button>
            </li>
        )
    }
}

export default Card