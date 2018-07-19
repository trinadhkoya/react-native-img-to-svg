import React from 'react'
import {Defs, G, Path, Svg} from "react-native-svg";

class LuxuryIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>

                <G fill={fill}>
                    <G  stroke={fill}>
                        <Path className="cls-1"
                              d="M27.5,34.23a2.28,2.28,0,0,1-1.35-.45L18.06,27.9a.33.33,0,0,0-.36,0L9.61,33.78a2.31,2.31,0,0,1-3.55-2.57l3.1-9.51a.31.31,0,0,0-.11-.34L1,15.48a2.31,2.31,0,0,1,1.36-4.17h10a.3.3,0,0,0,.29-.21l3.09-9.51A2.26,2.26,0,0,1,17.88,0h0a2.27,2.27,0,0,1,2.19,1.59h0l3.09,9.51a.3.3,0,0,0,.29.21h10a2.3,2.3,0,0,1,1.35,4.17l-8.09,5.88a.29.29,0,0,0-.11.34l3.09,9.51a2.25,2.25,0,0,1-.84,2.57A2.28,2.28,0,0,1,27.5,34.23Zm-9.62-8.39a2.26,2.26,0,0,1,1.35.45l8.09,5.87a.28.28,0,0,0,.36,0,.28.28,0,0,0,.11-.34L24.7,22.31a2.29,2.29,0,0,1,.84-2.57l8.09-5.88a.29.29,0,0,0,.11-.34.3.3,0,0,0-.29-.21h-10a2.3,2.3,0,0,1-2.19-1.59L18.17,2.21a.31.31,0,0,0-.58,0L14.5,11.72a2.3,2.3,0,0,1-2.19,1.59h-10a.29.29,0,0,0-.29.21.28.28,0,0,0,.11.34l8.09,5.88a2.29,2.29,0,0,1,.84,2.57L8,31.82a.28.28,0,0,0,.11.34.27.27,0,0,0,.35,0l8.09-5.87A2.29,2.29,0,0,1,17.88,25.84Z"/>
                        <Path className="cls-2" fill={lightColor} fillOpacity={0.5}
                              d="M22.21,11.41a1.29,1.29,0,0,0,1.24.9h10a1.3,1.3,0,0,1,.76,2.36l-8.09,5.88A1.32,1.32,0,0,0,25.65,22l3.09,9.51a1.3,1.3,0,0,1-2,1.45L18.64,27.1a1.27,1.27,0,0,0-1.53,0L9,33a1.3,1.3,0,0,1-2-1.45"/>
                        <Path className="cls-1"
                              d="M9.07,8.25A1,1,0,0,1,8.38,8L4.13,3.84A1,1,0,0,1,5.52,2.41L9.77,6.53a1,1,0,0,1-.7,1.72Z"/>
                        <Path className="cls-1"
                              d="M24.35,7.78a1,1,0,0,1-.64-.24,1,1,0,0,1-.12-1.41l3.84-4.51a1,1,0,0,1,1.41-.12A1,1,0,0,1,29,2.91L25.12,7.43A1,1,0,0,1,24.35,7.78Z"/>
                    </G>
                </G>
            </Svg>
        )
    }
}

LuxuryIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default LuxuryIco