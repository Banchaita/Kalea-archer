import React, { useState } from 'react'
import { useSelector } from "react-redux"
import loader from '../../assets/img/loader.gif'
import { showLoaderAction } from '../../actions/loader'


const Loader = () => {

    const setLoader = useSelector((state) => state.loader.loaderDisplay)

    return (
        <>
            {setLoader ?
                <div style={style.loader}>
                    <img className="" src={loader} />
                </div>
                : null
            }
        </>
    );
}

const style = {
    loader: {
        position: 'absolute',
        zIndex: 9999999,
        left: 0,
        top: 0,
        width: '100%',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: 'white'
    }
}

export default Loader;