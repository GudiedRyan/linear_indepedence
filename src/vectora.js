import React from "react";

class Vectors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countTop: 0,
            countBot: 0,
        }
    }
    render() {
        return(
            <div>
                <div className="vector">
                <table className="matrix">
                    <tr>
                        <td>{this.state.countTop}</td>
                    </tr>
                    <tr>
                        <td>{this.state.countBot}</td>
                    </tr>
                </table>
                </div>
                <br />
                <button onClick={this.addX}>Add X</button>
                <button onClick={this.subtractX}>Subtract X</button>
                <button onClick={this.addY}>Add Y</button>
                <button onClick={this.subtractY}>Subtract Y</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
    addX = () => {
        this.setState(state => ({
            countTop: state.countTop + 1,
            countBot: state.countBot + 1
        }))
    }
    subtractX = () => {
        this.setState(state => ({
            countTop: state.countTop - 1,
            countBot: state.countBot - 1
        }))
    }
    addY = () => {
        this.setState(state => ({
            countTop: state.countTop + 0,
            countBot: state.countBot + 1
        }))
    }
    subtractY = () => {
        this.setState(state => ({
            countTop: state.countTop - 0,
            countBot: state.countBot - 1
        }))
    }
    reset = () => {
        this.setState({
            countTop: 0,
            countBot: 0,
        })
    }
}

export default Vectors;