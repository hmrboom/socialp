import React from 'react';
import Header from "./Components/Header/Header";
import LeftBody from "./Components/Body/LeftBody";
import StoryEx from "./Consumables/StoryEx/StoryEx";
import Post from "./Components/Body/Post";
import ceci from "./Consumables/Photos/ceci.jpg";
function Home() {
    return (
        <div>
            <div>
                <Header/>
            </div>
           <div style={{ display:'flex' }}>
               <LeftBody/>
               <div>
                   <StoryEx name="Cecilia"/>
                 <div style={{ marginLeft:100,marginTop:50 }}>
                     <Post image={ceci}/>
                 </div>

               </div>

           </div>


        </div>
    );
}

export default Home;
