import React, { Component, useEffect } from 'react';
import ColorDisplay from '../components/ColorDisplay.jsx';
import getRandomColor from '../utils/random-color.jsx';

class ColorFlasher extends Component {

    state = {
        currentColor: ''
    };
    componentDidMount(){
        this.handleNewColor()
    }
    

    handleNewColor() {
        setInterval(() =>{
            const randomColor = getRandomColor()
            this.setState({ currentColor: randomColor })
        }, 1000);
    }

    render() {
        return (
            <>

            <h1>Welcome to a World of Color!</h1>
            <ColorDisplay currentColor={this.state.currentColor} />
            </>
        );
    }
}

export default ColorFlasher;