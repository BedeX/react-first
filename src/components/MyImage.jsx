import React from "react";

export const MyImage = ({counter}) => {

    console.log(counter)
    const url =`https://picsum.photos/id/${counter+20}/400`
    return (
        <div className="flex items-center flex-col bg-amber-50 p-3 max-w-2xl m-auto shadow-lg rounded-3xl">
            <h2>Lorem Picsum Image</h2>
            <img src={url} alt="Picsum Image" className="border-8 rounded-3xl"/>
        </div>
    )
}