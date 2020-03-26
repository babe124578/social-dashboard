import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class daily extends Component {
    state = {
        options: {
            responsive: true,
            title: {
                display: true,
                text: 'Daily post on social media'
            },
            tooltips: {
                mode: 'label'
            },
            hover: {
                mode: 'dataset'
            },
            scales: {
                xAxes: [{ display: true, scaleLabel: { show: true, labelString: 'Month' } }],
                yAxes: [{ display: true, scaleLabel: { show: true, labelString: 'Value' }, ticks: { suggestedMin: -10, suggestedMax: 250 } }]
            }
        },
        datas: {
            labels: null
        }
    }
    componentDidMount() {
        fetch('https://dashdaily2.ap-northeast-1.elasticbeanstalk.com/Daily')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    datas: {
                        labels: data.labels[0],
                        datasets: [{
                            label: "date_count",
                            data: data.labels[1],
                            hoverBackgroundColor: '#B8F8EC',
                            pointBorderColor: '#FF0000',
                            pointBackgroundColor: '#FF0000',
                            pointBorderWidth: 1,
                            hoverBorderDash: [5,5],
                            lineTension: '0',
                            radius: 2,
                            pointRadius: 2.5,
                            pointHoverRadius: 3
                        }]
                    }
                })
            })
    }
    render() {
        return (
            <div>
                <Line data={this.state.datas} options={this.state.options}></Line>
            </div>
        )
    }
}

export default daily;