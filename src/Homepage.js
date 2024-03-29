import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import cover from "./images/background.png";
import { GoogleSpreadsheet } from "google-spreadsheet";
import Slider from './Slider';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { cheerfulFiestaPalette } from '@mui/x-charts/colorPalettes';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { axisClasses } from '@mui/x-charts/ChartsAxis';



const font = "'Poppins', sans-serif";



const theme = createTheme({
    typography: {
        fontFamily: font,
    },
    palette: {
        primary: {
            main: "#000000"
        }
    },
});

function Copyright() {

    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Wattendance
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


function Homepage() {

    const [data1, setData1] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const [data3, setData3] = React.useState([]);
    const [data4, setData4] = React.useState([]);
    const [data5, setData5] = React.useState([]);
    const [data6, setData6] = React.useState([]);
    const [dataFetched, setDataFetched] = React.useState(false);

    const data = [
        { x: 100, y: 200, id: 1 },
        { x: 120, y: 100, id: 2 },
        { x: 170, y: 300, id: 3 },
        { x: 140, y: 250, id: 4 },
        { x: 150, y: 400, id: 5 },
        { x: 110, y: 280, id: 6 },
    ];

    const getCourseData = async (courseID, setDataX) => {
        const options = {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'courseID': courseID,
            }),
        }
        const response = await fetch('http://localhost:3600/get-scatter-points', options);
        //const response = await fetch('http://18.223.107.181:3600/get-course-attendance', options);
        const result = await response.json();
        let id = 1;
        console.log(result);
        setDataX(result);
        //await setDataX(result.map(item => ({x: item.attendance, y: item.surveyAvg, id: id++})));
    }

    const getAllData = async () => {
        await getCourseData(1, setData1);
        await getCourseData(2, setData2);
        await getCourseData(3, setData3);
        await getCourseData(4, setData4);
        await getCourseData(5, setData5);
        await getCourseData(6, setData6);
        console.log(data1);
    }

    React.useEffect(() => {
        getAllData();
        setDataFetched(true);
    }, [])


    return (
        <>
            <div style={{
                width: '100%', top: 'calc(0vh-100px)', height: '100%', backgroundImage: `url(${cover})`,
                backgroundSize: 'cover', backgroundRepeat: 'no-repeat', position: 'fixed',
                zIndex: '-1'
            }}>
            </div >

            <ThemeProvider theme={theme}>
                <Stack spacing={2} direction="column" sx={{ pr: '200px', pl: '200px' }} alignItems="center">
                    <Box sx={{ zIndex: '2' }}>
                        <div class='spacer'></div>
                        <Typography variant="h3" gutterBottom>
                            SE 2028'S DASHBOARD
                        </Typography>
                    </Box>
                    <br></br>

                    <Card sx={{ width: '850px' }}>
                        <ScatterChart
                            series={dataFetched ? [
                                { type: 'scatter', label: 'ECE 105', data: data1 },
                                { type: 'scatter', label: 'MATH 115', data: data2 },
                                { type: 'scatter', label: 'CS 137', data: data3 },
                                { type: 'scatter', label: 'MATH 117', data: data4 },
                                { type: 'scatter', label: 'MATH 135', data: data5 },
                                { type: 'scatter', label: 'SE 101', data: data6 }]
                                : []
                            }
                            width={800}
                            height={600}
                            xAxis={[{ id: 'attendance', label: 'Attendance', min: 0 }]}
                            yAxis={[{ id: 'survey', label: 'Average survey data', min: 0, max: 10 }]}
                            colors={cheerfulFiestaPalette}
                            sx={{
                                [`.${axisClasses.left} .${axisClasses.label}`]: {
                                    transform: 'translate(-10px, 0)',
                                },
                                pl: '70px',
                            }}
                        />
                    </Card>

                </Stack>
                {/* Footer */}
                <Box sx={{ p: 6 }} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Wattendance
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Track your attendance
                    </Typography>
                    <Copyright />
                </Box>
                {/* End footer */}
            </ThemeProvider>
        </>
    );

}
export default Homepage;
