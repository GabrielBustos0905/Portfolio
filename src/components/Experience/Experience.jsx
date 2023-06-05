import React from "react";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png"

const Experience = () => {

    const tecnologias = [
        {
            id: 1,
            src: html,
            title: "Html",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "Css",
            style: "shadow-blue-600"
        },
        {
            id: 3,
            src: js,
            title: "Javascript",
            style: "shadow-yellow-600"
        },
        {
            id: 4,
            src: react,
            title: "React",
            style: "shadow-blue-300"
        },
        {
            id: 5,
            src: html,
            title: "Html",
            style: "shadow-blue-600"
        }
    ];

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experience</p>
                    <p className="py-6">These are the technologies I've worked whit</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {
                        tecnologias?.map(({id, src, title, style}) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto"/>
                                <p className="mt-4">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Experience;