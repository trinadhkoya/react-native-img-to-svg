import React from 'react'
import {Circle, Defs, G, Line, Path, Rect, Svg} from "react-native-svg";

class BookingIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width} fill={fill}>
                <Defs fill={fill} stroke={stroke} strokeWidth={stroke}>
                    {/*<style>.cls-1{fill:#eb3a42;}.cls-2{fill:#fff;}.cls-3{fill:none;stroke:#eb3a42;stroke-miterlimit:10;stroke-width:2px;}</style>*/}
                </Defs>
                <G id="Layer_2" data-name="Layer 2" fill={fill}>
                    <G id="Layer_1-2" data-name="Layer 1" fill={fill}>
                        <Path className="cls-1" fill={fill}
                              d="M40.54,44.18H1a1,1,0,0,1-1-1V10A5.84,5.84,0,0,1,5.83,4.18H40.54a1,1,0,0,1,1,1v38A1,1,0,0,1,40.54,44.18ZM2,42.18H39.54v-36H5.83A3.84,3.84,0,0,0,2,10Z"/>

                        <Circle className="cls-1" cx="21.21" cy="29.15" r="6.94" fill={fill}/>

                        <Rect className="cls-2" x="16.55" y="30.22" width="4.85" height="1.29" rx="0.64" ry="0.64"
                              fill={'#fff'}
                              transform="translate(27.38 -4.37) rotate(45)"/>

                        <Rect className="cls-2" x="18.6" y="29.09" width="8.06" height="1.29" rx="0.64" ry="0.64"
                              fill={'#fff'}
                              transform="translate(-14.4 24.71) rotate(-45)"/>

                        <Line stroke={fill} className="cls-3" x1="41.54" y1="16.55" x2="1.02" y2="16.55" fill={fill}
                              strokeWidth={2}/>

                        <Rect className="cls-1" x="10.6" width="3" height="5.63" rx="1.5" ry="1.5" fill={fill}/>

                        <Rect className="cls-1" x="31.29" width="3" height="5.63" rx="1.5" ry="1.5" fill={fill}/>
                    </G>
                </G>
            </Svg>

        )
    }
}

BookingIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default BookingIco
