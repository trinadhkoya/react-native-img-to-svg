import React from 'react'
import {Defs, G, Path, Polygon, Svg} from "react-native-svg";

class DiscountIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style,lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>

                <G id="Layer_2" data-name="Layer 2">
                    <G id="Layer_1-2" data-name="Layer 1">
                        <Polygon className="cls-1" fill={lightColor} fillOpacity={0.5}
                                 points="28.4 7.54 28.4 23.75 12.52 33.54 16.23 35.2 31.16 26.41 31.16 9.79 28.4 7.54"/>
                        <Path className="cls-2" fill={fill}
                              d="M16.23,36.2a4.13,4.13,0,0,1-2.07-.56l-12.08-7A4.17,4.17,0,0,1,0,25.07V11.13a4.17,4.17,0,0,1,2.08-3.6l12.08-7a4.16,4.16,0,0,1,4.15,0l12.08,7a4.17,4.17,0,0,1,2.08,3.6V25.07a4.17,4.17,0,0,1-2.08,3.6l-12.08,7A4.26,4.26,0,0,1,16.23,36.2Zm0-34.2a2.15,2.15,0,0,0-1.07.29l-12.08,7A2.15,2.15,0,0,0,2,11.13V25.07a2.15,2.15,0,0,0,1.08,1.87l12.08,7a2.12,2.12,0,0,0,2.15,0l12.08-7a2.17,2.17,0,0,0,1.08-1.87V11.13a2.17,2.17,0,0,0-1.08-1.87l-12.08-7A2.16,2.16,0,0,0,16.23,2Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M11.81,23.75a1,1,0,0,1-.73-1.69l9.39-9.86a1,1,0,0,1,1.45,1.38l-9.39,9.86A1,1,0,0,1,11.81,23.75Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M11.39,16.15A2.13,2.13,0,1,1,13.52,14,2.13,2.13,0,0,1,11.39,16.15Zm0-2.26a.13.13,0,0,0-.14.13c0,.15.27.15.27,0A.13.13,0,0,0,11.39,13.89Z"/>
                        <Path className="cls-2" fill={fill}
                              d="M21.08,24.31a2.13,2.13,0,1,1,2.13-2.13A2.14,2.14,0,0,1,21.08,24.31Zm0-2.26a.13.13,0,0,0-.13.13c0,.14.26.14.26,0A.13.13,0,0,0,21.08,22.05Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

DiscountIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default DiscountIco;
