import React ,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from 'antd';
import{showDeleteModalAction} from '../actions/modals'
import{DeleteAdvertisemetAction,getAdvertisementData} from '../actions/advertisement'





const DeleteModal = () => {
    const dispatch = useDispatch()
    

    let showaDeleteModal = useSelector((state) => state.modals.showaDeleteModal)
    const active_advertisement = useSelector(state => state.advertisement.active_advertisement)


    const Advertismentdelete =()=>{
        let data={
            advertisement_id:active_advertisement
        }
        dispatch(DeleteAdvertisemetAction(data)) 
        dispatch(getAdvertisementData())
    }


    return (
        <Modal
            title={'Delete  Permission'}
            visible={showaDeleteModal}
            onOk={() => Advertismentdelete()}
            onCancel={() => dispatch(showDeleteModalAction(false))}
        >
            <p>Would you like to delete this advertisement?</p>
        </Modal>
    )

}

export default DeleteModal