import React from 'react'
import {Circle, G, Path, Svg} from "react-native-svg";

class Plate1Ico extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>

                <G id="Layer_2" data-name="Layer 2">
                    <G id="Layer_1-2" data-name="Layer 1" fill={'#fff'} >
                        <Path className="cls-1" fill={lightColor} fillOpacity={0.5}
                              d="M3.11,31.44,8.79,29s11.85,14.82,23.76,3.58l4.37,4.37s-8.61,8.88-20.09,5.54S3.11,31.44,3.11,31.44Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M22,44A22,22,0,0,1,6.44,6.44a22,22,0,0,1,31.1,31.1h0A21.86,21.86,0,0,1,22,44ZM22,1.76A20.23,20.23,0,1,0,36.3,36.3h0A20.23,20.23,0,0,0,22,1.76ZM36.92,36.92h0Z"/>
                        <Circle className="cls-3" cx="21.99" cy="21.99" r="14.93"/>
                        <Path className="cls-2" fill={fill}
                              d="M22,37.8a15.81,15.81,0,1,1,11.18-4.63h0A15.74,15.74,0,0,1,22,37.8ZM22,7.94a14,14,0,0,0-9.93,24,14,14,0,0,0,19.86,0h0A14.05,14.05,0,0,0,22,7.94ZM32.55,32.55Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M22,31.24a8.12,8.12,0,0,1-7.54-5A.89.89,0,0,1,14.91,25a.88.88,0,0,1,1.14.48,6.39,6.39,0,0,0,11.87-.14.88.88,0,1,1,1.64.62A8.17,8.17,0,0,1,22,31.24Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

Plate1Ico.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default Plate1Ico
