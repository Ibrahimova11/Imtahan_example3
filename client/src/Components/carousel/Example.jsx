import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./Example.css"

const Example = () => {
    const images = [
        "https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp",
        "https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp",
        
        "https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp",
        
        
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div className='slider1' style={{ 'backgroundImage': `url(${images[0]})` }}>
                   <h1>Get your Education today!</h1>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='slider2'  style={{ 'backgroundImage': `url(${images[1]})` }}>
                <h1>Get your Education today!</h1>
                </div>
            </div>
            <div className="each-slide-effect">
                <div className='slider3'  style={{ 'backgroundImage': `url(${images[2]})` }}>
                <h1>Get your Education today!</h1>
                </div>
            </div>
        </Slide>
    );
};

export default Example;