import React, { Component } from 'react';
import Slide from './slide';
import LeftArrow from './left-arrow';
import RightArrow from './right-arrow';

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: ['squirrel', 'otters', 'pug', 'hamster', 'lamb'],
            currentIndex: 0,
            translateValue: 0
        }

    }

    goToPrevSlide = () => {
        // Exiting the method early if we are at the start of the images array.
        if(this.state.currentIndex === 0) {

        }


        // This will not run if we met the 'if' condition above:
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1
        }));
    }

    goToNextSlide = () => {
        console.log("goToNext", this.state)
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array:
        if(this.state.currentIndex === this.state.images.length - 1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }

        // This will not run if we met the 'if' condition above:
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        var width = document.querySelector('slide').clientWidth
        console.log("sliderWidth is", width)
        return width
    }

    render() {
        return (
            <div className="slider">

                <div className="slider-wrapper"
                    style={{
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>

                {
                    this.state.images.map((image, i) => (
                        <Slide key={i} image={image} />
                    ))          
                }
                </div>
                
                <LeftArrow 
                    goToPrevSlide={this.goToPrevSlide}
                />
                <RightArrow 
                    goToNextSlide={this.goToNextSlide}
                />
            </div>
        );
    }
}