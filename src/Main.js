import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import daily from "./daily";
import hashtagclouds from "./hashtagclouds";
import "./Main.css";
import top10accounts from "./top10accounts";
import top10messages from "./top10messages";
import wordclouds from "./wordclouds";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand>Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Switch>
                                <Route exact path="/" component={daily} />
                                <Route path="/top-10-accounts" component={top10accounts} />
                                <Route path="/top-10-messages" component={top10messages} />
                                <Route path="/word-clouds" component={wordclouds} />
                                <Route path="/hashtag-clouds" component={hashtagclouds} />
                            </Switch>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>

                </div>
            </HashRouter>
        );
    }
}

export default Main;