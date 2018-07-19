import React from 'react'
import {Defs, G, Path, Svg} from "react-native-svg";

class SupportIco extends React.Component {
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
                    <G>
                        <Path className="cls-1"
                              d="M28.28,45.26a1,1,0,0,1-.22-2C37,41.3,42,38.7,42,29.56v-7.9A19.68,19.68,0,0,0,22.31,2h-.65A19.68,19.68,0,0,0,2,21.66v7.9a1,1,0,0,1-2,0v-7.9A21.69,21.69,0,0,1,21.66,0h.65A21.69,21.69,0,0,1,44,21.66v7.9c0,10.83-5.63,13.49-15.48,15.68Z"/>
                        <Path className="cls-1"
                              d="M3,33.76a3.05,3.05,0,0,1-3-3V22.3a3,3,0,0,1,6.09,0v8.41A3.06,3.06,0,0,1,3,33.76Z"/>
                        <Path className="cls-1"
                              d="M40.93,33.76a3.06,3.06,0,0,1-3-3V22.3a3,3,0,0,1,6.09,0v8.41A3.05,3.05,0,0,1,40.93,33.76Z"/>
                        <Path className="cls-1"
                              d="M28.38,42.55H22.1A1.09,1.09,0,0,0,21,43.64v.67A1.09,1.09,0,0,0,22.1,45.4h6.28a1.09,1.09,0,0,0,1.09-1.09v-.67a1.09,1.09,0,0,0-1.09-1.09Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

SupportIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default SupportIco
