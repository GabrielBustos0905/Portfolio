import React from "react";
import YourDestiny from "../../assets/yourDestiny.jpeg";
import pi from "../../assets/pi.png";
import ct from "../../assets/ct.png"


const Portfolio = () => {

    const proyects = [
        {
            id: 1,
            src: YourDestiny,
            demo: "https://proyecto-final-one-beta.vercel.app/",
            code: "https://github.com/GabrielBustos0905/Proyecto-Final"
        },
        {
            id: 2,
            src: pi,
            demo: "https://proyecto-individual-blush.vercel.app/",
            code: "https://github.com/GabrielBustos0905/Proyecto-Individual"
        },
        {
            id: 3,
            src: ct,
            demo: "https://clima-tacto.vercel.app/",
            code: "https://github.com/GabrielBustos0905/clima-tacto"
        }
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                    <p className="py-6">Check out some of my works rigth here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        proyects?.map(({id, src, demo, code}) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={demo}>Demo</a></button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"><a href={code}>Code</a></button>
                                </div>
                            </div>
                        ))
                    }   
                </div>
            </div>
        </div>
    )
};

export default Portfolio;