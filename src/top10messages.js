import React, { Component } from "react";
import { Container, Row, Col, Toast } from "react-bootstrap";
import "./top10message.css"

class top10messages extends Component {
    state = {
        topacc: []
    }
    componentDidMount() {
        fetch('https://top10message.ap-northeast-1.elasticbeanstalk.com/TopMessage')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    topacc: data.labels
                })
            })
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Toast>
                            <Toast.Header closeButton={false}>
                                <strong className="mr-auto">Message</strong>
                                <small>Engagement</small>
                            </Toast.Header>
                            {this.state.topacc.map(function (m, idx) {
                                return (
                                    <Toast.Header closeButton={false} key={idx}>
                                        <strong className="mr-auto" id='text'>{m.name}</strong>
                                        <small>{m.value}</small>
                                    </Toast.Header>
                                )
                            })}
                        </Toast>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default top10messages;