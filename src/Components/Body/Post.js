import React from 'react';
import './bodyStyle.css';

function Post(props) {
    let alin = "ceci";
    let textPlaceholder = "What's new, "+ alin+"?";
    return (
        <div className="postStyle">
            <div>
                <div style={{marginLeft: 10, display: 'flex', gap: 10}}>
                    <img src={props.image} alt="profil" width="40" height="35" style={{borderRadius: 15}}/>
                    <input type="text" placeholder={textPlaceholder}
                           style={{
                               marginTop: 8,
                               fontWeight: 'bold',
                               fontFamily: '"Prompt", sans-serif',
                               color: '#9e9e9e',
                               fontSize: 15,
                               border: 'none',
                               outline:'none',
                               width:500


                           }}/>
                    <div style={{
                        backgroundColor: '#03a9f4',
                        borderRadius: 15,
                        width: 100,
                        height: 35,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        cursor:'pointer'
                    }}>
                        <div style={{color: 'white', fontFamily: '"Prompt", sans-serif', fontSize: 12,fontWeight:'bold' }}>
                            Post It!
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Post;
