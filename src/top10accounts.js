import React, { Component } from "react";
import { Container, Row, Col, Toast } from "react-bootstrap";


class top10accounts extends Component {
    state = {
        topacc: [],
        data: [{ name: 'bob', val: 12 }, { name: 'chris', val: 13 }]
    }
    componentDidMount() {
        fetch('http://top10account.ap-northeast-1.elasticbeanstalk.com/TopAccount')
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
                                <strong className="mr-auto">Account Name</strong>
                                <small>Amount of message from 3 months</small>
                            </Toast.Header>
                            {this.state.topacc.map(function (m, idx) {
                                return (
                                    <Toast.Header closeButton={false} key={idx}>
                                        <strong className="mr-auto">{m.name}</strong>
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

export default top10accounts;