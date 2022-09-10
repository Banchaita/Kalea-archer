import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "antd"
import toast from "../../Components/common/toast"
import { ressetPassword } from '../../actions/auth'
import './login.css'

const Resetpassword = () => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [comfime_password, setComfimePassword] = useState('')

    const ressetpasswordStatus = useSelector(state => state.auth.ressetpasswordStatus)

    const handleResset = () => {
        if (password == " " || !password) {
            toast.error("Please enter password")
            return false;
        }
        if (password !== comfime_password) {
            toast.error("Password & Confirm Password Should Be Same")
            return false
          }
        let data = {
            email:localStorage.getItem('email', email),
            password: password
        }
        dispatch(ressetPassword(data)) 
        toast.success("New password create successful")
        history.push('/')  
    }

    useEffect (()=>{
        if (ressetpasswordStatus) {
        }
        
    },[ressetpasswordStatus])




    return (
        <div>
            <div className="">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className=" form bg-white p-5 border rounded">
                                <div>
                                    <h2 className=" text-center m-3 title" >Reset Password</h2>
                                    <input className="form-control" type="email" onChange={(e) => setEmail(e.target.value)} value={localStorage.getItem('email', email)} placeholder="Email" hidden />
                                    <input className="form-control" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                    <input className="form-control" type="password" onChange={(e) => setComfimePassword(e.target.value)} placeholder="Comfime Password" />
                                    <Button type={"primary"} className="submit-btn btn-block" onClick={() => handleResset()}> Reset Password</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resetpassword
