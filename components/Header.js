import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.props.onToggleAllComplete}>
          <Text
            style={styles.checkMark}>
            {String.fromCharCode(10003)}
          </Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          value={this.props.value}
          placeholder="What needs to be done?"
          blurOnSubmit={false}
          returnKeyType="done"
          onChangeText={this.props.onChange}
          onSubmitEditing={this.props.onAddItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 50,
    marginLeft: 16
  },
  checkMark: {
    fontSize: 30,
    color: "#CCC"
  },
  header: {
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
})