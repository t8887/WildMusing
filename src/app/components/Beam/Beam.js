import React, { useEffect, useState } from 'react';
// import InwardTable from './InwardTable'
import './style.scss'

import { api } from '../../../common/service-config.js'

const Weaving = () => {



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

                </div>


            </div>
        </div>
    )
}


export default Weaving;