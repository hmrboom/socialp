import React from 'react';

function Requests() {
    const req = [
        {
            id: 1,
            name: 'Alin',
            photo: 'ceva'
        },
        {
            id: 2,
            name: 'Ceci',
            photo: 'smth'
        }
    ]

    return (
        <div>
            <div style={{display: 'flex', marginTop: 25, flexDirection: 'row'}}>
                <div style={{
                    color: '#9e9e9e',
                    fontSize: 15,
                    fontFamily: '"Roboto", sans-serif'


                }}>
                    REQUESTS
                </div>
                <div style={{
                    backgroundColor: '#03a9f4',
                    marginLeft: 200,
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
            {/*AICI*/}
            {
                req.map(e => {
                    return (
                        <li key={e.id} style={{listStyleType: 'none'}}>
                            <div style={{
                                display: 'flex',
                                marginTop: 25,
                                backgroundColor: 'white',
                                width: 300,
                                height: 'auto',
                                borderRadius: 15,

                            }}>
                                <div style={{
                                    marginTop: 15,
                                    marginLeft: 15,
                                    marginBottom: 15
                                }}>

                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                    }}>


                                        <img src={e.photo} alt="phot" width="30" height="30"
                                             style={{borderRadius: 15}}/>
                                        <div style={{
                                            marginLeft: 25,
                                            fontWeight: 'bold'
                                        }}>
                                            {e.name}
                                        </div>
                                        <div style={{marginLeft: 4}}>
                                            wants to add you to friends
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        gap: 25,
                                        marginTop: 15
                                    }}>
                                        <div style={{
                                            backgroundColor: '#03a9f4',
                                            borderRadius: 15,
                                            width: 120,
                                            height: 35,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}>
                                            <div style={{
                                                color: 'white',
                                                fontFamily: '"Prompt", sans-serif',
                                                fontSize: 12,
                                                fontWeight: 'bold'
                                            }}>
                                                Accept
                                            </div>
                                        </div>
                                        <div style={{
                                            backgroundColor: 'rgba(0,0,0,0.26)',
                                            borderRadius: 15,
                                            width: 120,
                                            height: 35,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            cursor: 'pointer',
                                        }}>
                                            <div style={{
                                                color: 'white',
                                                fontFamily: '"Prompt", sans-serif',
                                                fontSize: 12,
                                                fontWeight: 'bold'
                                            }}>
                                                Decline
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </li>
                    )
                })
            }

            {/*AICI*/}
        </div>
    );
}

export default Requests;
