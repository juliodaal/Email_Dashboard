import React from "react";

class Search extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"relative flex items-center"}>
                <button className={"w-8 absolute p-1 right-0 mx-6 rounded-full hover:bg-gray-300"}><i class="bi bi-search text-gray-600"></i></button>
                <input type="text" className={"w-full py-2 px-6 rounded-md bg-gray-200 text-gray-600 outline-none placeholder-gray-600"} placeholder="Search" />
                <ul className={"w-full mt-2 bg-white rounded-md absolute top-full overflow-hidden hidden"}>
                    {/* Search Cards */}
                    <li>
                        <button className={"w-full p-6 flex justify-start items-center hover:bg-gray-100"}>
                            <img  
                                className={"w-20 h-20 rounded-full"}
                                src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                alt="User"/>
                            <div className={"px-6 flex flex-col items-start"}>
                                <p className={"text-gray-600"}>Julie Smith</p>
                                <p className={"text-gray-400 text-md"}>Juliesm@myemail.com</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className={"w-full p-6 flex justify-start items-center hover:bg-gray-100"}>
                            <img  
                                className={"w-20 h-20 rounded-full"}
                                src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                alt="User"/>
                            <div className={"px-6 flex flex-col items-start"}>
                                <p className={"text-gray-600"}>Julie Smith</p>
                                <p className={"text-gray-400 text-md"}>Juliesm@myemail.com</p>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className={"w-full p-6 flex justify-start items-center hover:bg-gray-100"}>
                            <img  
                                className={"w-20 h-20 rounded-full"}
                                src="https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                alt="User"/>
                            <div className={"px-6 flex flex-col items-start"}>
                                <p className={"text-gray-600"}>Julie Smith</p>
                                <p className={"text-gray-400 text-md"}>Juliesm@myemail.com</p>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Search