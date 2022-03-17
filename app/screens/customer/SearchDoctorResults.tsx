// screen U1.2 Find doctors screen
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
} from "react-native";
import i18n from "../../utils/i18n";
import { SCREEN_WIDTH } from "../../config";
import DoctorCard from "../../components/customer/DoctorCard";
import FloatingFilterButton from "../../components/FloatingFilterButton";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";

interface OwnProps {
  route: {
    params: {
      searchText: string;
      searchResultList: any;
      doctors: any;
    };
  };
}

function DoctorResultsList({ route }: OwnProps) {
  const { searchText, searchResultList, doctors } = route.params;
  const [_searchText, setSearchText] = useState<string>("");
  const [_searchResuls, setSearchResuls] = useState<any>(null);

  useEffect(() => {
    setSearchText(searchText);
    setSearchResuls(searchResultList);
  }, [searchResultList]);

  const cancelSearch = () => {
    setSearchText("");
    setSearchResuls(null);
  };

  const searchHandler = (text = null) => {
    let textToSearch = "";
    if (text) {
      textToSearch = text;
    } else {
      textToSearch = _searchText;
    }
    const searchResultList = doctors.filter((item: any) => {
      return item.title.toLowerCase() === textToSearch.toLowerCase();
    });
    setSearchResuls(searchResultList);
  };

  const favouriteToggleHandler = (id: number) => {
    
    // call api here for favourite toggle!


    // Updating data
    const tempList = _searchResuls.map((element: any) => {
      if(element.id === id) {
        element.isFavorite = !element.isFavorite;
      }
      return element;
    });
    setSearchResuls(tempList);
  };

  const renderDoctors = ({ item }: { item: any }) => {
    return (
      <DoctorCard
        {...item}
        buttonText={i18n.t("Book Now")}
        navigateTo="DoctorDetails"
        favouriteToggleHandler={favouriteToggleHandler}
      />
    );
  };

  const filterClickHandler = () => {
    Alert.alert("Filter Modal", "Here, filter modal will be placed!");
  };

  return (
    <View style={styles.container}>
      <FloatingFilterButton
        filterClickHandler={filterClickHandler}
        floatingButtonStyles={styles.filterButton}
      />
      <AppScreenKeyboardHide>
        <View
          style={{ height: "100%", alignItems: 'center' }}
        >
          <Header title={i18n.t("Find Doctors")} />
          <View style={{ width: "90%" }}>
            <Searchbar
              searchText={_searchText}
              setSearchText={setSearchText}
              searchHandler={searchHandler}
              cancelSearch={cancelSearch}
              isAtSearchScreen={true}
            />
          </View>
          {_searchResuls && _searchResuls.length !== 0 ? (
            <FlatList
              data={_searchResuls}
              style={{ marginBottom: 10, marginTop: 20, width: "90%" }}
              keyExtractor={(item: any, i: any) => i}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={false}
              renderItem={renderDoctors}
            />
          ) : (
            <Text style={{ marginTop: 25 }}>No result found.</Text>
          )}
        </View>
      </AppScreenKeyboardHide>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  hlistContainer: {
    backgroundColor: "#fff",
    height: 130,
    width: 100,
    borderRadius: 6,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
    // justifyContent: 'center',
    marginBottom: 20,
    marginHorizontal: 2,
    marginRight: 10,
  },
  heartView: {
    alignItems: "flex-end",
    width: "90%",
    marginTop: 5,
  },
  hheartView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 8,
  },
  featureView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  featureText: {
    fontSize: 18,
    fontFamily: "Rubik-Regular",
  },
  seeall: {
    fontFamily: "Rubik-Regular",
    fontSize: 12,
    color: "#677294",
    marginRight: 3,
    marginBottom: 2,
  },
  listAmount: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 11,
    fontFamily: "Rubik-Regular",
  },
  filterButton: {
    position: "absolute",
    bottom: 7,
    right: SCREEN_WIDTH * 0.05,
    width: 48,
    height: 48,
    zIndex: 99,
  },
});

export default DoctorResultsList;