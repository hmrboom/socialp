import React from 'react';
import points from '../../Consumables/Icons/more.png';
function Contacts() {
    const persons = [
        {
            id:1,
            name:'Alin',
            photo:'points'
        },
        {
            id:2,
            name:'Alin1',
            photo:'poza2'
        },
        {
            id:3,
            name:'Alin3',
            photo:'poza3'
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
                    CONTACTS
                </div>
                <div style={{
                    backgroundColor: 'rgba(0,0,0,0.26)',
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

            <div style={{
                backgroundColor:'white',
                borderRadius:15,
                width:300,
                height:'auto',
                display:'flex',
                flexDirection:'column',
                marginTop:15,
            }}>
                <div style={{
                    marginTop:5,
                    marginLeft:15,
                    marginBottom:15,
                }}>
                    {
                        persons.map(e=>
                        {
                            return(
                              <li style={{ listStyleType:'none',marginTop:10 }} key={e.id}>
                                  <div style={{ display:'flex' }}>
                                      <img src={e.photo} alt="poz" width="25" height="25" style={{borderRadius: 15}}/>
                                      <div style={{ marginLeft:5,fontWeight:'bold',fontFamily: '"Prompt", sans-serif',fontSize:16 }}>
                                          {e.name}
                                      </div>



                                  </div>
                              </li>
                            );
                        })
                    }
                </div>
            </div>

        </div>
    );
}

export default Contacts;
