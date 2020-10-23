import React from 'react';
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";


function App() {
  return (
    //BEM naming convention Box Modifier
    <div className="app">
     <Sidebar/>
     <Feed/>
     <Widgets/>
    </div>
  );
}

export default App;
