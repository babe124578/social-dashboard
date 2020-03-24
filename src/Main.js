import React, { Component } from "react";
import Daily from "./daily";
import Hashtagclouds from "./hashtagclouds";
import "./Main.css";
import Top10accounts from "./top10accounts";
import Top10messages from "./top10messages";
import Wordclouds from "./wordclouds";
import { Row, Col, Navbar } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Social Dashboard</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    </Navbar.Collapse>
                </Navbar>
                <Row className="toprow">
                    <Col md="auto">
                        <Top10messages />
                    </Col>
                    <Col>
                        <Row>
                            <Col><Hashtagclouds /></Col>
                            <Col><Wordclouds /></Col>
                        </Row>
                        <Row>
                            <Col><Daily /></Col>
                            <Col><Top10accounts /></Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Main;