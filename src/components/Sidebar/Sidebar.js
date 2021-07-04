import React from "react";

class Sidebar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"col-span-2"}>
                {/* Compose Email */}
                <div>
                    <ul className={"my-6 px-6"}>
                        <li>
                            <button className={"w-full flex justify-between py-2 px-6 rounded-md bg-blue-600 text-white"}>
                                <span>
                                    <i class="bi bi-envelope-fill mr-4"></i>
                                    Compose
                                </span>
                                <i class="bi bi-chevron-down"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Options */}
                <div>
                    <ul className={"my-6 px-6"}>
                        <li>
                            <button className={"w-full flex justify-between items-center py-2 px-6 rounded-md hover:bg-gray-100 text-gray-600"}>
                                <span>
                                    <i class="bi bi-inbox-fill mr-2"></i>
                                    Inbox
                                </span>
                                <span class={"text-sm text-gray-600"}>1.009</span>
                            </button>
                        </li>
                        <li>
                            <button className={"w-full flex justify-between py-2 px-6 rounded-md hover:bg-gray-100 text-gray-600"}>
                                <span>
                                    <i class="bi bi-star-fill mr-2"></i>
                                    Starred
                                </span>
                                <span class={"text-sm text-gray-600"}>32</span>
                            </button>
                        </li>
                        <li>
                            <button className={"w-full flex justify-between py-2 px-6 rounded-md hover:bg-gray-100 text-gray-600"}>
                                <span>
                                    <i class="bi bi-shift-fill mr-2"></i>
                                    Sent
                                </span>
                                <span class={"text-sm text-gray-600"}>32</span>
                            </button>
                        </li>
                        <li>
                            <button className={"w-full flex justify-between py-2 px-6 rounded-md hover:bg-gray-100 text-gray-600"}>
                                <span>
                                    <i class="bi bi-file-earmark mr-2"></i>
                                    Draft
                                </span>
                                <span class={"text-sm text-gray-600"}>3</span>
                            </button>
                        </li>
                        <li>
                            <button className={"w-full flex justify-between py-2 px-6 rounded-md hover:bg-gray-100 text-gray-600"}>
                                <span>
                                    <i class="bi bi-trash-fill mr-2"></i>
                                    Delete
                                </span>
                                <span class={"text-sm text-gray-600"}>230</span>
                            </button>
                        </li>
                        <li>
                            <button className={"w-full flex justify-between py-2 px-6 rounded-md hover:bg-gray-100 text-gray-600"}>
                                <span>
                                    <i class="bi bi-archive-fill mr-2"></i>
                                    Archive
                                </span>
                                <span class={"text-sm text-gray-600"}>63</span>
                            </button>
                        </li>
                    </ul>
                </div>
                {/* Labels */}
                <div>
                    <div>
                        <ul className={"my-6 px-6"}>
                            <li><p className={"w-full py-2 text-gray-600"}>Labels</p></li>
                            <li>
                                <button className={"w-full flex justify-start items-center py-2 px-6 rounded-md text-gray-600 hover:text-gray-800"}>
                                    <i class="bi bi-circle mr-2 text-xs text-red-600"></i>
                                    Work
                                </button>
                            </li>
                            <li>
                                <button className={"w-full flex justify-start items-center py-2 px-6 rounded-md text-gray-600 hover:text-gray-800"}>
                                    <i class="bi bi-circle mr-2 text-xs text-blue-600"></i>
                                    Customers
                                </button>
                            </li>
                            <li>
                                <button className={"w-full flex justify-start items-center py-2 px-6 rounded-md text-gray-600 hover:text-gray-800"}>
                                    <i class="bi bi-circle mr-2 text-xs text-green-600"></i>
                                    Studies
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sidebar