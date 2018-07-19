import React from 'react'
import {Defs, G, Path, Polygon, Svg} from "react-native-svg";

class ZcardIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>
                <Defs>
                </Defs>
                <G fill={fill} >
                    <G >
                        <Path className="cls-1"
                              d="M55.39,42H1a1,1,0,0,1-1-1V5.83A5.84,5.84,0,0,1,5.83,0H55.39a1,1,0,0,1,1,1V41A1,1,0,0,1,55.39,42ZM2,40H54.39V2H5.83A3.84,3.84,0,0,0,2,5.83Z"/>
                        <Path className="cls-1"
                              d="M12.43,4.91a6.63,6.63,0,1,0,6.63,6.63A6.63,6.63,0,0,0,12.43,4.91Zm0,11.35a4.72,4.72,0,1,1,4.72-4.72A4.72,4.72,0,0,1,12.43,16.26Z"/>
                        <Polygon className="cls-1"
                                 points="15.74 12.54 12.55 12.54 15.15 8.74 9.7 8.74 9.7 10.08 12.31 10.08 9.72 13.88 13.83 13.88 13.83 15.32 15.74 12.54"/>
                        <Path className="cls-1" d="M15.77,26.55H7.71a1,1,0,1,1,0-2h8.06a1,1,0,0,1,0,2Z"/>
                        <Path className="cls-1" d="M29.14,26.55H21.08a1,1,0,0,1,0-2h8.06a1,1,0,0,1,0,2Z"/>
                        <Path className="cls-1" d="M42.2,26.55H34.14a1,1,0,0,1,0-2H42.2a1,1,0,0,1,0,2Z"/>
                        <Path className="cls-1" d="M34.14,33.59H7.71a1,1,0,0,1,0-2H34.14a1,1,0,0,1,0,2Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

ZcardIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default ZcardIco
