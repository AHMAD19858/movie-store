import React from 'react';
import { StyleSheet, Text, View, FlatList, Keyboard, Dimensions, Image,TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('screen').width;
const listItems = ['The Shawshank Redemption (1994)', 'The Godfather (1972)', 'The Godfather: Part II (1974)', 'The Dark Knight (2008)', '12 Angry Men (1957)', 'Pulp Fiction (1994)', 'The Lord of the Rings: The Return of the King (2003)', 'The Good, the Bad and the Ugly (1966)', ' The Lord of the Rings: The Fellowship of the Ring (2001)', 'Fight Club (1999)', 'Forrest Gump (1994)', 'Inception (2010)']
export default class Search extends React.Component{

  state = {
    searchBarFocused: false
  }

  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
    this.keyboardWillShow = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow)
    this.keyboardWillHide = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)


  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true })
  }

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false })
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 80, backgroundColor: '#22273B', justifyContent: 'center', paddingHorizontal: 5 }}>

          <Animatable.View animation="slideInRight" duration={500}  style={{ borderRadius: 25,height: 50, backgroundColor: 'white', flexDirection: 'row', padding: 5, alignItems: 'center' }} >
            <Animatable.View animation={this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"} duration={400}>
              <Icon name={this.state.searchBarFocused ? "md-arrow-back" : "ios-search"} style={{ fontSize: 24, color:'#22273B' }} />
            </Animatable.View>
            <TextInput placeholder="Search" style={{ fontSize: 15, marginLeft: 15, flex: 1 }} />
          </Animatable.View>

        </View>

        <FlatList
          style={{ backgroundColor: this.state.searchBarFocused ? '#22273B' : '#22273B' }}
          data={listItems}
          renderItem={({ item }) => <Text style={{ padding: 20, fontSize: 20,color:'#7D7E84' }}>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  animation: {
    height: 40,
    backgroundColor: '#7D7E84',
    borderRadius: 25,
    padding: 5,
    width:width-10
  }
});