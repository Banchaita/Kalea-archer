import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd"
import toast from "../../Components/common/toast"
import { verifyOtp,forgotPassword,removeOpt,removeForgotPassword } from '../../actions/auth'
import './login.css'

const Otp = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [otp, setOtp] = useState('')
    const [email, setEmail] = useState('')


    const otpStatus = useSelector(state => state.auth.otpStatus)
    const forgotStatus = useSelector(state => state.auth.forgotStatus)

    const handleOtp = () => {
        if (otp == " " || !otp) {
            toast.error("Please enter a valid otp")
            return false;
        }
        let data = {
            otp: otp
        }
        dispatch(verifyOtp(data))
    }
    useEffect(() => {
        if (otpStatus) {
            if(otpStatus.status == false){
                toast.error('Wrong otp ')
            }else{
                dispatch(removeForgotPassword(null))
                dispatch(removeOpt(false))
                toast.success("Success")
                history.push('/resetpassword')
            }
        }
    }, [otpStatus])
    useEffect(() => {
        if(forgotStatus){
            setEmail(forgotStatus.email) 
        }
    },)
  
    const handleresentotp = () => {
        alert(localStorage.getItem('email', email))
        if (forgotStatus) {
            localStorage.getItem('email', email)
        }
        dispatch(forgotPassword({'email':localStorage.getItem('email')}))
        toast.success('Again Email sent success')

    }

  



    return (
        <>
            <div class="container height-100 d-flex justify-content-center align-items-center">
                <div class="position-relative">
                    <div class="card p-2 text-center">
                        <h6>Please enter the one time password <br /> to verify your account</h6>
                        <div> <span>A code has been sent to</span> <small>*******was4@gmail.com</small> </div>
                        <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                            <input className={"form-control mt-2 mb-2"} type="text" onChange={(e) => setOtp(e.target.value)}/>
                        </div>
                        <div class="mt-4">
                            <button class="btn btn-danger px-4 validate" onClick={() => handleOtp()} >Validate</button>
                        </div>
                    </div>
                    <div class="card-2">
                        <div class="content d-flex justify-content-center align-items-center"> 
                            <span>Didn't get the code</span>  &nbsp;
                            <Button value= {localStorage.getItem('email', email)} class="text-decoration-none ms-3" onClick={() => handleresentotp(email)}>  Resend</Button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Otp
