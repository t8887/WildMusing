import React from 'react';
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
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './style.scss'

const useRowStyles = makeStyles({
    root: {

    },
    head: {
        background: '#0064d0'
    },
    table: {
        background: '#0064d0',
        fontColor: 'black',
    },
    tr: {
        color: '#142045',
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
    }
]


function Row(props) {
    const { e } = props;
    console.log('data1: ', e);
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">{e.Weaver}</TableCell>
                <TableCell align='center'>{e.Count}</TableCell>
                <TableCell align='center'>{e.Weaver}</TableCell>
                <TableCell align='center'>{e.WeftRequired}</TableCell>
                <TableCell align='center'><ProgressBar
                    percent={50}
                >
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>
                    <Step>
                        {({ accomplished, index }) => (
                            <div
                                className={`indexedStep ${accomplished ? "accomplished" : null}`}
                            >
                                {index + 1}
                            </div>
                        )}
                    </Step>

                </ProgressBar>
                </TableCell>
                <TableCell align='center' >{e.NextIssueDate}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell className={classes.tr}>Quality</TableCell>
                                        <TableCell className={classes.tr}>Count</TableCell>
                                        <TableCell className={classes.tr}>Mill Name</TableCell>
                                        <TableCell className={classes.tr}>Bags</TableCell>
                                        <TableCell className={classes.tr}>Weft issue</TableCell>
                                        <TableCell className={classes.tr}>Delivery Status</TableCell>
                                        <TableCell className={classes.tr}>Info</TableCell>
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
                                            <TableCell></TableCell>

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

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};



export default function WeftTable() {
    const classes = useRowStyles();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead >
                    <TableRow className={classes.table}>
                        <TableCell align="center" className={classes.tr}>Quality</TableCell>
                        <TableCell align="center" className={classes.tr}>Count</TableCell>
                        <TableCell align="center" className={classes.tr}>Mill Name</TableCell>
                        <TableCell align="center" className={classes.tr}>Bags</TableCell>
                        <TableCell align="center" className={classes.tr}>Weft issue</TableCell>
                        <TableCell align="center" className={classes.tr}>Daily Status</TableCell>
                        <TableCell align="center" className={classes.tr}>Info</TableCell>
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
