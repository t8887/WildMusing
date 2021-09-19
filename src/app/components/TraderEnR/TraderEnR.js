import React, { useEffect, useState } from 'react';
import './style.scss'
import EnquiriesCard from "./EnquiriesCard.js"
import StatusTable from './StatusTable'
import StatusTable2 from './StatusTable2'
import Popup from "./Popup"
import axios from "axios"
import { api } from '../../../common/service-config.js'

export default function Production() {
    const [weaver, setWeaver] = useState(true);
    const [recent, setRecent] = useState([])


    useEffect(async () => {

        const data = await api().get("/api/viewing_response/recent")
        console.log('data: ', data.data.data);
        setRecent(data.data.data)
    }, [])



    const a = [1, 2, 3, 4];

    return (
        <div>
            <h4 className='title1'>Trading Enquries And Responses</h4>
            <div className='row row1'>
                <div className='col-6'>
                    <button onClick={(e) => setWeaver(true)} className='bt1 btn btn-outline-primary btn-rounded '>Trader Enquiry</button>
                    <button onClick={(e) => setWeaver(false)} className='bt1 btn btn-outline-primary btn-rounded'>Status Of Response</button>
                </div>
                <div className='col-6 posi'>
                    <input className='search1 float-right input-field' placeholder='Search here...' ></input>
                </div>

            </div>
            <hr />
            {weaver == true ?
                (
                    <div>
                        <div className='row mb-3'>
                            <div className='enquiry-selection mb-2'>
                                <div className='selection ml-4 row'>
                                    {recent.map((e) => (
                                        <button type="button" key={e} onClick={e => console.log(e.target.value)} className="bt1 d-flex btn btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                                            <span className='font'>
                                                {e.quality}
                                            </span>
                                            <Popup
                                                id={e.id}
                                            />
                                            {/* <i className='mdi mdi-information pl-3 float-right'></i> */}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='RecivedEnquiry row'>
                            <div className='page-header text-muted header'>
                                <h4 className='title-1 m-3' >
                                    <span className='m-2'>
                                        Recived Enquiries For
                                    </span>
                                    <button type="button" className="btn btn-rounded ml-3 shadow " style={{ backgroundColor: "#0064d0", color: 'white' }}>"63""/128*72/40*40  </button>
                                </h4>
                                <div className='float-right d-flex'>
                                    <div className='m-2 d-flex'>
                                        <i className="mdi mdi-checkbox-blank-circle mr-1" style={{ color: "lightgreen" }}></i>
                                        <p style={{ fontSize: '14px' }}>Complete : 5</p>
                                    </div>
                                    <div className='m-2 d-flex'>
                                        <i className="mdi mdi-minus-circle mr-1" style={{ color: "slateblue" }}></i>
                                        <p style={{ fontSize: '14px' }}>Partial : 8</p>
                                    </div>
                                </div>
                            </div>
                            {a.map((e) => (
                                <div key={e} className='col-8 col-lg-4 col-md-5 col-sm-12 mt-3' >
                                    <EnquiriesCard e={e} />
                                </div>
                            ))}
                        </div>
                    </div>
                )
                :
                (
                    <div className=''>
                        <div className=''>
                            <div className='title-1 m-4'>Raise a dispatch Request</div>
                            <StatusTable />
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='title-1 m-4'>Recent Accepted Responses</div>
                                <StatusTable2
                                    table="1" />
                            </div>
                            <div className='col-6'>
                                <div className='title-1 m-4'>Recent Rejected Responses</div>
                                <StatusTable2
                                    table="2" />
                            </div>
                        </div>

                    </div>
                )
            }
        </div>
    );
}
