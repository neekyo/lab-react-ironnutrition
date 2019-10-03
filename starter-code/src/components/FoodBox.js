import React, { Component } from 'react';
class Foodbox extends Component {
    state = this.props
    render() {
        return (
            <div>
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.image} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{this.props.foodName}</strong> <br />
                                <small>{this.props.calories}</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                <input
                                    className="input"
                                    type="number" 
                                    onChange={(e) => this.setState({
                                        quantity: e.target.value
                                    })}
                                />
                                </div>
                                <div className="control">
                                <button className="button is-info" onClick={() => this.props.addToToday(this.state)}>
                                    +
                                </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}
export default Foodbox;