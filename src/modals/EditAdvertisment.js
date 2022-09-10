import React,{ useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal} from 'antd';
import toast from "../Components/common/toast"
import { fileUrl } from '../constants/const';
import{showEidtModalAction} from '../actions/modals'
import{EditAdvertisemetAction,getAdvertisementData} from '../actions/advertisement'

const EditAdvertisment = () => {
    const dispatch = useDispatch()
    const [duration, setDuration] = useState('')
    const [start_date, setStartDate] = useState('')
    const [end_date, setEndDate] = useState('')
    const [referred_by, setReferred_by] = useState('')
    const [addimage, setAddImage] = useState('')
    const [advertisement_pic, setAdvertisement_pic] = useState('')



    let showEditMode = useSelector((state) => state.modals.showEditMode)
    const active_advertisement = useSelector(state => state.advertisement.active_advertisement)
    const advertisementData = useSelector(state => state.advertisement.advertisement_data)

    // console.log('+++++++++++++++++++',advertisementData)

    useEffect(() => {
        if (active_advertisement) {
            advertisementData.map((key) => {
                if(key._id == advertisementData){
                    console.log(key)
                    setDuration(key.duration)
                    setStartDate(key.start_date)
                    setEndDate(key.end_date)
                    setReferred_by(key.referred_by)
                    setAdvertisement_pic(key.advertisement_pic)
                }
            })
        }

    },[])
    useEffect(() => {
        if (active_advertisement) {
            advertisementData.map((key) => {
                if(key._id == active_advertisement){
                    // console.log(key)
                    setDuration(key.duration)
                    setStartDate(key.start_date)
                    setEndDate(key.end_date)
                    setReferred_by(key.referred_by)
                    setAdvertisement_pic(key.advertisement_pic)

                }
            })
           
        }
    },[active_advertisement])


    const Advertismentedit = () => {
        // alert('ggg')
        let data = {
            advertisement_id:active_advertisement,
            duration:duration,
            start_date:start_date,
            end_date:end_date,
            referred_by:referred_by,
            advertisement_pic: addimage

        }
        toast.success('Edit Successful')
        dispatch(EditAdvertisemetAction(data))
        if(data){
           dispatch(getAdvertisementData(data))
        }
    }

    return (
        <>
          <Modal
            title={'Add New Collection'}
            visible={showEditMode}
            onOk={() => Advertismentedit()}
            onCancel={() => dispatch(showEidtModalAction(false))}

        >
            <div className="row">
                <div className="col-12 form-group">
                
                 <img src={`${fileUrl}${advertisement_pic}`} style={{ width: '20%', marginLeft: '3rem' }}></img><br/>

                    <label>Select Image</label>
                </div>
                <div className="col-6 form-group mb-3">
                    <label>
                        <input type="file"  accept="image/*" multiple onChange={(event) => setAddImage(event.target.files[0])}  className="form-control" style={{ width: '29rem' }} />

                    </label>
                </div>
                <div className="col-12 form-group mb-2">
                    <label>Duration</label>
                    <select placeholder='enter duration' value={duration} className='form-control' onChange={(e) => setDuration(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Duration">Duration</option>
                        <option value="LifeTime">Life Time</option>
                    </select>
                </div>
                {duration == "Duration" && 
                    <div className="col-12 form-group">
                        <label>Start Date</label>
                        <input type="date" className={"form-control"}  value={start_date} placeholder={"Enter start date"} onChange={(e) => setStartDate(e.target.value)} />
                        <label>End Date</label>
                        <input type="date" className={"form-control"}  value={end_date} placeholder={"Enter end date"} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                }
                <div className="col-12 form-group ">
                    <label>Advertise Designer</label>
                    <select placeholder='enter designer name' value={referred_by} className='form-control' onChange={(e) => setReferred_by(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Admin">admin@gmail.com</option>
                        <option value="Sam">sam@gmail.com</option>
                        <option value="Bela">bela@gmail.com</option>
                    </select>
                </div>
            </div>
        </Modal>

            
        </>
    )
}

export default EditAdvertisment
