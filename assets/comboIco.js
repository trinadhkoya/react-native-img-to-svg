import React from 'react'
import {Defs, G, Path, Polygon, Rect, Svg} from "react-native-svg";

class ComboIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style,lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>
                <Defs fill={fill}>
                    {/*<style>.cls-1{fill:#f48990;opacity:0.5;}.cls-2{fill:#eb3a42;}</style>*/}
                </Defs>
                <G id="Layer_2" data-name="Layer 2" fill={fill}>
                    <G id="Layer_1-2" data-name="Layer 1" fill={fill}>
                        <Polygon className="cls-1" fill={lightColor} fillOpacity={0.5} points="48.69 39.76 37.35 39.76 35.73 19 51.17 19 48.69 39.76"/>
                        <Path className="cls-2" fill={fill}
                              d="M30.05,24.38H4.25A1,1,0,0,1,3.46,24a1,1,0,0,1-.18-.86,10,10,0,0,1,9.65-7.46h8.44A10,10,0,0,1,31,23.13a1,1,0,0,1-1,1.25Zm-24.39-2h23a8,8,0,0,0-7.27-4.71H12.93A8,8,0,0,0,5.66,22.38Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M26.66,40.76h-19A4.69,4.69,0,0,1,3,36.08V34.64a1,1,0,0,1,1-1h26.4a1,1,0,0,1,1,1v1.44A4.69,4.69,0,0,1,26.66,40.76ZM5,35.64v.44a2.69,2.69,0,0,0,2.69,2.68h19a2.69,2.69,0,0,0,2.69-2.68v-.44Z"/>
                        <Rect className="cls-1" stroke={fill} strokeWidth={2} fillOpacity={0.5} fill={lightColor} x="1" y="26.68" width="32.1" height="4.66" rx="2.33" ry="2.33"/>

                        <Rect className="cls-2" fill={fill}
                              d="M30.78,32.34H3.33a3.33,3.33,0,0,1,0-6.66H30.78a3.33,3.33,0,0,1,0,6.66ZM3.33,27.68a1.33,1.33,0,0,0,0,2.66H30.78a1.33,1.33,0,0,0,0-2.66Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M48.69,40.76H37.36a1,1,0,0,1-1-.92L34.19,12.08a1,1,0,0,1,.26-.76,1,1,0,0,1,.74-.32h16a1,1,0,0,1,.73.33,1,1,0,0,1,.26.76L49.68,39.85A1,1,0,0,1,48.69,40.76Zm-10.41-2h9.49L50.08,13H36.27Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M43.46,13a1,1,0,0,1-1-1V5.51L33.64,1.93A1,1,0,0,1,33.09.62,1,1,0,0,1,34.4.07l9.43,3.84a1,1,0,0,1,.63.92V12A1,1,0,0,1,43.46,13Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

ComboIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default ComboIco
