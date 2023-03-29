import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const maxAllowedWidth = deviceWidth - deviceWidth * 0.075;

export {maxAllowedWidth, deviceHeight, deviceWidth};
