import React from 'react'
import {Defs, G, Path, Svg} from "react-native-svg";

class Plate2Ico extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>
                <Defs>
                </Defs>
                <G fill={fill}>
                    <G id="Layer_1-2" data-name="Layer 1">
                        <Path className="cls-1"
                              d="M37.54,6.44a22,22,0,0,0-31.1,0,22,22,0,0,0,0,31.1,22.06,22.06,0,0,0,24,4.78A22,22,0,0,0,37.54,6.44ZM36.29,36.29A20.24,20.24,0,0,1,1.75,22a20.23,20.23,0,1,1,34.54,14.3Z"/>
                        <Path className="cls-2"
                              d="M29.56,26a8.14,8.14,0,0,1-15.14.19.88.88,0,0,1,1.63-.67,6.34,6.34,0,0,0,5.9,4,6.43,6.43,0,0,0,6-4.11.88.88,0,0,1,1.13-.51A.9.9,0,0,1,29.56,26Z"/>
                        <Path className="cls-2"
                              d="M32.54,11.43a14.93,14.93,0,1,0,0,21.11A14.93,14.93,0,0,0,32.54,11.43Zm-.62,20.49A14,14,0,0,1,12.05,12.06,14,14,0,0,1,31.92,31.92Z"/>
                        <Path className="cls-1"
                              d="M33.16,10.81A15.81,15.81,0,1,0,22,37.8a15.73,15.73,0,0,0,11.17-4.63A15.82,15.82,0,0,0,33.16,10.81ZM22,36a14.05,14.05,0,1,1,0-28.1,14.05,14.05,0,0,1,9.93,24A13.92,13.92,0,0,1,22,36Z"/>
                        <Path className="cls-1"
                              d="M29.56,26a8.14,8.14,0,0,1-15.14.19.88.88,0,0,1,1.63-.67,6.34,6.34,0,0,0,5.9,4,6.43,6.43,0,0,0,6-4.11.88.88,0,0,1,1.13-.51A.9.9,0,0,1,29.56,26Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

Plate2Ico.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default Plate2Ico
