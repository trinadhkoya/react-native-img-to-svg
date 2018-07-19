import React from 'react'
import {Defs, G, Path, Polygon, Svg} from "react-native-svg";

class NewInTownIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style, lightColor} = this.props;
        return (
            <Svg viewBox={viewBox} height={height} width={width}>
                <Defs>
                </Defs>
                <G  data-name="Layer 2" fill={fill}>
                    <G  data-name="Layer 1">
                        <Path 
                              d="M31,30a1,1,0,0,1-.3-.05l-21-6.68a1,1,0,0,1,.6-1.91L30,27.63V2.57L10.11,11.89a1,1,0,0,1-.85-1.81L30.58.09a1,1,0,0,1,1,.07A1,1,0,0,1,32,1V29a1,1,0,0,1-.41.81A1,1,0,0,1,31,30Z"/>
                        <Path 
                              d="M5.5,22.37H3.25A3.25,3.25,0,0,1,0,19.13V14.37a3.26,3.26,0,0,1,3.25-3.25H5.5a1,1,0,0,1,1,1v9.25A1,1,0,0,1,5.5,22.37ZM3.25,13.12A1.26,1.26,0,0,0,2,14.37v4.76a1.25,1.25,0,0,0,1.25,1.24H4.5V13.12Z"/>
                        <Path 
                              d="M33.89,9.85A1,1,0,0,1,33,9.36,1,1,0,0,1,33.38,8l5.1-3a1,1,0,0,1,1,1.72l-5.1,3A1,1,0,0,1,33.89,9.85Z"/>
                        <Path 
                              d="M39,24.57a1,1,0,0,1-.51-.14l-5.1-3a1,1,0,1,1,1-1.72l5.1,3a1,1,0,0,1,.35,1.37A1,1,0,0,1,39,24.57Z"/>
                        <Path  d="M40.67,16H34.79a1,1,0,0,1,0-2h5.88a1,1,0,0,1,0,2Z"/>
                        <Polygon className="cls-2" fill={lightColor}
                                 points="30.16 19.87 9.69 18.5 11.78 22.89 31 29 31 19.66 30.16 19.87"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

NewInTownIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default NewInTownIco;
