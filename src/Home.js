import React from 'react';
import Header from "./Components/Header/Header";
import LeftBody from "./Components/Body/LeftBody";
import StoryEx from "./Consumables/StoryEx/StoryEx";
import Post from "./Components/Body/Post";
import ceci from "./Consumables/Photos/ceci.jpg";
import PostsEx from "./Consumables/Posts/PostsEx";
import Requests from "./Components/Body/Requests";
import Contacts from "./Components/Body/Contacts";

function Home() {
    return (
        <div>
            <div>
                <Header/>
            </div>

            <div style={{display: 'flex'}}>
                <LeftBody/>
                {/* CENTRAL BODY */}
                <div>
                    <StoryEx name="Cecilia"/>
                    <div style={{marginLeft: 100, marginTop: 50}}>
                        <Post image={ceci}/>
                    </div>
                    <div style={{marginLeft: 100}}>
                        <PostsEx/>
                    </div>
                </div>
                {/* RIGHT BODY   */}
                <div style={{ marginTop:50, marginLeft:80 }}>
                    <Requests/>
                    <Contacts/>

                </div>
            </div>


        </div>
    );
}

export default Home;
