import React from "react";

class ActionBar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"py-4 px-6 flex justify-between"}>
                {/* Left Buttons */}
                <ul className={"flex items-end"}>
                    <li className={"mx-4"}>
                        <button className={"text-gray-600 text-xl hover:text-yellow-400"}>
                            <i class="bi bi-star"></i>
                        </button>
                    </li>
                    <li className={"mx-4"}>
                        <button className={"text-gray-600 text-xl hover:text-green-400"}>
                            <i class="bi bi-file-earmark-fill"></i>
                        </button>
                    </li>
                    <li className={"mx-4"}>
                        <button className={"text-gray-600 text-xl hover:text-red-400"}>
                            <i class="bi bi-trash-fill"></i>
                        </button>
                    </li>
                    <li className={"mx-4"}>
                        <button className={"text-gray-600 text-xl hover:text-purple-400"}>
                            <i class="bi bi-archive"></i>
                        </button>
                    </li>
                </ul>
                {/* Right Buttons */}
                <ul className={"flex items-center"}>
                    <li className={"mx-2"}>
                        <p className={"text-gray-400 font-semibold text-xs"}>
                            7
                            <span className={"text-gray-600"}>/</span>
                            <span className={"text-gray-600"}>50</span>
                        </p>
                    </li>
                    <li className={"mx-4"}>
                        <button className={"text-gray-600 text-xl hover:text-gray-400"}>
                            <i class="bi bi-chevron-left"></i>
                        </button>
                    </li>
                    <li className={"mx-4"}>
                        <button className={"text-gray-600 text-xl hover:text-gray-400"}>
                            <i class="bi bi-chevron-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default ActionBar