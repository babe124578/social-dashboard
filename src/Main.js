import React, { Component } from "react";
import Daily from "./daily";
import Hashtagclouds from "./hashtagclouds";
import "./Main.css";
import Top10accounts from "./top10accounts";
import Top10messages from "./top10messages";
import Wordclouds from "./wordclouds";
import { Container, Row, Col } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col><Hashtagclouds /></Col>
                    <Col><Wordclouds /></Col>
                </Row>
                <hr />
                <Row>
                    <Col><Daily /></Col>
                    <Col><Top10accounts /></Col>
                    <Col><Top10messages /></Col>
                </Row>
            </Container>
        );
    }
}

export default Main;