import React, { useEffect, useState } from 'react'
import { Modal,Alert  } from 'antd';
import toast from "../Components/common/toast"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { showAddModalAction } from '../actions/modals'
import { AddAdvertisementAction, getAdvertisementData } from '../actions/advertisement'
import { getDesignerData } from '../actions/designer'


const AddAdvertisment = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [duration, setDuration] = useState('')
    const [start_date, setStartDte] = useState('')
    const [end_date, setEndDate] = useState('')
    const [addimage, setAddImage] = useState('')
    const [email, setEmail] = useState('')

    let showAddModel = useSelector((state) => state.modals.showAddModel)
    const designData = useSelector(state => state.designer.designer_data)
    const advertisementData = useSelector(state => state.advertisement.advertisement_data)





    useEffect(() => {
        dispatch(getDesignerData())
        
    },[])



    useEffect(() => {
        if (designData) {
            designData.map((key) => {
                if (key._id == designData) {
                    setEmail(key.emial)
                }
            })
        }

    },[designData])


    const AdvertismentAdd = () => {
        let data = {
            duration: duration,
            start_date: start_date,
            end_date: end_date,
            referred_by: email,
            advertisement_pic: addimage
        }
        toast.success(' Successful')
        dispatch(AddAdvertisementAction(data))
        if(data){
            // alert('hhhhhh')
            history.push('/advertisement')
            dispatch(getAdvertisementData(data))
        }
    }


    return (
        <>
        <Modal
            title={'Add New Advertisment'}
            visible={showAddModel}
            onOk={() => AdvertismentAdd()}
            onCancel={() => dispatch(showAddModalAction(false))}

        >
            <div className="row">
                <div className="col-12 form-group">
                    <label>Select Image</label>
                </div>
                <div className="col-6 form-group mb-3">
                    <label>
                        <input type="file" accept="image/*" multiple onChange={(event) => setAddImage(event.target.files[0])} placeholder='enter duration' className="form-control" style={{ width: '29rem' }} />

                    </label>
                </div>
                <div className="col-12 form-group mb-2">
                    <label>Duration</label>
                    <select placeholder='enter duration' className='form-control' onChange={(e) => setDuration(e.target.value)}>
                        <option value="">Select</option>
                        <option value="Duration">Duration</option>
                        <option value="LifeTime">Life Time</option>
                    </select>
                </div>
                {duration == "Duration" &&
                    <div className="col-12 form-group">
                        <label>Start Date</label>
                        <input type="date" className={"form-control"} placeholder={"Enter start date"} onChange={(e) => setStartDte(e.target.value)} />
                        <label>End Date</label>
                        <input type="date" className={"form-control"} placeholder={"Enter end date"} onChange={(e) => setEndDate(e.target.value)} />
                    </div>
                }
                <div className="col-12 form-group ">
                    <label>Advertise Designer</label>
                    <select placeholder='enter designer name' className='form-control' onChange={(e) => setEmail(e.target.value)}>
                        {designData && designData.map(key => (
                            <option value='select'>Select</option>,
                            <option value={key.name}>{key.email}</option>
                        ))}
                    </select>
                </div>
            </div>
        </Modal>
        </>
    )
}

export default AddAdvertisment
