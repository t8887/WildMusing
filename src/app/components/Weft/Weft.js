import React, { useState } from 'react';
import WeftTable from './WeftTable'
import RecentGatepassTable from './RecentGatepassTable'
import './style.scss'

export default function Weft() {
    const [weaver, setWeaver] = useState(true);

    return (
        <div>
            <h4 className='title1'>Weft gatepass</h4>
            <div className='row row1'>
                <div className='col-6'>
                    <button onClick={(e) => setWeaver(true)} className='bt1 btn btn-outline-primary btn-rounded'>Weaver</button>
                    <button onClick={(e) => setWeaver(false)} className='bt1 btn btn-outline-primary btn-rounded'>Recent weft gatepass</button>
                </div>
                <div className='col-6 posi'>
                    {/* <i className='float-right mdi mdi-file-find' /> */}
                    <input className='search1 float-right input-field' placeholder='Search here...' ></input>
                </div>

            </div>
            <hr />
            {weaver == true ?
                (<WeftTable />)
                :
                (<RecentGatepassTable />)
            }
        </div>
    );
}
