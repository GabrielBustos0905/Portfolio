import React from "react";

const Abaut = () => {
    return (
        <div  name="abaut" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">Abaut</p>
                </div>

                <p className="text-xl mt-20">
                    My name is Gabi, and I'm studying Systems Engineering at the National Technological University (UTN) in the Córdoba Regional Faculty. Additionally, I constantly take courses to expand my knowledge in programming. Currently, I'm focused on web development, specifically frontend. I've completed a bootcamp at Soy Henry and have also taken a course at my university. My skills range from backend and database, using Node.js, Express.js, Sequelize, and PostgreSQL, to frontend development, where I've used React, Redux, React-Redux, HTML, CSS, JavaScript, and Tailwind.
                </p>

                <br />

                <p className="text-xl">
                    I have had experience working on projects both individually and collectively. Individually, I have worked on projects involving controlled forms (using react-hook-form), utilizing a weather API, an individual project that I had to complete during the Soy Henry bootcamp, and a group project that I did with fellow bootcamp students. The group project was a hospitality web app, where we used agile methodologies, the technologies mentioned earlier, and effective group communication. In the Portfolio section, you will find more information about the projects, including demos and links to the GitHub repositories.
                </p>
            </div>
        </div>
    )
};

export default Abaut;