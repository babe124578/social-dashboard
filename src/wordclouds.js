import React, { Component } from "react";
import ReactWordcloud from 'react-wordcloud';

class wordcloud extends Component {
    state = {
        wordcloudData: []
    }
    componentDidMount() {
        fetch('https://wordcloud.ap-northeast-1.elasticbeanstalk.com/Wordcloud')
            .then(res => res.json())
            .then((data) => {
                this.setState({ wordcloudData: data.labels })
            })
            .then(
                this.setState(
                    { wordcloudData: [...this.state.wordcloudData, { "labels": "WordCloud", "value": 999999 }] }
                )
            )
    }
    render() {
        return (
            <div style={{ height: 400, width: 700 }}>
                <ReactWordcloud
                    words={this.state.wordcloudData}
                    options={{
                        colors: [
                            '#1f77b4',
                            '#ff7f0e',
                            '#2ca02c',
                            '#d62728',
                            '#9467bd',
                            '#8c564b',
                        ],
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

export default wordcloud;