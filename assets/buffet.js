import React from 'react'
import {Defs, G, Path, Polygon, Svg} from "react-native-svg";

class Buffet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width} fill={fill}>
                <Defs>
                    {/*<style>.cls-1,.cls-2{fill:#f48990;}.cls-2{opacity:0.5;}.cls-3{fill:#eb3a42;}</style>*/}
                </Defs>
                <G id="Layer_2" data-name="Layer 2">
                    <G id="Layer_1-2" data-name="Layer 1">
                        <Polygon className="cls-1" points="52.62 7.48 58.21 3.65 63.79 6.01 52.62 11.26 52.62 7.48"
                                 fill={lightColor}/>
                        <Polygon className="cls-2" points="52.21 35.08 43.5 28.54 53.04 22.83 61.75 29.38 52.21 35.08"
                                 fill={lightColor}/>
                        <Path className="cls-3" fill={fill}
                              d="M36.5,30.84H3.69a1,1,0,0,1-1-1V25.68A15.76,15.76,0,0,1,18.44,9.93h3.31A15.76,15.76,0,0,1,37.5,25.68v4.16A1,1,0,0,1,36.5,30.84Zm-31.81-2H35.5V25.68A13.76,13.76,0,0,0,21.75,11.93H18.44A13.76,13.76,0,0,0,4.69,25.68Z"/>
                        <Path className="cls-3" fill={fill}
                              d="M20.39,11.21a3.66,3.66,0,1,1,3.66-3.66A3.66,3.66,0,0,1,20.39,11.21Zm0-5.31a1.66,1.66,0,0,0,0,3.31,1.66,1.66,0,1,0,0-3.31Z"/>
                        <Path className="cls-3" fill={fill}
                              d="M31.14,23.37a1,1,0,0,1-1-1A6.4,6.4,0,0,0,23.75,16a1,1,0,0,1,0-2,8.39,8.39,0,0,1,8.39,8.39A1,1,0,0,1,31.14,23.37Z"/>
                        <Path className="cls-3" fill={fill}
                              d="M39.79,34.7H1a1,1,0,0,1-1-1V29.84a1,1,0,0,1,1-1H39.79a1,1,0,0,1,1,1V33.7A1,1,0,0,1,39.79,34.7ZM2,32.7H38.79V30.84H2Z"/>
                        <Path className="cls-3" fill={fill}
                              d="M52.62,12.26a1,1,0,0,1-.53-.16,1,1,0,0,1-.47-.84V1a1,1,0,0,1,.46-.84,1,1,0,0,1,1-.07l11.17,5a1,1,0,0,1,0,1.82L53.05,12.16A1.08,1.08,0,0,1,52.62,12.26Zm1-9.71V9.68L61.39,6Z"/>
                        <Path className="cls-3" fill={fill}
                              d="M52.21,36.08a.92.92,0,0,1-.6-.2L42.9,29.34a1,1,0,0,1-.4-.85,1,1,0,0,1,.49-.81L52.53,22a1,1,0,0,1,1.11.05l8.71,6.55a1,1,0,0,1,.4.85,1,1,0,0,1-.49.8l-9.54,5.71A1,1,0,0,1,52.21,36.08Zm-6.92-7.44,7,5.24L60,29.28,53,24Z"/>
                        <Path className="cls-3" d="M52.62,30a1,1,0,0,1-1-1V5.52a1,1,0,0,1,2,0V29A1,1,0,0,1,52.62,30Z"
                              fill={fill}/>
                    </G>
                </G>
            </Svg>

        )
    }
}

Buffet.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default Buffet
