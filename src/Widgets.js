import React from 'react'
import "./Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";



function Widgets() {
    return (
        <div className="widgets">
             <div className="widgets__input">
                 <SearchIcon className="widgets__searchIcon"/>
                 <input placeholder="Search Twitter" type="text"/>
             </div>

             <div className="widgets__container">
                 <h3>What's happening</h3>
                 <TwitterTweetEmbed tweetId={"858551177860055040"} />

                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saitejagatadi"
                options={{ height: 400 }}
                />

                <TwitterShareButton
                url={"https://facebook.com/cleverprogrammer"}
                options={{ text: "#reactjs is awesome", via: "saitejagatadi" }}
                />
                </div>
                </div>
                );
                }
export default Widgets;