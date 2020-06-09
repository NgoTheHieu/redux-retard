import React, { Component } from 'react';
import { connect } from 'react-redux';
import {FormControl,Form,Button} from "react-bootstrap"
class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: "",
        }
    }
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    }
    reset = () => {
        this.props.dispatch({ type: "RESET"});
    }
    handleClick = () => {
        this.props.dispatch({ type: "COLOR"});
    }
    handleChange = (e) => {
        this.setState({
            query: this.search.value
        })
    }
    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>
                    <button onClick={this.decrement}>DECREMENT</button>
                    <button onClick={this.increment}>INCREMENT</button>
                    <button onClick={this.reset}>RESET</button>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" 
                    onChange={this.handleChange}
                    />
                    <Button variant="outline-primary" onClick={this.handleClick}>Search</Button>
                    </Form>
                </div>
                <h1>{this.props.count}</h1>
                <span>{this.props.count}</span>
        <div className={this.props.color} ></div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);