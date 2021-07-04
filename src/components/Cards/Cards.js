import React from "react";

import Search from "../Search/Search"
import Card from "../Card/Card"

class Cards extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={"p-6 col-span-3 bg-gray-50 overflow-y-scroll scroll-custom"}>
                <Search />
                <div>
                    <ul className={"w-full mt-2 rounded-md"}>
                        {/* Cards */}
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Cards