'use client'

import { useState } from 'react';
import Scoreboard from './scoreboard.js';

export default function Main() {
  const [closeHome, setCloseHome] = useState(true);
  const [firstTime, setFirstTime] = useState(true)
  const [scoreboard, setScoreboard] = useState({
    title: "Test Title",
    defaultpoints: 5,
    minpoints: 0,
    maxpoints: 10,
    colors: {
      background: "indigo-400",
      basecolor: "white",
      dark: "indigo-700",
      light: "indigo-500",
    },
    scores: [{
      name: "Person 1",
      picture: "https://placehold.co/64x64?text=Blank",
      id: 0
    },{
      name: "Person 3",
      picture: "https://placehold.co/128x128?text=Blank",
      id: 2
    },{
      name: "Person 2",
      picture: "https://placehold.co/256x256?text=Blank",
      id: 1
    }]
  });

  function openScoreboard(){
    setCloseHome(false);
  }

  return (
    <div className="bg-[var(--background)] w-screen h-screen place-content-center place-items-center text-center">
      <style></style>
      {closeHome ? (
        <Home clickHandler={openScoreboard} />
      ) : (
        <Scoreboard content={scoreboard} />
      )}
      {firstTime && !closeHome && <p>Press Ctrl/Cmd + Enter to edit scoreboard! (Note: Editing scoreboard and adding/subtracting points is currently unavailable)</p>}
    </div>
  );
}

function Home({ clickHandler }){
  return ( <>
    <h1>Simple Scoreboard</h1>
    <button onClick={clickHandler} className="p-2 m-2"><p>Create New Scoreboard</p></button>
    <p>Made by Eshan Does, v0.1.0</p>
  </> );
}