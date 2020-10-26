import React, {useState} from 'react'
import CenterGrid from '../Cards/index';
import {auth} from '../../firebase/firebase.utils';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ScrollTabs from './Tabs';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Card, } from 'react-bootstrap';
import '../css/dashboard.scss';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }));
 
export function Dashboard() {
   

    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (e) =>{
        setValue(e.target.value)
;    }

    return (
        <div>
            
            
                 <h5 className="welcome-text" style={{fontSize : '35px', color : "#5E81F4"}}>Welcome, <span className="font-weight-bold"> {auth.currentUser.displayName.split(" ")[0]} </span></h5>
                 <br/>
                 
                <br/>
           <div className="container-fluid">
               <div className="row">
                   <div className="col-xl-9 " style={{borderRight : "2px solid #5E81F4"}}>
                        <ScrollTabs/>
                   </div>
                   <div className="col-xl-3" style={{display : "flex", flexDirection : "column", justifyContent : "center", }}>
                   <Card className="mb-5" style={{ maxWidth : "100%" }}>
                    <Card.Body style={{display : "flex" , flexDirection : "column", justifyContent : "space-around", alignItems:'center'}}>
                        <Card.Title className="text-center">Attendance</Card.Title>
                        <br/>
                        <div className="" style={{height : "100px",backgroundColor:"#ffe6cc" ,width : "100px", borderRadius : "50%", borderTop : "5px solid #ffb366", borderRight : "5px solid #ffb366",borderBottom : "5px solid #ffb366", display : "flex", justifyContent :"center", alignItems : "center"}}>
                        <p className="text-black">74%</p>
                        </div>
                        <br/>
                        <Card.Text>Absent : 10/40</Card.Text>
                       
                    </Card.Body>
                    </Card>

                    <Card className="mt-3" style={{ maxWidth: '100%' }}>
                    <Card.Body style={{display : "flex" , flexDirection : "column", justifyContent : "space-around", alignItems:'center'}}>
                        <Card.Title className="text-center">CGPA</Card.Title>
                        <br/>
                        <div className="" style={{height : "100px",backgroundColor:"#80ffbf" ,width : "100px", borderRadius : "50%", borderTop : "5px solid #00e673", borderRight : "5px solid #00e673", display : "flex", justifyContent :"center", alignItems : "center"}}>
                        <p className="text-black">4/10</p>
                        </div>
                        <br/>
                        <Card.Text>Completed : 3/8</Card.Text>
                    </Card.Body>
                    </Card>
                   </div>
               </div>
           </div>
                

            
        </div>
    )
}
