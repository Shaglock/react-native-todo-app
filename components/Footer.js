import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Footer extends Component {
  render() {
    const { filter } = this.props;
    return (
      <View style={styles.container}>
        <Text>{this.props.count} remaining</Text>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filter, filter === "ALL" && styles.selected]} onPress={() => this.props.onFilter("ALL")}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === "ACTIVE" && styles.selected]} onPress={() => this.props.onFilter("ACTIVE")}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === "COMPLETED" && styles.selected]} onPress={() => this.props.onFilter("COMPLETED")}>
            <Text>Completed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.clearComplete} onPress={this.props.onClearComplete}>
          <Text style={{ color: "red" }}>Clear Completed</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  filters: {
    flexDirection: "row"
  },
  filter: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent"
  },
  selected: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderColor: "rgba(175, 47, 47, 0.2)"
  },
  clearComplete: {
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginVertical: 3
  }
})