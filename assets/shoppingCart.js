import React from 'react'
import {Circle, G, Path, Svg} from "react-native-svg";

class ShoppinCartIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width} fill={fill}>

                <G fill={fill} strokeWidth={2}>
                    <G fill={fill} strokeWidth={2}>
                        <Path
                            d="M41,31.52H5a1,1,0,0,1-1-.83L0,7.82A1,1,0,0,1,1,6.64H36.08a1,1,0,0,1,0,2H2.19L5.84,29.52H40.26L49.16.71a1,1,0,0,1,1-.71h8.06a1,1,0,0,1,0,2H50.85L42,30.82A1,1,0,0,1,41,31.52Z"/>
                        <Circle cx="32.17" cy="39.48" r="3.92"/>
                        <Circle cx="13.83" cy="39.48" r="3.92"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

ShoppinCartIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default ShoppinCartIco
