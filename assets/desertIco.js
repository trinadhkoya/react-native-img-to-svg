import React from 'react'
import {Defs, G, Path, Rect, Svg} from "react-native-svg";

class DesertIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>
                <Defs>
                </Defs>
                <G fill={fill} strokeWidth={2}>
                    <G>
                        <Rect fill={lightColor} fillOpacity={1} className="cls-1" x="0.22" y="21.65" width="65.82" height="17.28"/>
                        <Path className="cls-2"
                              d="M63.15,22.24H63L3,23.15a3.11,3.11,0,0,1-.83-6.07L45.46.26a5.45,5.45,0,0,1,5.63,1.46L65.41,17a3.11,3.11,0,0,1-2.26,5.24ZM47.1,1.5a4,4,0,0,0-1.19.18L2.62,18.51a1.61,1.61,0,0,0,.44,3.14l60-.91a1.53,1.53,0,0,0,1.52-.94A1.57,1.57,0,0,0,64.31,18L50,2.75A3.94,3.94,0,0,0,47.1,1.5Z"/>
                        <Path className="cls-2"
                              d="M44.45,15.59a4.81,4.81,0,1,1,4.81-4.81A4.82,4.82,0,0,1,44.45,15.59Zm0-8.12a3.31,3.31,0,1,0,3.31,3.31A3.31,3.31,0,0,0,44.45,7.47Z"/>
                        <Path className="cls-2"
                              d="M65.5,40.18h-.06L.68,39.35A.76.76,0,0,1,0,38.6V20.18a.75.75,0,0,1,1.5,0V37.91l63.25.7V19.26a.76.76,0,0,1,.75-.75h0a.75.75,0,0,1,.75.75V39.43A.72.72,0,0,1,66,40,.74.74,0,0,1,65.5,40.18Z"/>
                        <Path className="cls-2"
                              d="M59.89,30.68h0L5,30.18a.76.76,0,0,1-.7-.8.72.72,0,0,1,.8-.7l54.87.5a.75.75,0,0,1,0,1.5Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

DesertIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default DesertIco
