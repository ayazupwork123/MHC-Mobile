import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Carousel, {
  Pagination,
  AdditionalParallaxProps,
  CarouselProperties,
} from "react-native-snap-carousel";
import SubscriptionPlanCard from "../../components/doctor/SubscriptionPlanCard"
import Header from "../../components/Header";
import i18n from "../../utils/i18n";
import Button from "../../components/GradientButton";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../config";
import AppScreen from "../../components/AppScreen";
import { COLORS } from "../../config";

interface ICarouselData {
  type: "Basic" | "Standard" | "Premium";
  price: number;
  title: string;
  details: string;
  additionalInfo: string;
}
const carouselData: ICarouselData[] = [
  {
    title: i18n.t("doctor.AllSubscriptionPlan.BasicPlan"),
    type: "Basic",
    price: 100,
    details: "•Blah Blah \n•Blah Blah\n•Blah Blah",
    additionalInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: i18n.t("doctor.AllSubscriptionPlan.StandardPlan"),
    type: "Standard",
    price: 200,
    details: "•Blah Blah \n•Blah Blah\n•Blah Blah",
    additionalInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
  {
    title: i18n.t("doctor.AllSubscriptionPlan.PremiumPlan"),
    type: "Premium",
    price: 300,
    details: "•Blah Blah \n•Blah Blah\n•Blah Blah",
    additionalInfo:  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  },
];
const AllSubscriptionPlan = ({ navigation }: any) => {
  const [entries, setEntries] = useState<ICarouselData[]>([]);

  useEffect(() => {
    setEntries(carouselData);
  }, []);

  const CarouselItem = (
    item: { item: ICarouselData; index: number },
    parallaxProps?: AdditionalParallaxProps
  ): React.ReactNode => {
    const settingsPaging = {
      containerStyle: styles.paging,
      dotsLength: carouselData.length,
      activeDotIndex: item.index,
      dotStyle: styles.dotStyle,
      inactiveDotStyle: styles.inactiveDotStyle,
      inactiveDotOpacity: 0.4,
      inactiveDotScale: 1,
    };

    return (
      <>
        <View key={item.index} style={styles.cardContainer}>
          <SubscriptionPlanCard cardType={item.item.type} price={item.item.price}/>
          <Pagination {...settingsPaging} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            height: '31%',
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <Text style={styles.title}>{item.item.title}</Text>
          <Text style={styles.subTitle}>
            {i18n.t("doctor.AllSubscriptionPlan.Price")}
            <Text style={{ ...styles.subTitle, color: COLORS.blue }}>
            {`${i18n.t("components.SubscriptionPlanCard.CurrencySign")} ${item.item.price}/`}{i18n.t("components.SubscriptionPlanCard.Year")}
            </Text>
          </Text>
          <Text style={{ ...styles.subTitle, marginBottom: 0 }}>
            {i18n.t("doctor.AllSubscriptionPlan.PlanDetails")}
          </Text>
          <Text style={{ ...styles.subTitle, color: COLORS.blue }}>
            {item.item.details}
          </Text>
          <Text style={{ ...styles.title, marginTop: 20 }}>
            {i18n.t("doctor.AllSubscriptionPlan.AditionalInfo")}
          </Text>
          <Text style={styles.aditionalInfo}>{item.item.additionalInfo}</Text>
        </ScrollView>
      </>
    );
  };
  const settingsCarousel: CarouselProperties<ICarouselData> = {
    sliderWidth: SCREEN_WIDTH,
    itemWidth: SCREEN_WIDTH - 30,
    inactiveSlideOpacity: 1,
    data: [...entries] as ReadonlyArray<ICarouselData>,
    renderItem: CarouselItem as any,
    hasParallaxImages: true,
  };

  return (
    <AppScreen>
      <Header style={{height: 'auto', marginBottom: 20}} title={i18n.t("doctor.AllSubscriptionPlan.PlanDetails")} />
      <Text style={{ ...styles.title, marginLeft: 20 }}>
        {" "}
        {i18n.t("doctor.AllSubscriptionPlan.SelectPlan")}
      </Text>
      <Carousel  {...settingsCarousel} />

      <View style={styles.buttonContainer}>
        <Button
          text={i18n.t("doctor.AllSubscriptionPlan.ChoosePlan")}
          onPress={() => navigation.navigate("SignUp")}
          marginTopHide
          borderRadius={10}
          height={50}
          fontSize={16}
        />
      </View>
    </AppScreen>
  );
};
export default AllSubscriptionPlan;

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: SCREEN_HEIGHT * 0.3,
    alignSelf: "center",
    marginBottom: 10,
  },
  title: {
    textAlign: "left",
    fontSize: 18,
    fontFamily: "Rubik-Medium",
    marginBottom: 20,
  },
  subTitle: {
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Rubik-Medium",
    marginBottom: 10,
  },
  aditionalInfo: {
    color: COLORS.blue,
    fontFamily: "Rubik-Light",
    marginTop: 0,
    textAlign: "justify",
    fontSize: 14,
  },
  paging: {
    paddingVertical: 0,
    height: "20%",
    alignSelf: "center",
    marginBottom: 30
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.themeGradientColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  inactiveDotStyle: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.darkerGrey,
  },
  buttonContainer: {
    flex: 0.8,
    marginBottom: SCREEN_WIDTH * 0.06,
    marginTop: 10,
    justifyContent: "flex-end",
  },
});