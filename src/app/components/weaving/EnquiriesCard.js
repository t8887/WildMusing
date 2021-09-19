import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SuccessPop from '../Hooks/SuccessPop'
// E:\x2\x2\src\app\components\Hooks\SuccessPop.js
// E:\x2\x2\src\app\components\weaving\EnquiriesCard.js
import './style.scss'


// Material UI styles
const useStyles = makeStyles((theme) => ({
    root: {
        fontFamialy: 'Roboto',
        fontColor: '#0064D0',
        fontSize: '15px',
        fontWeight: 500,
        maxWidth: 450,
        borderRadius: '20px',
        marginBottom: '1rem',
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    typo: {
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 500,
        letterSpacing: '0.0275em',
        color: '#106dd2'
    },
    cardcontent: {
        fontSize: '1rem',
        fontFamily: "Roboto",
        fontWeight: 500,
        padding: '30px',
        marginBottom: '-1.5rem',

    },
    cardcontent1: {
        marginTop: '-1.5rem',
        padding: '30px'
    },
    badge: {
        display: 'inline',
        zIndex: 999
    },
    Actions: {
        // height: "100%"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


export default function EnquiriesCard(e) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Badge color='primary' className={classes.badge} badgeContent={e.e} overlap='circle'>
            <Card className={classes.root} >
                <CardContent className={classes.cardcontent}>
                    <div className='row'>
                        <h6 className='text1 col-6' >Name of Weaver :</h6>
                        <h6 className='text3 col-6'>Sam P</h6>
                    </div>
                    <div className='row'>
                        <h6 className='text1 col-6'>Meter  :</h6>
                        <h6 className='text2 col-6'>5000</h6>
                    </div>
                    <div className='row'>
                        <h6 className='text1 col-6'>Machine :</h6>
                        <h6 className='text2 col-6'>5000</h6>
                    </div>
                    <div className='row'>
                        <h6 className='text1 col-6'> Job Rate :</h6>
                        <h6 className='text3 col-6'>0.14</h6>
                    </div>
                </CardContent>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={classes.cardcontent1}>
                        <div className='row'>
                            <h6 className='text1 col-6'>Name of Weaver :</h6>
                            <h6 className='text2 col-6'>Sam P</h6>
                        </div>
                        <div className='row'>
                            <h6 className='text1 col-6'>Meter  :</h6>
                            <h6 className='text2 col-6'>5000</h6>
                        </div>
                        <div className='row'>
                            <h6 className='text1 col-6'>Machine :</h6>
                            <h6 className='text2 col-6'>5000</h6>
                        </div>
                        <div className='row'>
                            <h6 className='text1 col-6'> Job Rate :</h6>
                            <h6 className='text2 col-6'>0.14</h6>
                        </div>
                    </CardContent>
                </Collapse>

                <CardActions disableSpacing className={classes.Actions}>
                    {/* 
                    <div>
                        <i className="mdi mdi-checkbox-blank-circle" style={{ color: "#34E15A", marginLeft: '5px' }} />
                        <span style={{ marginTop: '4px', marginLeft: '5px', fontSize: '10px' }}>Complete</span>
                    </div> */}

                    <div className='d-flex'>
                        <i className="mdi mdi-minus-circle " style={{ paddingLeft: "12px", color: "#5156BE", marginLeft: '5px' }} />
                        {/* <i className="mdi mdi-checkbox-blank-circle" style={{ color: "#34E15A", marginLeft: '5px' }} /> */}
                        <span style={{ paddingLeft: "12px", marginLeft: '5px', fontSize: '10px' }}>Partial Complete</span>
                    </div>

                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>

                    <div className='float-center d-flex'>
                        {/* <button href="#" className="btn btn-outline-danger m-1" style={{ borderRadius: '10px' }}><i className='mdi mdi-close' />Reject</button> */}
                        {/* <button href="#" className="btn btn-outline-success m-1" style={{ borderRadius: '10px' }}><i className='mdi mdi-check' />Accept</button> */}
                        <SuccessPop
                            Reject="Reject"
                        />
                        <SuccessPop
                            Success="Success"
                        />
                    </div>
                </CardActions>

            </Card>
        </Badge >

    );
}
