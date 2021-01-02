import React from 'react'
import { Modal, View, Text, Dimensions, TouchableWithoutFeedback, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
const deviceHeight = Dimensions.get("window").height
const width = Dimensions.get('screen').width;
export default class comment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    show = () => {
        this.setState({ show: true })
    }

    close = () => {
        this.setState({
            show: false
        })
    }

    renderOutsideTouchable(onTouch) {
        const view = <View style={{ flex: 1, width: '100%' }} />
        if (!onTouch) return view

        return (
            <TouchableWithoutFeedback onPress={onTouch} style={{ flex: 1, width: '100%' }}>
                {view}
            </TouchableWithoutFeedback>
        )

    }
    renderTitle = () => {
        const { title } = this.props
        return (
            <View>
                <Text style={{
                    color: "#182e44",
                    fontSize: 20,
                    fontWeight: '500',
                    margin: 15
                }}>
                    {title}
                </Text>


            </View>
        )
    }

    renderContent = () => {
        return (
            <View style={styles.comment}>
                <TextInput
                    placeholder='Your Comment'
                    placeholderTextColor="#a1a1a1"
                    returnKeyType="go"
                    style={styles.input}
                    multiline={true}
                />
                <TouchableOpacity onPress={this.close}>

                    <Image source={require('../assets/images/send1.png')} style={{
                        width: 32, height: 32,
                        resizeMode: 'contain'
                    }} />
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        let { show } = this.state
        const { onTouchOutside } = this.props
        return (
            <Modal
                animationType={'fade'}
                visible={show}
                transparent={true}
                onRequestClose={this.close}
            >

                <View style={{ flex: 1, backgroundColor: '#000000AA', justifyContent: 'flex-end' }}>
                    {this.renderOutsideTouchable(onTouchOutside)}
                    <View style={{
                        backgroundColor: '#ffffff',
                        width: '100%',
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        paddingHorizontal: 10,
                        maxHeight: deviceHeight * 0.4
                    }}>
                        {this.renderTitle()}
                        {this.renderContent()}
                    </View>

                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({

    input: {
        paddingLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: 'black',
        padding: 10,
        borderRadius: 2,
        width: width - 80
    },
    comment: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: 5
    }
})