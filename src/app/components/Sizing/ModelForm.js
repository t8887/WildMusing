import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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

export default function TransitionsModal() {
    const classes = useStyles();
    const [age, setAge] = useState('');
    const [sizers, setSizers] = useState('');
    const [loom, setLoom] = useState('');
    const [machine, setMachine] = useState('');
    const [prod, setProd] = useState('');

    const [startDate, setstartDate] = useState(null);
    const [open, setOpen] = useState(false);


    const handleChange = date => {
        setstartDate(date)
    };



    const a = [1, 2, 3, 4, 5, 6]
    console.log(startDate);



    // all Handlers
    const handleSizer = (event) => {
        setSizers(event.target.value);
        console.log('Sizers: ', event.target.value);
    };
    const handleLoom = (event) => {
        setLoom(event.target.value);
    }
    const handleMachine = (event) => {
        setMachine(event.target.value);
    }
    const handleProd = (event) => {
        setProd(event.target.value);
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
                        <h4 className={classes.title}>Enquiry Details <i onClick={handleClose} className='mdi mdi-close float-right' /></h4>
                        <div className='row border-between'>
                            <div className='col-8'>
                                <div>
                                    <div className='primary'>Quality</div>
                                    <button type="button" className="btn btn-rounded m-3 ml-0 shadow " style={{ backgroundColor: "#0064d0", color: 'white' }}>"63""/128*72/40*40  </button>
                                </div>

                                {/* 1st row */}
                                <div className='row mb-4'>
                                    <div className='col-6'>
                                        <div className='row'>
                                            <div className='col-6'>Meter</div>
                                            <div className='form-check mr-3'>
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <label className="form-check-label" >
                                                    Roll 1
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <label className="form-check-label" >
                                                    Roll 2
                                                </label>
                                            </div>
                                        </div>
                                        <input type="text" className="input form-control rounded" placeholder="Meter" aria-label="Meter" aria-describedby="basic-addon1" />
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
                                                <MenuItem value={10}>Patil Sizers</MenuItem>
                                                <MenuItem value={20}>Gaikwad Sizers</MenuItem>
                                                <MenuItem value={30}>Naik Sizers</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                                {/* 2nd row */}
                                <div className='row mb-4 '>
                                    <div className='col-6'>
                                        <div className='row loom'>
                                            <div className='col=6 mb-3'>Type of loom desired</div>
                                            <FormControl variant="outlined" className={classes.formControl}>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={loom}
                                                    onChange={handleLoom}

                                                    label="Machines"
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    <MenuItem value={10}>1 loom</MenuItem>
                                                    <MenuItem value={20}>2 loom</MenuItem>
                                                    <MenuItem value={30}>3 loom</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6 mb-3'>No. of Running Machine desired</div>
                                        <FormControl variant="outlined" className={classes.formControl}>
                                            <Select
                                                labelId="demo-simple-select-outlined-label"
                                                id="demo-simple-select-outlined"
                                                value={machine}
                                                onChange={handleMachine}

                                                label="Machines"
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>10</MenuItem>
                                                <MenuItem value={20}>24</MenuItem>
                                                <MenuItem value={30}>26</MenuItem>
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
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <label className="form-check-label" >
                                                    Roll 1
                                                </label>
                                            </div>
                                            <div className='form-check'>
                                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                                <label className="form-check-label" >
                                                    Roll 2
                                                </label>
                                            </div>
                                        </div>
                                        <input type="text" className="input form-control rounded" placeholder="ipsum" aria-label="Username" aria-describedby="basic-addon1" />
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
                                        <input type="text" className="form-control rounded" placeholder="paper" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                    <div className='col-6'>
                                        <div className='col=6'>Additional remark</div>
                                        <input type="text" className="input1 form-control rounded" placeholder="remark" aria-label="Username" aria-describedby="basic-addon1" />
                                    </div>
                                </div>
                                <div>
                                    <button className='btn btn-primary ' onClick={handleOpen} style={{ backgroundColor: "#0064d0", color: 'white' }}>
                                        <i className='float-left mr-2 mdi mdi-send' />Submit</button>

                                </div>
                            </div>
                            <div className='col-4'>
                                <div>
                                    <div className='ml-3'>Recent Enquiries <i className='float-right mdi mdi-refresh' /></div>
                                    <hr className='ml-3' />
                                    {a.map((e) => (
                                        <button type="button" key={e.e} className="btn btn-r btn-outline-primary btn-rounded m-2 pr-3 pl-3 shadow">
                                            <span className=''>
                                                "63""/128*72/40*40
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
