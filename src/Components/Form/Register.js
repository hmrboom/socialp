import React, {useState} from 'react';
import './formStyle.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import {useHistory} from "react-router-dom";
function Register() {
    const [startDate, setStartDate] = useState(new Date());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [user, setUser] = useState('');
    const [birthday, setBirthday] = useState('');

    let history = useHistory();
    // function Register(email,password,user) {
    //     axios.post('HTTTP',
    //         {
    //             email:email,
    //             password:password,
    //             user:user
    //         })
    //         .then(response => {
    //             console.log(response)
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    //
    // }
    return (
        <div>
            <div style={{ fontFamily: 'Sora, sans-serif' }}>
                Title
            </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: 100, marginRight: 100}}>
            <div className="login">
                <div style={{display: 'flex', flexDirection: 'column', marginTop: 25, gap: 30,marginLeft:8}}>
                    <div style={{fontFamily: 'Sora, sans-serif', fontSize: 23}}>
                        Email
                    </div>
                    <div style={{fontFamily: 'Sora, sans-serif', fontSize: 23}}>
                        Password
                    </div>
                    <div style={{fontFamily: 'Sora, sans-serif', fontSize: 23}}>
                        Confirm Password
                    </div>
                    <div style={{fontFamily: 'Sora, sans-serif', fontSize: 23}}>
                        Username
                    </div>
                    <div style={{fontFamily: 'Sora, sans-serif', fontSize: 23,marginTop:7}}>
                        Birthday
                    </div>
                    <div>
                    <div style={{
                        backgroundColor:'#03a9f4',
                        width:160,
                        height:40,
                        borderRadius:10,
                        marginTop:30,
                        cursor:'pointer',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        fontFamily: 'Sora, sans-serif',
                        fontSize:20
                    }}
                    // onClick={()=>{
                    //     // Register(email,password,user);
                    //
                    //
                    // }}
                    >
                        Register
                    </div>
                    <div style={{ display:'flex',justifyContent:'center',marginTop:5,cursor:'pointer',color:'#0347f4' }}
                    onClick={()=>{
                        history.push('login');
                    }}
                    >
                        Login here!
                    </div>
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    marginLeft: 10,
                    flexDirection: 'column',
                    marginRight:8,
                    gap:25
                }}>
                    <input type="text" style={{
                        backgroundColor: '#d7e7fa',
                        width: 350,
                        height: 45,
                        borderRadius: 15,
                        fontFamily: 'Sora, sans-serif',
                        border: 'none',
                        fontSize: 20,
                        marginTop: 15
                    }}
                    onChange={e=>{
                        setEmail(e.target.value);
                    }}
                    />
                    <input type="text" style={{
                        backgroundColor: '#d7e7fa',
                        width: 350,
                        height: 45,
                        borderRadius: 15,
                        fontFamily: 'Sora, sans-serif',
                        border: 'none',
                        fontSize: 20,
                    }}
                     onChange={e=>{
                         setPassword(e.target.value);
                     }}
                    />
                    <input type="text" style={{
                        backgroundColor: '#d7e7fa',
                        width: 350,
                        height: 45,
                        borderRadius: 15,
                        fontFamily: 'Sora, sans-serif',
                        border: 'none',
                        fontSize: 20,
                    }}
                    onChange={e=>{
                        setConfirmPassword(e.target.value);
                        if(confirmPassword !== password)
                        {
                            console.log('no')
                        }
                    }}
                    />
                    <input type="text" style={{
                        backgroundColor: '#d7e7fa',
                        width: 350,
                        height: 45,
                        borderRadius: 15,
                        fontFamily: 'Sora, sans-serif',
                        border: 'none',
                        fontSize: 20,
                    }}
                    onChange={e=>{
                        setUser(e.target.value);
                    }}
                    />
                    <DatePicker selected={startDate} onChange={(date) => {
                        setStartDate(date);}}/>
                </div>


            </div>

        </div>
        </div>
    );
}

export default Register;
