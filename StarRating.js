//This is an example code to make a Star Rating Bar //
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
//import all the components we are going to use.

export default class StarRating extends Component<{}> {
  constructor() {
    super();
    this.state = {
        //To set the default Star Selected
      default_Rating: 0,
        //To set the max number of Stars
      max_Rating: 5,
      starImg : 'http://aboutreact.com/wp-content/uploads/2018/08/star_filled.png',
      starEmpImg:'http://aboutreact.com/wp-content/uploads/2018/08/star_corner.png'
    };
  }
  updateRating(key) {
    this.setState({ default_Rating: key });
    //Keeping the Rating Selected in state
  }
  render() {
    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (var i = 1; i <= this.state.max_Rating; i++) {
      React_Native_Rating_Bar.push(
        <TouchableOpacity
          activeOpacity={0.7}
          key={i}
          onPress={this.updateRating.bind(this, i)}>
          <Image
            style={styles.StarImage}
            source={
              i <= this.state.default_Rating
                ? { uri: this.state.starImg }
                : { uri: this.state.starEmpImg }
            }
          />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.MainContainer}>
        <Text style={styles.textStyle}>How was your experience with us</Text>
        <Text style={styles.textStyleSmall}>Please Rate Us</Text>
        {/*View to hold our Stars*/}
        <View style={styles.childView}>{React_Native_Rating_Bar}</View>

        <Text style={styles.textStyle}>
        {/*To show the rating selected*/}
          {this.state.default_Rating} / {this.state.max_Rating}
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() => alert(this.state.default_Rating)}>
          {/*Clicking on button will show the rating as an alert*/}
          <Text>Get Selected Value</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  childView: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  StarImage: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
    tintColor:"black",
    marginLeft:5
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,

    color: '#000',
    marginTop: 15,
  },
});
