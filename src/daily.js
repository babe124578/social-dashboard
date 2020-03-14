import React, { Component } from "react";

class daily extends Component {
    state = {
        received: []
    }
    componentDidMount() {
        fetch('http://127.0.0.1:5000/Daily')
            .then(res => res.json())
            .then((data) => {
                this.setState({ received: data })
                console.log("log received:", this.state.received)
            })
            .catch(console.log)
    }

    render() {
        return (
            <img src={"data:image/jpeg;base64," + this.state.received.encoded} alt="dailycount" />

        )
    }
}

export default daily;