import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Dimensions, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

var styles = {
    wrapper: {
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        /*  alignSelf:'center' */
    },
    text: {

        fontSize: 20,
        color: '#ffffff'
    },
    background: {
        flex: 1,
        backgroundColor: '#22273B',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
        position: 'absolute',
    },
    image1: {
        width: 200,
        height: 200,
        padding: 20
    },
    image3: {
        width: 200,
        height: 200,
        padding: 20
    },
    image2: {
        width: 250,
        height: 200,
        padding: 20
    },
    getStarted: {
        borderWidth: 22,
        height: 40,
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,   
    },
    viewButton: {
        width: "90%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        
    },
    textSub: {
        width: "70%",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        alignContent: "center",
        color: '#616161'
    },
}

export default class Welcome extends React.Component {

    render() {
        return (

            <ImageBackground style={styles.background}>
                <Text>{"\n"} {"\n"}{"\n"}{"\n"}{"\n"}</Text>

                <Swiper style={styles.wrapper} autoplay={false} activeDotColor={'#2D3038'}>
                    <View testID="Hello" style={styles.slide}>
                        <Image style={styles.image1} source={require('../assets/images/22.png')} />
                        <Text></Text>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
                        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                    </View>
                    <View testID="Beautiful" style={styles.slide}>
                        <Image style={styles.image2} source={require('../assets/images/33.png')} />
                        <Text></Text>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
                        <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
                    </View>
                    <View testID="Simple" style={styles.slide}>
                        <Image style={styles.image3} source={require('../assets/images/44.png')} />
                        <Text></Text>
                        <Text style={styles.text}>Lorem ipsum dolor sit amet</Text>
                        <Text>{"\n"}{"\n"}{"\n"}</Text>
                    </View>

                </Swiper>

                <View style={styles.viewButton}>
                    < TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}
                        style={styles.getStarted}>

                        <Text style={{ color: "white" }}> Get Started  </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        );
    }
}
