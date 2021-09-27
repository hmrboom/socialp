import React, {useState} from 'react';
import prinIcon from '../../Consumables/Photos/princIcon.png';
import search from '../../Consumables/Icons/search.png';
import silviu from '../../Consumables/Photos/silviu.jpg';
import './headerStyle.css';
import Home from "../../Home";
import {useHistory} from "react-router-dom";

const Header = () => {
    let history = useHistory();
    const [submit, Setsubmit] = useState('');

    return (
        <div style={{ backgroundColor:'white',borderRadius:15}} >
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', cursor: "pointer"}} onClick={e => {
                   history.push('register');
                }}>
                    <img src={prinIcon} alt='poza' width='45' style={{borderRadius: 21, paddingRight: 10}}/>
                    <div style={{fontWeight: 'bold', fontFamily: '"Garamond", Times, serif'}}> AplicatieWeb</div>
                </div>

                <div style={{display: 'flex', marginRight: 150, gap: 10}}>
                    <input type="text"
                           style={{backgroundColor: '#eeeeee', borderRadius: 25, width: 200, height: 'auto', border:'none',outline:'none'}}
                           placeholder="Search.."/>
                    <div style={{backgroundColor: '#03a9f4', borderRadius: 7, width: 75, cursor: 'pointer', outline:0}}>
                        <div style={{
                            display: "flex",
                            justifyContent: 'flex-start',
                            alignItems: 'flex-end',
                            gap: 5,
                            marginTop: 3
                        }}>
                            <img src={search} width='15' alt='search' style={{ marginBottom:2 }}/>
                            <div style={{fontSize: 13, fontFamily: '"Prompt", sans-serif',color:'white'}}>Submit</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;
