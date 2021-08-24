import React, { useEffect, useState } from 'react';
import InwardTable from './InwardTable'
import './style.scss'
import { api } from '../../../common/service-config.js'
import axios from 'axios';


const Weaving = () => {

    useEffect(() => {
        const payload = {
            _teamId: "5f46590a1662d506821e7c96"
        }
        const res = axios.post("https://clbez4yao8.execute-api.us-east-1.amazonaws.com/dev/api/get-bankslotheaderfooter", JSON.stringify(payload))
        console.log('res: ', res);
    }, [])


    return (
        <div>
            <h4 className='title1'>Beam Inward and Beam Status</h4>

            <div className='enquiry-selection mb-2'>
                <div className='row row1'>
                    <div className='col-6'>
                        <button className='bt1 btn btn-outline-primary btn-rounded'>Sizing Status and Beam Inward</button>
                        <button className='bt1 btn btn-outline-primary btn-rounded'>Beam Status</button>
                    </div>
                    <div className='col-6 posi'>
                        <input className='search1 float-right input-field' placeholder='Search here...' ></input>
                    </div>
                    <hr className='m-3' />

                </div>
                <div>
                    <InwardTable />
                </div>
            </div>
        </div>
    )
}


export default Weaving;