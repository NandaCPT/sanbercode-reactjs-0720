import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        // time: 0;
        this.state = {date: new Date()};
    }

    componentDidMount() {
        if (this.props.start !== undefined){
            this.setState({time: this.props.start})
        }
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentDidUpdate() {
        if (this.state.time === 0){

        }
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
            time: this.state.time - 1
        });
    }

    render() {
        return (
            <>
                {this.state.time > 0 &&
                <div>
                 <h2 style={{textAlign: "left"}}> 
                 Sekarang Jam : {this.state.date.toLocaleTimeString()} 
                <td style={{float: "right"}}>hitung mundur: {this.state.time}</td>
                </h2>
                </div>
                }

            </>
        )
    }
}

export default Clock