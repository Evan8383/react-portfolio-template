import Project from "../components/Project";
import { useState, useEffect } from 'react';


function Portfolio() {
  const project = [
    {
      title: "MVC Tech Blog",
      description: "A blog site where developers can publish their blog posts and comment on other developers’ posts as well.",
      image: "src/assets/MVC.png",
      link: "https://mvc-blog-applications-2024-6092fe895613.herokuapp.com/",
      repo: "https://github.com/Evan8383/mvc-blog-app?tab=readme-ov-file"
    },
    {
      title: "Social Network API",
      description: "This project implements a simple social media backend using Node.js, Express, and MongoDB, with the Mongoose ODM.",
      image: "src/assets/API.png",
      link: "https://app.screencastify.com/v3/watch/lcYTsrFqqalz6xPJnMYX",
      repo: "https://github.com/Evan8383/social-network-api"
    },
    {
      title: "PWA Text Editor",
      description: "PWA Text Editor is a Progressive Web Application (PWA) designed to provide a simple and efficient text editing experience directly from your web browser.",
      image: "src/assets/PWA.png",
      link: "https://pwa-text-editor-2024-77731c50b699.herokuapp.com/",
      repo: "https://github.com/Evan8383/pwa-text-editor"
    },
    {
      title: "Finance Tracker",
      description: "A powerful financial management application designed to offer users assistance in tracking their financial activities. Designed with a focus on user-friendliness and budgeting.",
      image: "src/assets/Finance.png",
      link: "https://wisdom-warriors-financial-a510ae2f09f8.herokuapp.com/",
      repo: "https://github.com/bskor66/Wisdom-Warriors"
    },
    {
      title: "Weather App",
      description: "This Weather App is a web application that allows users to check the current weather conditions and a 5-day forecast for a location. The app fetches weather data from the OpenWeatherMap API using the provided API key.",
      image: "src/assets/Weather.png",
      link: "https://evan8383.github.io/weather-app/",
      repo: "https://github.com/Evan8383/weather-app"
    },
    {
      title: "NFL Stat Tracker",
      description: "An engaging web project centered around NFL statistics and teams. This project is thoughtfully organized into three HTML files, each serving a distinct purpose, along with JavaScript code that powers the web application's functionality.",
      image: "src/assets/NFL.png",
      link: "https://charleswgillespie.github.io/95-96-Bulls-NFL-Stats-and-GeoLocator",
      repo: "https://github.com/CharlesWGillespie/95-96-Bulls-NFL-Stats-and-GeoLocator"
    }
  ]
  return (
    <>
      <div className="flex flex-wrap p-4 gap-3 justify-center">
      <h1 className="text-3xl font-semibold mb-4 w-full text-center">Portfolio</h1>
        {project.map((project, index) => (
          <Project repo={project.repo} key={index} title={project.title} description={project.description} image={project.image} link={project.link}/>
        ))}
      </div>
    </>
  )
}

export default Portfolio;