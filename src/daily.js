import React, { Component } from "react";

class daily extends Component {
    constructor(){
        super();
        this.state = {
            text: {},
        };
    }

    componentDidMount(){
        fetch('http://localhost:5000/Daily')
        .then(results => {
            return results.json();
        }).then(data => {
            let text = data.results.map((texts) => {
                return(
                    <div key={texts.text.Daily}>
                        <div><pre>{JSON.stringify(this.state.text,null,2)}</pre></div>
                    </div>
                )
            })
            this.setState({text:text});
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default daily;