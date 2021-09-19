import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { api } from '../../../common/service-config.js'
import Notifications, { notify } from 'react-notify-toast';


import TextField from '@material-ui/core/TextField'
import './style.scss'



const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '750px',
        height: '620px',
        border: '1px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 6),
        borderRadius: '20px',
        padding: "30px"
    },

    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    cal: {
        width: "100%",
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 380,
    },
    title: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
        paddingBottom: '30px'
    },
    formControl: {
        width: '100%',
        padding: "0px",
        margin: "0px"
    },
    head: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
    },
}));

export default function Popup({ id, card, enquiry, a }) {

    const [data, setData] = useState()

    useEffect(async () => {
        const data = await api().get(`/api/viewing_response/${id}`)
        console.log('data: ', data);
        setData(data.data.data)
    }, [])


    const [open, setOpen] = useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            {card === "card" ?
                (
                    <button href="#" onClick={handleOpen} className="btn btn-outline-success m-1" style={{ borderRadius: '10px' }}><i className='mdi mdi-check' />Respond</button>
                ) :
                <i onClick={handleOpen} className='mdi mdi-information pl-3 float-right'></i>
            }


            {/* <button onClick={handleOpen} */}

            {/* // className='btn btn2 btn-primary btn-rounded p-1 btn-icon-text'> */}
            {/* Weft Gate Creation */}
            {/* </button> */}

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >

                <Fade in={open}>
                    <div className={classes.paper}>
                        <Notifications />
                        <div className='d-flex justify-content-between'>
                            <span className='popHeader'>Enquiry Details</span>
                        </div>
                        <hr />
                        <div className='row border-between'>
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <span className='col-6 body'>Name of Weaver:</span>
                                        <span className='col-6 text2'>Sam P</span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Quality</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-8'>Meter</div>
                                        <div className='mr-3'>
                                            <input className="radio form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                // onChange={e => setRadio(e.target.value)}
                                                id="exampleRadios1"
                                                value="role"
                                            />
                                            <label className="radio1 form-check-label" >
                                                Roll 1
                                            </label>
                                        </div>
                                        <div className=''>
                                            <input className="radio form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                // onChange={e => setRadio(e.target.value)}
                                                id="exampleRadios1"
                                                value="role"
                                            />
                                            <label className="radio1 form-check-label" >
                                                Roll 2
                                            </label>
                                        </div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>

                                    <div className=''>Sizing</div>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                        // value={sizers}
                                        // onChange={handleSizer}
                                        // label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                            <MenuItem>4</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-8'>Negotiable job Rate</div>
                                        <div className='mr-2'>
                                            <input className="radio form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                // onChange={e => setRadio(e.target.value)}
                                                id="exampleRadios1"
                                                value="role"
                                            />
                                            <label className="radio1 form-check-label" >
                                                Market
                                            </label>
                                        </div>
                                        <div className=''>
                                            <input className="radio form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                                // onChange={e => setRadio(e.target.value)}
                                                id="exampleRadios1"
                                                value="role"
                                            />
                                            <label className="radio1 form-check-label" >
                                                Custom
                                            </label>
                                        </div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='col-12 row mb-3'>

                                <div className='col-6'>

                                    <div className=''>No. Running Machines desired</div>
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            id="demo-simple-select-outlined"
                                        // value={sizers}
                                        // onChange={handleSizer}
                                        // label="Age"
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem>1</MenuItem>
                                            <MenuItem>2</MenuItem>
                                            <MenuItem>3</MenuItem>
                                            <MenuItem>4</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Credit Period</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                            </div>
                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Cash Discount</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Delivery Date</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>
                            </div>

                            <div className='col-12 row mb-3'>
                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Additional Remark</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>

                                <div className='col-6'>
                                    <div className='row'>
                                        <div className='col-12'>Additional Paper</div>
                                    </div>
                                    <input type="text"
                                        className="input form-control rounded"
                                        // value={quality}
                                        // onChange={handleQuality}
                                        placeholder=""
                                        aria-label="Meter"
                                        aria-describedby="basic-addon1" />
                                </div>
                            </div>


                            <div className='m-3'>
                                <button className='btn btn-primary ' style={{ borderRadius: "15px", backgroundColor: "#0064d0", color: 'white' }}>
                                    <i className='float-left mr-2 mdi mdi-send' />Submit</button>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
