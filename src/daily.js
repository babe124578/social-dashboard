import React, { Component } from "react";

class daily extends Component {
    constructor() {
        super();
        this.state = {
            text: {},
        };
    }

    componentDidMount() {
        fetch('http://localhost:5000/Daily')
            .then(results => {
                return results.json();
            }).then(data => {
                let text = data.results.map((texts) => {
                    return (
                        <div key={texts.text}>
                            <div><pre>{JSON.stringify(texts.text.Daily, null, 2)}</pre></div>
                        </div>
                    )
                })
                this.setState({ text: text });
                console.log("state", this.state.text)
            })
    }

    render() {
        return (
            <div>
                {this.state.text}
            </div>
        )
    }
}

export default daily;