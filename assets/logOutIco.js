import React from 'react'
import {Defs, G, Path, Svg} from "react-native-svg";

class LogoutIco extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style} = this.props;
        return (
            <Svg viewBox={viewBox} width={width} height={height}>
                <Defs>
                </Defs>
                <G fill={fill}>
                    <G>
                        <Path
                            d="M35,19.07a2,2,0,0,1,2,2v24a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2v-24a2,2,0,0,1,2-2H35m0-2H4a4,4,0,0,0-4,4v24a4,4,0,0,0,4,4H35a4,4,0,0,0,4-4v-24a4,4,0,0,0-4-4Z"/>
                        <Path
                            d="M10.15,18.07a1,1,0,0,1-1-1V10.4a10.4,10.4,0,1,1,20.8,0,1,1,0,1,1-2,0,8.4,8.4,0,1,0-16.8,0v6.67A1,1,0,0,1,10.15,18.07Z"/>
                    </G>
                </G>
            </Svg>

        )
    }
}

LogoutIco.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 25 25'
}

export default LogoutIco
