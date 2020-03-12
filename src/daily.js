import React, { Component } from "react";

class daily extends Component {
    state = {
        todos: []
    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/Daily')
        .then(res => res.json())
        .then((data) => {
            this.setState({todos:data})
            console.log(this.state.todos)
        })
        .catch(console.log)
    }
    render() {
        return (
            <div>
                <h5>todos.Daily</h5>
            </div>
        )
    }
}

export default daily;