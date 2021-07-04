import React from "react";

class HeaderEmail extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"w-full mb-6 flex items-center"}>
                <img  
                    className={"w-20 h-20 mr-6 rounded-full"}
                    src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="User"/>
                <div className={"w-full"}>
                    <div className={"flex justify-between items-center"}>
                        <p className={"font-semibold text-2xl text-gray-600"}>
                            Julie Smith
                        </p>
                        <ul>
                            <li>
                                <p className={"text-xs font-semibold"}>May 20</p>
                            </li>
                        </ul>
                    </div>
                    <p className={"text-xs text-gray-400"}>
                        To: <span className={"text-gray-600"}>
                            Juliesm@myemail.com
                        </span>
                    </p>
                </div>
            </div>
        )
    }
}

export default HeaderEmail