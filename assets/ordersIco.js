import React from 'react'
import {Circle, Defs, G, Path, Rect, Svg} from "react-native-svg";

class OrdersIco extends React.Component {
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
                              d="M40.54,42H1a1,1,0,0,1-1-1V5.83A5.84,5.84,0,0,1,5.83,0H40.54a1,1,0,0,1,1,1V41A1,1,0,0,1,40.54,42ZM2,40H39.54V2H5.83A3.84,3.84,0,0,0,2,5.83Z"/>
                        <Path className="cls-1" d="M15.77,26.55H7.71a1,1,0,1,1,0-2h8.06a1,1,0,0,1,0,2Z"/>
                        <Path className="cls-1" d="M28.25,26.55H20.19a1,1,0,0,1,0-2h8.06a1,1,0,0,1,0,2Z"/>
                        <Path className="cls-1" d="M34.14,26.55H32.68a1,1,0,0,1,0-2h1.46a1,1,0,0,1,0,2Z"/>
                        <Path className="cls-1" d="M34.14,33.59H7.71a1,1,0,0,1,0-2H34.14a1,1,0,0,1,0,2Z"/>
                        <Circle  className="cls-1" cx="21.19" cy="12.39" r="6.94"/>
                        <Rect  fill={'#fff'} className="cls-2" x="16.52" y="13.46" width="4.85" height="1.29" rx="0.64" ry="0.64"
                              transform="translate(15.52 -9.26) rotate(45)"/>
                        <Rect fill={'#fff'}  className="cls-2" x="18.57" y="12.33" width="8.06" height="1.29" rx="0.64" ry="0.64"
                              transform="translate(-2.55 19.78) rotate(-45)"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

OrdersIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default OrdersIco
