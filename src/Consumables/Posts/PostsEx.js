import React from 'react';
import './postStyle.css';

function PostsEx(props) {
    return (
        <div className="extern">
            <div style={{marginLeft: 10, paddingTop: 10}}>
                <div style={{display: 'flex', flexDirection: 'row', gap: 35}}>
                    <img src={props.image} alt="profileImg" width="40" height="35" style={{borderRadius: 15}}/>
                    <div>
                        <div style={{fontFamily: '"Prompt", sans-serif', fontSize: 15}}>
                            {props.name}
                        </div>
                        <div style={{fontFamily: '"Prompt", sans-serif', fontSize: 13, color: '#9e9e9e',}}>
                            {props.time}
                        </div>
                    </div>


                </div>
                <div style={{paddingTop: 20, fontFamily: '"Prompt", sans-serif'}}>
                    {props.text}
                </div>
            </div>


        </div>
    );
}

export default PostsEx;
