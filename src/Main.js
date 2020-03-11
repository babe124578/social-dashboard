import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import daily from "./daily";
import hashtagclouds from "./hashtagclouds";
import "./Main.css";
import top10accounts from "./top10accounts";
import top10messages from "./top10messages";
import wordclouds from "./wordclouds";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand>Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Daily messages</Nav.Link>
                                <Nav.Link href="/#top-10-accounts">Top 10 accounts by messages</Nav.Link>
                                <Nav.Link href="/#top-10-messages">Top 10 messages by engagements</Nav.Link>
                                <Nav.Link href="/#word-clouds">Word Clouds</Nav.Link>
                                <Nav.Link href="/#hashtag-clouds">Hashtag Clouds</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <div>
                        <div className="content">
                            <Route exact path="/social-dashboard/#/" component={daily} />
                            <Route path="/social-dashboard/#/top-10-accounts" component={top10accounts} />
                            <Route path="/social-dashboard/#/top-10-messages" component={top10messages} />
                            <Route path="/social-dashboard/#/word-clouds" component={wordclouds} />
                            <Route path="/social-dashboard/#/hashtag-clouds" component={hashtagclouds} />
                        </div>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;