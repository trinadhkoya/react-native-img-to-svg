import React from 'react'
import Svg, {
    Path
} from 'react-native-svg'

const AlarmIcon = class extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {width, height, fill, stroke, viewBox, style} = this.props;
        return (
            <Svg width={width} height={height} viewBox={viewBox} style={style}>
                <Path stroke={stroke} fill={fill} strokeCap='round' strokeJoin='round' d='M20.5,16.5V11A8.5,8.5,0,0,0,15,3,3,3,0,0,0,9,3,8.49,8.49,0,0,0,3.5,11v5.5a3,3,0,0,1-3,3h23A3,3,0,0,1,20.5,16.5Z'/>
                <Path stroke={stroke} fill={fill} strokeCap='round' strokeJoin='round' d='M15,19.5a3,3,0,0,1-6,0'/>
            </Svg>
        )
    }
}

AlarmIcon.defaultProps = {
    width: 24,
    height: 23,
    stroke: '#fff',
    fill: '#fff',
    viewBox: '0 0 24 23'
}

export default AlarmIcon
