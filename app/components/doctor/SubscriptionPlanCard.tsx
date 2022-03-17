import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import i18n from "../../utils/i18n";
import Colors from "../../config/colors";
import { FONT1MEDIUM, FONT1REGULAR } from "../../config";
import ImageBasic from "../../assets/PlanBasic.png";
import ImageStandard from "../../assets/PlanStandard.png";
import ImagePremium from "../../assets/PlanPremium.png";
import { SCREEN_WIDTH } from "../../config/index";

interface Props {
  cardType: "Basic" | "Standard" | "Premium";
  price?: number;
}

const SubscriptionPlanCard = ({ cardType, price }: Props) => {
  const renderCard = (source: any, name: any, price: number, info: any) => (
    <View style={styles.container}>
      <ImageBackground source={source} style={styles.backgroundImage}>
        <Text style={styles.planName}>{name}</Text>
        <Text style={styles.valuePerYear}>
          {`${i18n.t("components.SubscriptionPlanCard.CurrencySign")} ${price}/`}
          <Text style={styles.yearText}>{i18n.t("components.SubscriptionPlanCard.Year")}</Text>
        </Text>
        <Text style={styles.additionalInfo}>{info}</Text>
      </ImageBackground>
    </View>
  );

  return {
    Basic: renderCard(
      ImageBasic,
      i18n.t("components.SubscriptionPlanCard.BasicPlan"),
      price || 20,
      i18n.t("components.SubscriptionPlanCard.BasicPlanInfo")
    ),
    Standard: renderCard(
      ImageStandard,
      i18n.t("components.SubscriptionPlanCard.StandardPlan"),
      price || 50,
      i18n.t("components.SubscriptionPlanCard.StandardPlanInfo")
    ),
    Premium: renderCard(
      ImagePremium,
      i18n.t("components.SubscriptionPlanCard.PremiumPlan"),
      price || 100,
      i18n.t("components.SubscriptionPlanCard.PremiumPlanInfo")
    ),
  }[cardType];
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.85,
    height: SCREEN_WIDTH * 0.47,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  planName: {
    fontFamily: FONT1MEDIUM,
    color: Colors.white,
    fontSize: 16,
    paddingTop: "5%",
  },
  valuePerYear: {
    fontFamily: FONT1MEDIUM,
    color: Colors.white,
    fontSize: 20,
    paddingTop: "10%",
  },
  yearText: {
    fontFamily: FONT1MEDIUM,
    color: Colors.white,
    fontSize: 12,
  },
  additionalInfo: {
    width: "80%",
    fontFamily: FONT1REGULAR,
    color: Colors.white,
    fontSize: 13,
    textAlign: "justify",
    paddingTop: "10%",
  },
});

export default SubscriptionPlanCard;
