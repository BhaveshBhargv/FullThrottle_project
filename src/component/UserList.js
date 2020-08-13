import React, { Component } from 'react';
import UserData from './data/data1.json';
import { Modal, Button, Row, Col, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class Userlist extends Component {
    constructor(){
        super()
        this.state={
            show: false
        }
    }
    handleModal()
    {
        this.setState({ show : !this.state.show})
    }
    render () {
        return (
            <div>
                <h1>User List:</h1>
                {UserData.map((userDetail, index) => {
                    return <div>
                        <Row>
                            <Col>{userDetail.real_name}</Col>
                            <Col>{userDetail.tz}</Col>
                            <Col>
                                <Button style={{float: "right"}} onClick = {() =>{this.handleModal()}}>Activity Log</Button>
                                <Modal show={this.state.show} onHide={() =>{this.handleModal()}} size="lg"
                                aria-labelledby="contained-modal-title-vcenter"
                                centered>
                                    <Modal.Header closeButton>User Activity</Modal.Header>
                                    <Modal.Body>
                                        <p>{userDetail.activity_periods.map((item, i)=>{
                                            return<div>
                                                <ListGroup as = "ul">
                                                    <ListGroup.Item as = "li" key={index}>Start Time: {item.start_time}</ListGroup.Item>
                                                    <ListGroup.Item as = "li" key={index}>End Time: {item.end_time}</ListGroup.Item>
                                                </ListGroup>
                                            </div> 
                                        })}</p>
                                    </Modal.Body>
                                </Modal>
                            </Col>
                        </Row>
                    </div>
                })}
            </div>
        );
    }
} 
export default Userlist;