import React, { Component } from "react";
import ReactWordcloud from 'react-wordcloud';

class hashtagclouds extends Component {
    state = {
        hashtagData: []
    }
    componentDidMount() {
        fetch('https://hashcloud.ap-northeast-1.elasticbeanstalk.com/Hashtag')
            .then(res => res.json())
            .then((data) => {
                this.setState({ hashtagData: data.labels })
                this.setState({ hashtagData: [...this.state.hashtagData, { "labels": "HashtagCloud", "value": 999999 }] })
            })            
    }
    render() {
        return (
            <div style={{ height: 400, width: 700 }}>
                <ReactWordcloud
                    words={this.state.hashtagData}
                    options={{
                        enableTooltip: true,
                        deterministic: false,
                        fontFamily: 'impact',
                        fontSizes: [5, 60],
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        padding: 1,
                        rotations: 1,
                        rotationAngles: [0, 90],
                        scale: 'sqrt',
                        spiral: 'archimedean',
                        transitionDuration: 0,
                    }}
                />
            </div>
        )
    }
}

export default hashtagclouds;