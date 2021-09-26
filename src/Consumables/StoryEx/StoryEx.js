import React from 'react';
import './storyStyle.css';
function StoryEx(props) {
    return (
        <div className="external">
            <div style={{ display:'flex',justifyContent:'center', }}>
                <div style={{ color:'#faf2d7',position:'relative',fontFamily: '"Roboto Slab" serif',fontWeight:'bold' }}>
                    {props.name}
                </div>
                {props.children}
            </div>
        </div>
    );
}

export default StoryEx;
