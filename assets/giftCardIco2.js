import React from 'react'
import {Defs, G, Path, Rect, Svg} from "react-native-svg";

class GiftCardIco2 extends React.Component {
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
                        <Rect className="cls-1" y="7.65" width="51.75" height="30.21" fill={fill} fillOpacity={0.3}/>
                        <Path className="cls-2"
                              d="M50.81,38.86H.94A.93.93,0,0,1,0,37.94V5.4A5.44,5.44,0,0,1,5.46,0H50.81a.93.93,0,0,1,.94.93v37A.93.93,0,0,1,50.81,38.86ZM1.87,37h48V1.85H5.46A3.57,3.57,0,0,0,1.87,5.4Z"/>
                        <Path className="cls-2" d="M50.81,16H.94a.93.93,0,1,1,0-1.85H50.81a.93.93,0,1,1,0,1.85Z"/>
                        <Path className="cls-2"
                              d="M35.36,38.86a.93.93,0,0,1-.94-.92V.93a.94.94,0,0,1,1.87,0v37A.93.93,0,0,1,35.36,38.86Z"/>
                        <Path className="cls-2"
                              d="M35,15.1a1,1,0,0,1-.37-.08L25,10.91a.93.93,0,0,1-.32-1.48l5.5-5.9a.94.94,0,0,1,1.55.28l4.17,10a.92.92,0,0,1-.21,1A1,1,0,0,1,35,15.1ZM26.91,9.73l6.34,2.69L30.52,5.85Z"/>
                        <Path className="cls-2"
                              d="M35,15.1a.93.93,0,0,1-.65-.27.89.89,0,0,1-.21-1l4.16-10a.91.91,0,0,1,.7-.56,1,1,0,0,1,.86.28l5.49,5.9a.92.92,0,0,1,.23.82.94.94,0,0,1-.55.66L35.36,15A1,1,0,0,1,35,15.1Zm4.47-9.25-2.73,6.57,6.34-2.69Z"/>
                        <Path className="cls-2"
                              d="M29.11,20.36a.94.94,0,0,1-.69-.31.9.9,0,0,1,.07-1.3l5.87-5.27a1,1,0,0,1,1.33.07.93.93,0,0,1-.07,1.31l-5.88,5.26A.94.94,0,0,1,29.11,20.36Z"/>
                        <Path className="cls-2"
                              d="M41.23,20.36a.91.91,0,0,1-.62-.24l-5.88-5.26a.91.91,0,0,1-.07-1.31A.94.94,0,0,1,36,13.48l5.88,5.27a.91.91,0,0,1,.07,1.3A1,1,0,0,1,41.23,20.36Z"/>
                        <Path className="cls-2"
                              d="M16.47,33.67a8.64,8.64,0,0,1-8-5.32.93.93,0,0,1,1.73-.7,6.83,6.83,0,0,0,12.64-.15A.93.93,0,0,1,24,27a.92.92,0,0,1,.55,1.19A8.72,8.72,0,0,1,16.47,33.67Z"/>
                    </G>
                </G>
            </Svg>
        )
    }
}

GiftCardIco2.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default GiftCardIco2
