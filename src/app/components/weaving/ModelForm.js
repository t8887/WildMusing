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
import { useHistory } from 'react-router-dom';

import help from './helper.js'

import { DateTimePicker } from 'react-widgets';
import './style.scss'
import TextField from '@material-ui/core/TextField'
const dateFormat = 'DD/MM/YYYY';




const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        width: '1286px',
        height: '750px',
        border: '1px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(6, 6, 6),
        borderRadius: '20px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
    },
    head: {
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: "0.0275em",
        color: "#106dd2",
    },
}));

export default function TransitionsModal({ enquiry }) {

    const history = useHistory();

    const classes = useStyles();
    const [sizers, setSizers] = useState('');
    const [loom, setLoom] = useState('');
    const [machine, setMachine] = useState('');
    const [sizeDrop, setSizedrop] = useState([]);
    const [loomDrop, setLoomdrop] = useState([]);

    // input States
    const [quality, setQuality] = useState(``);
    const [meter, setMeter] = useState();
    const [rate, setRate] = useState();
    const [prodDate, setprodDate] = useState();
    const [addPaper, setAddPaper] = useState();
    const [remark, setRemark] = useState();
    const [radio, setRadio] = useState()
    const [radio2, setRadio2] = useState()

    const [open, setOpen] = useState(false);

    useEffect(() => {
        sizingDrop();
        loomsDrop();
    }, [])

    // api calls
    const postQuery = async () => {

        let routeName = window.location.pathname.replace(/\//g, '');
        let title;

        var flag;
        var flag2;

        switch (routeName) {
            case 'demostar-admin-freereacttemplatedemo_1previewWeaving': {
                title = 'Weaving Enquiries And Responses';
                flag = "viewing_response/recent";
                flag2 = "viewing_response/"

                break;
            }
            case 'demostar-admin-freereacttemplatedemo_1previewSizing': {
                title = 'Sizzing Enquiries And Responses';
                flag2 = "sizing/"
                flag = "sizing/recent";
                break;
            }
            default: {
                title = 'Weaving Enquiries And Responses';
                flag = 'viewing_response';
            }
        }
        const body = {
            quality: quality,
            meter: meter,
            meter_type: radio,
            meter_type: radio,
            sizingid: sizers,
            loomid: loom,
            no_of_machine: machine,
            rate: rate,
            rate_type: radio2,
            production_date: prodDate,
            additional_paper: addPaper,
            additional_remark: remark
        }
        const res = await api().post(`api/${flag2}`, JSON.stringify(body))

        if (res.data.success === true) {
            notify.show("Enquiry Posted", 'success');
        } else {
            notify.show("Enquiry Not Posted", 'error');
        }
    }

    const sizingDrop = async () => {
        const res = await api().get(`/api/sizing`)
        setSizedrop(res.data.data)

        if (res.data.data.message === "Invalid Token...") {
            history.push("/user-pages/login-1")
        }
    }
    const loomsDrop = async () => {
        const res = await api().get(`/api/looms`)
        setLoomdrop(res.data.data)
        if (res.data.data.message === "Invalid Token...") {
            history.push("/user-pages/login-1")
        }
    }


    const a = [1, 2, 3, 4, 5, 6]

    // all Handlers
    const handleQuality = e => {

        let str = e.target.value

        // let newFrt = str.split('')
        // console.log(newFrt)
        // newFrt.splice(0, 0, '"');
        // newFrt.splice(3, 0, '""');
        // newFrt.splice(6, 0, "");
        // newFrt.splice(8, 0, "*");
        // newFrt.splice(13, 0, "*");
        // newFrt.splice(11, 0, "/");
        // const getStr = newFrt.toString();
        // const newStr = getStr.replace(/,/g, '')
        // console.log(newStr)
        // setQuality(newStr)
        setQuality(str)
    }
    const handleChange = e => {
        setprodDate(e)
    };
    const handleSizer = (event) => {
        setSizers(event.target.value);
    };
    const handleLoom = (e) => {
        setLoom(e.target.value);
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <button className='btn btn-primary btn-rounded right' onClick={handleOpen} style={{ backgroundColor: "#0064d0", color: 'white' }}>
                <i className='mdi mdi-message-draw'></i>Post Enquiry </button>
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

                        <h4 className={classes.title}>Enquiry Details <i onClick={handleClose} className='mdi mdi-close float-right' /></h4>
                        <div className='row border-between'>

                            <div className='col-8'>
                                <div className='col-6 mr-3'>
                                    <div className='row'>
                                        <div className='col-12 mb-3'>Quality</div>
                                    </div>
                                    <input type="number" maxLength='999' className="input form-control rounded" value={quality} onChange={handleQuality} placeholder="" aria-label="Meter" aria-describedby="basic-addon1" />
                                </div>

                                {/* 1st row */}
                                <div className='row mb-4'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-6'>Meter</div>
                                            <div className='form-check mr-3'>
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    onChange={e => setRadio(e.target.value)}
                                                    id="exampleRadios1"
                                                    value="role"
                                                />
                                                <label className="form-check-label" >
                                                    Roll 1
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios"
                                                    onChange={e => setRadio(e.target.value)}
                                                    id="exampleRadios1"
                                                    value="taga"
                                                />
                                                <label className="form-check-label" >
                                                    Roll 2
                                                </label>
                                            </div>
                                        </div>
                                        <input type="text" className="input form-control rounded" value={meter} onChange={e => setMeter(e.target.value)} placeholder="Meter" aria-label="Meter" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>Sizing</div>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={sizers}
                                                onChange={handleSizer}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {sizeDrop.map((e) => (
                                                    <MenuItem value={e.id}>{e.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                {/* 2nd row */}
                                <div className='row mb-4'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-12 mb-3'>No. of Running Machine desired</div>
                                        </div>
                                        <input type="text" className="input form-control rounded" onChange={e => setMachine(e.target.value)} placeholder="" aria-label="Meter" aria-describedby="basic-addon1" />
                                    </div>

                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>Type of loom desired</div>

                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={loom}
                                                onChange={handleLoom}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                {loomDrop.map((e) => (
                                                    <MenuItem value={e.id}>{e.name}</MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>

                                </div>

                                {/* 3rd row */}
                                <div className='row mb-4'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-6'>Negotiable job rate</div>
                                            <div className='form-check mr-3'>
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios2"
                                                    onChange={e => setRadio2(e.target.value)}
                                                    id="exampleRadios2"
                                                    value="market"
                                                />
                                                <label className="form-check-label" >
                                                    Roll 1
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input className="form-check-input"
                                                    type="radio"
                                                    name="exampleRadios2"
                                                    onChange={e => setRadio2(e.target.value)}
                                                    id="exampleRadios2"
                                                    value="custom"
                                                />
                                                <label className="form-check-label" >
                                                    Roll 2
                                                </label>
                                            </div>
                                        </div>
                                        <input type="text"
                                            className="input form-control rounded"
                                            placeholder="ipsum"
                                            onChange={e => setRate(e.target.value)}
                                            aria-label="Username"
                                            aria-describedby="basic-addon1" />
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>Production schedule</div>
                                        <div>

                                            <form className={classes.container} noValidate>
                                                <TextField
                                                    id="date"
                                                    type="date"
                                                    format={dateFormat}
                                                    className={classes.textField}
                                                    onChange={e => handleChange(e.target.value)}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                />
                                            </form>

                                        </div>
                                    </div>

                                </div>
                                {/* 4th row */}
                                <div className='row mb-4'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-6'>Additional paper</div>
                                        </div>
                                        <input type="text" className="form-control rounded" placeholder="paper" onChange={e => setAddPaper(e.target.value)} aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6'>Additional remark</div>
                                        <input type="text" className="input1 form-control rounded" onChange={e => setRemark(e.target.value)} placeholder="remark" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary ' onClick={postQuery} style={{ backgroundColor: "#0064d0", color: 'white' }}>
                                        <i className='float-left mr-2 mdi mdi-send' />Submit</button>

                                </div>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <div className='ml-3'>Recent Enquiries <i className='float-right mdi mdi-refresh' /></div>
                                    <hr className='ml-3' />
                                    {enquiry.map((e) => (
                                        <button type="button" key={e.e} className="btn btn-r btn-outline-primary btn-rounded m-2 pr-3 pl-3 shadow">
                                            <span className=''>
                                                {e.quality}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                                <div className='mt-5'>
                                    <div className='ml-3' >Fevourite Enquiries <i className='float-right mdi mdi-heart' /></div>
                                    <hr className='ml-3' />
                                    {a.map((e) => (
                                        <button type="button" key={e.e} className="btn btn-r btn-outline-primary btn-rounded mr-3 mt-3 pr-3 pl-3 shadow">
                                            <span className=''>
                                                "63""/128*72/40*40
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
