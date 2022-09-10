import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

import { Button } from "antd"
import toast from "../../Components/common/toast"
import { forgotPassword, varifyEmail,removeForgotPassword,removeEmail } from '../../actions/auth'
import { showLoaderAction } from '../../actions/loader';
import Loader from '../../Components/loader';


const Forgot = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    
    const forgotStatus = useSelector(state => state.auth.forgotStatus)
    const email_Check = useSelector(state => state.auth.emailCheck)



    const handleForgot = () => {
        if (email == " " || !email) {
            toast.error("Please enter a valid email address")
            return false;
        }
        dispatch(varifyEmail({'email':email}))
    }

    useEffect(()=>{
        if(email_Check){
            if(email_Check.status == false){
                toast.error('Email not verify')
            }
             else{
                localStorage.setItem('email', email)
                dispatch(forgotPassword({'email':email}))
                dispatch(showLoaderAction(true))
            }
        }
    },[email_Check])

    useEffect (()=>{
        if (forgotStatus) {
            dispatch(showLoaderAction(false))
            toast.success('Email sent success')
            
            history.push('/otp')
            dispatch(removeForgotPassword(null))
            dispatch(removeEmail(false))
        }
        
    },[forgotStatus])

    return (
        <>
        <Loader/>
        <div className="background" style={{ paddingTop: "20vh" }}>
            <div className="col-4 offset-4 bg-white p-5 border rounded" style={{ boxShadow: "inset rgb(204 204 204) -4px 3px 7px 7px" }}>
                <div>
                    <h2 className={"font-weight-bold text-center"}>Forgot Password</h2>
                    <p style={{ marginBottom: '20px', cursor: 'pointer' }} className={'text-center'} >Forgot Password ?</p>
                    <div className="form-group">
                        <label>Registered Email Address</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className={"form-control mt-2 mb-2"} type="email" placeholder="abc@xyz.com" />
                    </div>
                    <Button onClick={() => handleForgot()} type={"primary"} className="btn btn-block" style={{ width: '100%', background: '#1890ff', color: '#fff' }}>Send Reset Password Instructions</Button>
                    <p className={'text-center mt-3'} onClick={() => history.push('/login')}>Back to Login</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Forgot