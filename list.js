import React from "react";

export default function List(props) {
    return (
        <div>
            {props.list.map((item) => {
                return (
                    <div>
                        <h4>{item}</h4>
                        <button onClick={() => props.handleRemove(item)}>Remove</button>
                    </div>
                )
            })} 
        </div>
    )

}