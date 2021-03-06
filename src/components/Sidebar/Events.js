import React from 'react';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import Base from '../Images/Base.png';
import IBMI from '../Images/ibm-india1.jpg';
import CardMedia from '@material-ui/core/CardMedia';
import {Media} from 'react-bootstrap';


const Events = () => {

    const getEvents = [
        {
            title : "IBM Champion Chats : Meet the system lifetime Champion and prep your nomination",
            date : 'Thursday, Oct 20 ,2020  Time : 1:00pm to 2:00pm',
            img : IBMI
        },
        {
            title : "2021 Coorporate & investment Bank Summer Analyst Advancing Black Leaders Summit",
            date : ' Saturday, Sept 10 ,2020  Time : 3:00pm to 4:00pm',
            img : Base
        },
    ]

    return (
        <div className="container-fluid">
           <div className="row">
               <div className="col">
                    <Button className="text-muted mr-3" disabled>Filters</Button>
                    <Button className="mx-3" variant="contained" color="primary">This Month</Button>
               </div>
           </div>
           <div className="row mt-4">
               <div className="col">
               <Typography color="primary" variant="h4" component="h4">
                Find Events
                </Typography>
               </div>
           </div>

           {getEvents.map(event => (
                <div>
                    <div className="row mt-3">
               <div className="col-lg-6">
                    <Media className="Border shadow p-3">
                        <img src={event.img} style={{maxWidth:"165px"}} className="m-3"/>
                        <Media.Body>
                            <p>Virtual Session</p>
                        <h6>{event.title}</h6>
                        <p>
                        {event.date}
                        </p>
                        <Button variant="contained" color="primary" className="mr-2">Add To Calendar</Button>
                        <Button variant="outlined" color="primary" className="ml-2">Register</Button>
                    </Media.Body>
                    </Media>
               </div>
               <div className="col-lg-6">
               <Media className="Border shadow p-3">
                        <img src={event.img} style={{maxWidth:"165px"}} className="m-3"/>
                        <Media.Body>
                            <p>Virtual Session</p>
                                <h6>{event.title}</h6>
                        <p>
                        {event.date}
                        </p>
                        <Button variant="contained" color="primary" className="mr-2">Add To Calendar</Button>
                        <Button variant="outlined" color="primary" className="ml-2">Register</Button>
                    </Media.Body>
                    </Media>
               </div>
           </div>
                </div>
           ))}
          

        </div>
    );
};

export default Events;