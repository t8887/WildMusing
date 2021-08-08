import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './style.scss'

const useStyles = makeStyles({
    table: {
        // minWidth: 650,
    },
    head: {
        // color: '#0064d0',
        // background: '#ffffff'
    },
    // cell: {
    //     color: 'blue',
    //     background: '#ffffff'
    // }

});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
];

export default function BasicTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" className={classes.cell}>Mtrs</TableCell>
                        <TableCell align="center" className={classes.cell}>Roll / Taga</TableCell>
                        <TableCell align="center" className={classes.cell}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">{row.calories}</TableCell>
                            <TableCell align="center">
                                <button className='btn btn-primary btn-rounded' style={{ backgroundColor: "#0064d0", color: 'white' }}>Request Dispatch</button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
