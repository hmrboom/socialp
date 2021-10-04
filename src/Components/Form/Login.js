import React from 'react';
import './formStyle.css';
import google from '../../Consumables/Icons/google_icon_130924.png';
import facebook from '../../Consumables/Icons/facebook_icon-icons.com_53612.png';
import { Checkbox } from 'antd';
import {useHistory} from "react-router-dom";
import Header from "../Header/Header";
function Login() {
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }
    let history = useHistory();

    return (
        <div>
            <Header/>
        <div className="login-container">
            <div className="login-content">
                <div className="login-ceva">
                    Login with
                        <div className="google">
                            <img src={google} alt="gogle" width="40" height="40"/>
                        </div>
                        <div className="facebook">
                            <img src={facebook} alt="gogle" width="40" height="40"/>
                        </div>
                    <div style={{ marginTop:100, color:'rgba(0,0,0,0.3)'}}>
                        or
                    </div>
                </div>



                <div className="input-container">
                    <div className="user">
                        UserName
                    </div>
                   <input type="text" style={{
                       border:'none',
                       marginTop:10,
                       borderRadius:5,
                       width:280,
                       height:35,
                       backgroundColor:'rgba(238,238,238,0.93)',
                       fontFamily:'Abhaya Libre , serif',
                       fontSize:17
                   }}/>
                </div>
                  <div className="input-container">
                      <div className="user">
                          UserName
                      </div>
                      <input type="text" style={{
                          border:'none',
                          marginTop:10,
                          borderRadius:5,
                          width:280,
                          height:35,
                          backgroundColor:'rgba(238,238,238,0.93)',
                          fontFamily:'Abhaya Libre , serif',
                          fontSize:17
                      }}/>
                  </div>
                <div className="input-container" style={{ marginTop:100 }}>
                    <div className="user">
                        Password
                    </div>
                    <input type="text" style={{
                        border:'none',
                        marginTop:10,
                        borderRadius:5,
                        width:280,
                        height:35,
                        backgroundColor:'rgba(238,238,238,0.93)',
                        fontFamily:'Abhaya Libre , serif',
                        fontSize:17
                    }}/>
                </div>

                <div style={{ position:'absolute',marginTop:450, marginLeft:52,fontFamily:'Abhaya Libre , serif'}}>
                    <Checkbox onChange={onChange}>Remember Me</Checkbox>
                </div>
                <div style={{
                    position:'absolute',marginTop:452,marginLeft:225,cursor:'pointer',fontFamily:'Abhaya Libre , serif'
                }}>
                    Forgot Password?
                </div>
                <div style={{
                    position:'absolute',marginTop:477,marginLeft:150,cursor:'pointer',fontFamily:'Abhaya Libre , serif'
                }}
                onClick={()=>
                {
                    history.push('/register');
                }}
                >
                    Register Here!
                </div>
                <div className="submit-container">
                    <div style={{
                        fontFamily:'Abhaya Libre , serif',
                    }}>
                        Submit
                    </div>
                </div>






            </div>
        </div>
        </div>
    );
}

export default Login;
