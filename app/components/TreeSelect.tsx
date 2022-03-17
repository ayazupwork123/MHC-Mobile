// 30 TreeView
import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import TreeSelect from 'react-native-tree-select';

interface Item {
  id: string;
  name: string;
  parentId: string;
  children: [Item]
}

interface Props {
  value?: String;
  setValue?: (item: any, routes: any) => void;
  items? : Array<Item>
}
class TreeView extends Component<Props> {

  state = {
    result: null,
    data: [{
      "id":"1",
      "name":"test 1",
      "parentId":"0",
      "children": [{
        "id":"1.1",
        "parentId":"1",
        "name": "test 1.1"
      },{
        "id":"1.2",
        "parentId":"1",
        "name": "test 1.2",
        "children": [{
          "id":"1.2.1",
          "parentId":"1.2",
          "name": "test 1.2.1"
        },{
          "id":"1.2.2",
          "parentId":"1.2",
          "name": "test 1.2.2"
        },{
          "id":"1.2.3",
          "parentId":"1.2",
          "name": "test 1.2.3"
        }]
      },{
        "id":"1.3",
        "parentId":"1",
        "name": "test 1.3"
      }]
    }]
  }

  static defaultProps = {
    value: undefined,
    setValue: undefined,
    items: undefined
  }

  _onClickLeaf = ({ item, routes }) => {
    console.log(item.id);
  };

  render() {

    const { data } = this.state;
    const { value, setValue, items } = this.props;

    return (
      <View style={ styles.container }>
        <TreeSelect
          data={items ? items : data}
          defaultSelectedId={value ? [value] : []}
          isShowTreeId={false}
          selectType="single"
          itemStyle={styles.text}
          selectedItemStyle={styles.selected}
          onClickLeaf={setValue ? setValue : this._onClickLeaf}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 10,
    borderColor: "#67729429",
    borderWidth: 1,
  },
  text: {
    fontFamily: "Rubik-Light",
    color: "black",
    fontSize: 16,
  },
  selected: {
    backgroundColor: '#f7edca',
    fontSize: 16,
    color: 'black'
  }
});

export default TreeView