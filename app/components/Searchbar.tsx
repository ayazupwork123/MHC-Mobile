import React, { FunctionComponent } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import CloseIcon from '../assets/svg/CloseIcon';
import SearchIcon from '../assets/svg/SearchIcon';
import i18n from '../utils/i18n';

interface Props {
  searchText: string;
  isAtSearchScreen?: boolean;
  setSearchText: (value: string) => void;
  searchHandler: (text?: any) => void;
  cancelSearch: () => void;
  leftIcon?: boolean;
}

const Searchbar: FunctionComponent<Props> = (props) => {
  const { searchText, leftIcon = false, isAtSearchScreen = false, setSearchText, searchHandler, cancelSearch } = props;
  return (
    <View style={styles.searchView}>
      {leftIcon && (
        <TouchableOpacity style={{paddingLeft: 10}} disabled={searchText === ''} onPress={() => searchHandler()}>
          <SearchIcon />
        </TouchableOpacity>
      )}
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}>
        <TextInput value={searchText} onChangeText={(text: string) => {
          setSearchText(text);
          if(isAtSearchScreen) {
            searchHandler(text);
          }
        }} placeholder={i18n.t('Dentist')} style={{ marginLeft: leftIcon ? 0 : 10, color: '#677294', fontFamily: "Rubik-Regular", width: '85%' }} />
      </View>
      {searchText === '' ? <View style={{width: "5%"}}/> : (
        <TouchableOpacity style={{ width: "5%"}} onPress={cancelSearch}>
          <CloseIcon />
        </TouchableOpacity>
      )}
      {!leftIcon && (
        <TouchableOpacity disabled={searchText === ''} onPress={() => searchHandler()}>
          <SearchIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 50, width: '100%', backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 10
  },

})

export default Searchbar;