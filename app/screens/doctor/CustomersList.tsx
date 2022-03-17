// screen M2.1 Customers List screen
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import AppScreen from "../../components/AppScreen";
import CustomerCard from "../../components/doctor/CustomerCard";
import Header from "../../components/Header";
import Searchbar from "../../components/Searchbar";
import i18n from "../../utils/i18n";

interface IUser {
  name: string;
  gender: string;
  location: string;
  reason: string;
  image: string;
}
  
function CustomersList() {
  const [data, setData] = useState<IUser[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  const cancelSearch = () => setSearchTerm("")

  const handleChange = (event: string) => {
      setSearchTerm(event);
    };
    useEffect(() => {
      const results = data.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }, [searchTerm]);

  useEffect(() => {
    const dummyData = () => {
      const cards = [
        {
          name: "Eduard Popescu",
          gender: "male",
          location: "Bucharest",
          reason: "tooth",
          image: "https://i2.wp.com/captureit.photography/wp-content/uploads/2021/01/Ashley-1-2.jpg?resize=500%2C400&ssl=1",
        },
        {
          name: "Rocker Mihaescu",
          gender: "male",
          location: "Bucharest",
          reason: "tooth",
          image: "https://i2.wp.com/captureit.photography/wp-content/uploads/2021/01/Ashley-1-2.jpg?resize=500%2C400&ssl=1",
        },
        {
          name: "Andreea Ghenea",
          gender: "female",
          location: "London",
          reason: "ear",
          image: "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
        },
        {
          name: "Georgiana Ciulea",
          gender: "female",
          location: "Ontario",
          reason: "diabet",
          image: "https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg",
        }
      ]
      setTimeout(() => {
        setData(cards);
        setSearchResults(cards)
      }, 1000);
    };
    dummyData();
  }, []);

  return (
    <AppScreen>
      <Header title={i18n.t("doctor.CustomersList.title")} />
      <View style={styles.searchContainer}>
        <Searchbar setSearchText={handleChange} searchText={searchTerm} cancelSearch={cancelSearch} placeholder="Handwerker" />
      </View>
      <ScrollView style={styles.scrollView}>
        {searchResults.map((i, key) => (
          <View key={key} style={styles.card}>
            <CustomerCard
              gender={i.gender}
              image={i.image}
              location={i.location}
              name={i.name}
              reason={i.reason}
              buttonText={i18n.t("Examination")}
            />
          </View>
        ))}
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  searchContainer: {
    paddingHorizontal: 20
  },
  card: {
    marginVertical: 10
  }
});

export default CustomersList;
