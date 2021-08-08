import React, { useEffect, useState } from 'react';
import EnquiriesCard from "./EnquiriesCard.js"
// import PostCard from './ModelForm.js'
import './style.scss'
import ModelForm from './ModelForm.js'
import { api } from '../../../common/service-config.js'
import axios from 'axios'
import Notifications, { notify } from 'react-notify-toast';


const Weaving = () => {
    const [ids, setId] = useState(true)
    const [form, setForm] = useState(false)
    const token = localStorage.getItem('user-token');
    const [t1, setTitle] = useState("");
    const [enquiry, setEnquiry] = useState([]);

    // if (form === true) {
    //     <ModelForm />
    // }
    // const id = () => {
    //     setId(false);
    // }
    useEffect(() => {
        apiCall();
    }
        , [])
    const apiCall = async () => {

        let routeName = window.location.pathname.replace(/\//g, '');
        let title;

        var flag;

        switch (routeName) {
            case 'demostar-admin-freereacttemplatedemo_1previewWeaving': {
                title = 'Weaving Enquiries And Responses';
                flag = "viewing_response/recent";
                break;
            }
            case 'demostar-admin-freereacttemplatedemo_1previewSizing': {
                title = 'Sizzing Enquiries And Responses';
                flag = "sizing/recent";
                break;
            }
            default: {
                title = 'Weaving Enquiries And Responses';
                flag = 'viewing_response';
            }
        }
        setTitle(title);


        const res = await api().get(`/api/${flag}`)
        setEnquiry(res.data.data)
    }


    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]



    return (
        <div>
            <div className="page-header">
                <h3 className="mb-0 font-weight-semibold">{t1}</h3>
                {/* <PostCard /> */}
                <ModelForm enquiry={enquiry} />
            </div>

            <div className='enquiry-selection mb-2'>
                <div>
                    <h4 className='title-1'>Enquiry Selection</h4>
                </div>
                <div className='selection'>
                    {enquiry.map((e) => (
                        <button type="button" key={e} onClick={e => console.log(e.target.value)} className="btn btn-s btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                            <span className=''>
                                {e.quality}
                            </span>
                            <i className='mdi mdi-information ml-3 float-right'></i>
                        </button>
                    ))}
                </div>
                <hr />
            </div>
            <div className='RecivedEnquiry row'>
                <div className='page-header text-muted  '>
                    <h4 className='title-1 ml-3'> Recived Enquiries For
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
        </div >
    )
}

export default Weaving;