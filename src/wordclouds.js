import React, { Component } from "react";
import ReactWordcloud from 'react-wordcloud';

class wordcloud extends Component {
    state = {
        wordcloudData: [{ "text": "WordCloud", "value": 13000 }]
    }
    componentDidMount() {
        fetch('https://wordcloud.ap-northeast-1.elasticbeanstalk.com/Wordcloud')
            .then(res => res.json())
            .then((data) => {
                this.setState({ wordcloudData: this.state.wordcloudData.concat(data.labels)})
            })  
    }
    render() {
        return (
            <div style={{ height: 300, width: 500 }}>
                <ReactWordcloud
                    words={this.state.wordcloudData}
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

export default wordcloud;