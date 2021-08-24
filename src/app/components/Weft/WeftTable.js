import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './style.scss'
import PopUp from "./Popup"
const useRowStyles = makeStyles({
    root: {

    },
    head: {
        background: '#0064d0'
    },
    table: {
        boxShadow: "2px 2px 2px",
        background: '#0064d0',
        color: '#ffffff',
        fontColor: 'black',
    },
    mt: {
        // color: '#0064d0',
        fontFamily: "Roboto",
        fontWeight: "500",
    },
    th: {
        // background: '#ffffff',
        color: "#0064D0 !important"
        // color: '#142045',
    },
    tr: {
        color: "#0064D0 !important",
    }
});


const data = [
    {
        Weaver: "Parag P",
        Count: "60CBD",
        WeftRequired: "4450",
        WeftIssued: "2000",
        BalanceWeft: "2450",
        LastWeftIssueDate: "01/07/2021",
        NextIssueDate: "01/07/2021",
        Status: "Regular",
        tableData: [{
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }]
    },
    {
        Weaver: "Parag P",
        Count: "60CBD",
        WeftRequired: "4450",
        WeftIssued: "2000",
        BalanceWeft: "2450",
        LastWeftIssueDate: "01/07/2021",
        NextIssueDate: "01/07/2021",
        Status: "Regular",
        tableData: [{
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }]
    }, {
        Weaver: "Parag P",
        Count: "60CBD",
        WeftRequired: "4450",
        WeftIssued: "2000",
        BalanceWeft: "2450",
        LastWeftIssueDate: "01/07/2021",
        NextIssueDate: "01/07/2021",
        Status: "Urgant",
        tableData: [{
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }, {
            Quality: "1",
            Count: "60CBD",
            WeftRequired: "2000",
            WeftIssued: "1000",
            BalanceWeft: "1000",
            LastWeftIssueDate: "01/07/2021",
            NextIssueDate: "01/07/2021",
        }]
    }
]


function Row(props) {
    const { e } = props;
    console.log('data1: ', e);
    const [open, setOpen] = useState(false);

    // for btn in two tables
    const a = 1;

    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow key={e.name} className={classes.root} aria-label="expand row" onClick={() => setOpen(!open)}>
                {/* <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell> */}
                <TableCell className={classes.mt} align='center'>{e.Weaver}</TableCell>
                <TableCell className={classes.mt} align='center'>{e.Count}</TableCell>
                <TableCell className={classes.mt} align='center'>{e.WeftRequired}</TableCell>
                <TableCell className={classes.mt} align='center'>{e.BalanceWeft}</TableCell>
                <TableCell className={classes.mt} align='center'>{e.LastWeftIssueDate}</TableCell>
                <TableCell className={classes.mt} align='center'>{e.NextIssueDate}</TableCell>
                <TableCell className={classes.mt} align='center'>{e.Status}</TableCell>
                {e.Status === "Regular" ? (
                    <TableCell align='center'>
                        <span className='badge' style={{ color: '#34e15a', border: '1px solid #34e15a' }}>
                            <i className="mdi mdi-check-circle" />
                            {e.Status}
                        </span>
                    </TableCell>
                ) : (
                    <TableCell align='center'>
                        <span className='badge' style={{ color: 'red', border: '1px solid red' }}>
                            <i className="mdi mdi-check-circle" />
                            {e.Status}
                        </span>
                    </TableCell>
                )}
                <TableCell align='center'>
                    <PopUp
                        a={a}
                    />

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ padding: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead >
                                    <TableRow className={classes.th}>
                                        <TableCell className={classes.tr}>Quality</TableCell>
                                        <TableCell className={classes.tr}>Count</TableCell>
                                        <TableCell className={classes.tr}>Weft required</TableCell>
                                        <TableCell className={classes.tr}>Weft issued</TableCell>
                                        <TableCell className={classes.tr}>Balance weft</TableCell>
                                        <TableCell className={classes.tr}>Last weft issue date</TableCell>
                                        <TableCell className={classes.tr}>Next weft issue date</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {e.tableData.map((e) => (
                                        <TableRow key={e.date} >
                                            <TableCell>{e.Count}</TableCell>
                                            <TableCell>{e.Count}</TableCell>
                                            <TableCell>{e.Count}</TableCell>
                                            <TableCell>{e.WeftRequired}</TableCell>
                                            <TableCell>{e.WeftIssued}</TableCell>
                                            <TableCell>{e.LastWeftIssueDate}</TableCell>
                                            <TableCell>{e.NextIssueDate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

// Row.propTypes = {
//     Row: PropTypes.shape({
//         calories: PropTypes.number.isRequired,
//         carbs: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         history: PropTypes.arrayOf(
//             PropTypes.shape({
//                 amount: PropTypes.number.isRequired,
//                 customerId: PropTypes.string.isRequired,
//                 date: PropTypes.string.isRequired,
//             }),
//         ).isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         protein: PropTypes.number.isRequired,
//     }).isRequired,
// };



export default function WeftTable() {
    const classes = useRowStyles();
    return (

        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow className={classes.table}>
                        <TableCell>Weaver</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Weft required</TableCell>
                        <TableCell>Weft issued</TableCell>
                        <TableCell>Balance weft</TableCell>
                        <TableCell>Last weft issue date</TableCell>
                        <TableCell>Next weft issue date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Change button</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((e) => (
                        <Row key={e.name} e={e} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
