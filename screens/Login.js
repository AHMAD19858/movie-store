import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Dimensions, LogBox, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TextInput, AsyncStorage } from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
LogBox.ignoreAllLogs()
export default class login extends React.Component {


  render() {

    return (

      <ImageBackground  source={require('../assets/images/2.jpg')} style={styles.background}>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
          <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }} behavior='position' keyboardVerticalOffset={-120}>
            <View style={styles.blackOverlay}></View>
            <View style={styles.container}>



              <Text>{"\n"}</Text>
              <View style={{ alignSelf: 'center', width: width - 20, }}>
                <Text style={styles.header}>Movie Store</Text>
                <Text style={styles.secondHeader}>Cinema is a matter of what's in the frame and what's out</Text>
              </View>
              <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
              <View style={styles.row}>
                <Text style={{ color: 'white', fontSize: 13 }}>Don't have an account?</Text>
                <Text onPress={() => this.props.navigation.navigate('Signup')}
                  style={styles.signup}> Signup</Text>
              </View>
              <Text>{"\n"}</Text>


              <View style={styles.anotherRow}>
                <View style={styles.whiteOverlay}></View>
           
                <TextInput
                  placeholder='Email'
                  placeholderTextColor="#bdbdbd"
                  returnKeyType="next"
                  keyboardType="email-address"
                  style={styles.input}
                  onChangeText={email => this.setState({ email })}
                />

              </View>

              <Text></Text>

              <View style={styles.anotherRow}>
                <View style={styles.whiteOverlay}></View>
          
                <TextInput
                  placeholder='Password'
                  placeholderTextColor="#bdbdbd"
                  returnKeyType="next"
                  style={styles.input}
                  onChangeText={password => this.setState({ password })}
                />
           
              
              </View>

              <Text>{"\n"}</Text>
              <View style={styles.row}>
                <Text style={{ color: 'white', fontSize: 13 }}>Forgot password?</Text>
                <Text style={styles.signup}> Click here</Text>
              </View>

              <View style={styles.viewButton}>
                < TouchableOpacity onPress={() => this.props.navigation.navigate("Home")}
                  style={styles.loginTouch}>

                  <Text style={{ color: "white" }}> LOGIN  </Text>
                </TouchableOpacity>
              </View>

            </View>


          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>

      </ImageBackground>


    );
  }
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#25282F',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: height,
    position: 'absolute',
  },

  signup: {
    color: 'white',
    borderBottomColor: 'white',
    borderBottomWidth: .5,
    fontSize: 13
  },

  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  anotherRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingLeft: 20,
    width: width - 70,
    height: 50,
    alignSelf: 'center',
  },

  whiteOverlay: {
    backgroundColor: 'white',
    opacity: 0.2,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: 20,

  },
  blackOverlay: {
    backgroundColor: 'black',
    opacity: 0.6,
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height
  },

  input: {
    color: 'white',
    flex: 1,
    paddingLeft: 15
  },

  header: {
    color: 'white',
    fontSize: 34,
    alignSelf: 'center'
  },

  secondHeader: {
    color: '#C5C2C2',
    fontSize: 13,
    alignSelf: 'center',
    top: 2,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: width,
    height: height,
    paddingLeft: 60,
    paddingRight: 50,

  },

  viewButton: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf:"center", 
    alignContent: "center",
    marginTop:10,
    marginBottom:10
  },

  loginTouch: {
    borderWidth:1,
    height:"70%", 
    width: "70%",
    justifyContent: "center",
    alignItems: "center", 
    borderRadius: 10, 
    backgroundColor:"#25282F",

  },

});
