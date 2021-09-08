import React from 'react';
import './bodyStyle.css';
import silviu from '../../Consumables/Photos/silviu.jpg';
import home from '../../Consumables/Icons/home.png';
import profile from '../../Consumables/Icons/user.png';
import news from '../../Consumables/Icons/newspaper-folded.png';
import people from '../../Consumables/Icons/group.png';
import setting from '../../Consumables/Icons/settings.png';
import photos from '../../Consumables/Icons/gallery.png';
import ceci from '../../Consumables/Photos/ceci.jpg';
import mc from '../../Consumables/Photos/mcdonalds.jpg';
import close from '../../Consumables/Icons/close.png';
const LeftBody = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
                width: 200,
                height: 70,
                marginTop: 35,
                borderRadius: 15,
                alignItems: 'center',

            }}>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10}}>
                    <img src={ceci} width='40' height='40' style={{borderRadius: 35}} alt="poza"/>
                    <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 14}}>
                        Numele <br/>
                        <div style={{fontSize: 12, fontStyle: 'italic'}}> @nume</div>
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                backgroundColor: 'white',
                width: 200,
                height: 'auto',
                marginTop: 35,
                flexDirection: 'column',
                borderRadius: 15

            }}>
                <div>
                    <div className='click'>
                        <div style={{display: 'flex', gap: 20, marginBottom: 15, marginLeft: 30, marginTop: 1}}>
                            <img src={home} width='25' alt="home"/>
                            <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 15, marginTop: 5}}>
                                Home
                            </div>

                        </div>
                        <hr style={{marginRight: 30, marginLeft: 30, color: '#eeeeee'}}/>
                    </div>
                    <div className='click'>
                        <div style={{display: 'flex', gap: 20, marginBottom: 15, marginLeft: 30, marginTop: 15}}>
                            <img src={people} width='25' alt="home"/>
                            <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 15, marginTop: 5}}>
                                People
                            </div>

                        </div>
                        <hr style={{marginRight: 30, marginLeft: 30, color: '#eeeeee'}}/>
                    </div>
                    <div className='click'>
                        <div style={{display: 'flex', gap: 20, marginBottom: 15, marginLeft: 30, marginTop: 15}}>
                            <img src={photos} width='25' alt="home"/>
                            <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 15, marginTop: 5}}>
                                Photos
                            </div>

                        </div>
                        <hr style={{marginRight: 30, marginLeft: 30, color: '#eeeeee'}}/>
                    </div>
                    <div className='click'>
                        <div style={{display: 'flex', gap: 20, marginBottom: 15, marginLeft: 30, marginTop: 15}}>
                            <img src={news} width='25' alt="home"/>
                            <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 15, marginTop: 5}}>
                                News Feed
                            </div>

                        </div>
                        <hr style={{marginRight: 30, marginLeft: 30, color: '#eeeeee'}}/>
                    </div>
                    <div className='click'>
                        <div style={{display: 'flex', gap: 20, marginBottom: 15, marginLeft: 30, marginTop: 15}}>
                            <img src={profile} width='25' alt="home"/>
                            <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 15, marginTop: 5}}>
                                Profile
                            </div>

                        </div>
                        <hr style={{marginRight: 30, marginLeft: 30, color: '#eeeeee'}}/>
                    </div>
                    <div className='click' style={{paddingBottom: 1}}>
                        <div style={{display: 'flex', gap: 20, marginBottom: 15, marginLeft: 30, marginTop: 15}}>
                            <img src={setting} width='25' alt="home"/>
                            <div style={{fontFamily: '"Rubik", sans-serif', fontSize: 15, marginTop: 5}}>
                                Settings
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            <div style={{display: 'flex', marginTop: 25, flexDirection: 'row'}}>
                <div style={{
                    color: '#9e9e9e',
                    fontSize: 15,
                    fontFamily: '"Roboto", sans-serif'


                }}>
                    INVITATIONS
                </div>
                <div style={{
                    backgroundColor: '#f44336',
                    marginLeft: 85,
                    width: 20,
                    borderRadius: 10,
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div style={{color: 'white', fontSize: 15}}>
                        ?
                    </div>
                </div>
            </div>

            <div style={{
                display: 'flex',
                marginTop: 35,
                backgroundColor: 'white',
                width: 200,
                height: 'auto',
                borderRadius: 15,
                flexDirection: 'column'

            }}>
                <img src={mc} alt='mcGroup' width='180'
                     style={{marginLeft: 10, marginTop: 15, marginBottom: 15, borderRadius: 15}}/>
                <div style={{
                    display:'flex',
                    flexDirection:'row',
                    justifyContent:'space-between'
                }}>
                    <div style={{
                        backgroundColor: '#03a9f4',
                        borderRadius: 15,
                        width: 120,
                        height: 30,
                        marginLeft: 10,
                        marginBottom: 15,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>

                        <div style={{color: 'white', fontFamily: '"Prompt", sans-serif', fontSize: 12,cursor:'pointer'}}>
                            Accept Invitation
                        </div>
                    </div>
                    <div style={{ marginRight:25,marginTop:6,cursor:'pointer' }}>
                        <img src={close} alt='close' width='15'/>

                    </div>
                </div>


            </div>

        </div>
    );
};

export default LeftBody;
