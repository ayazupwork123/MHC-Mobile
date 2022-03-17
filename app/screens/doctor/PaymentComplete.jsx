import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import GradientButton from "../../components/GradientButton";
import Colors from "../../config/colors";
import { w, h } from "../../config/customSize";
import i18n from "../../utils/i18n";

const PaymentComplete = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/success.png")}
          resizeMode="contain"
          style={styles.backgroundImage}
        >
          <View style={styles.imageContainer}>
            <Image source={require("../../assets/tick-icon.png")} />
          </View>
        </ImageBackground>
         
        <View style={{flex: 1, alignItems: "center", width: "90%"}}>
          <Text style={[styles.paymentText,  {marginBottom: 0}]}>
            {i18n.t("doctor.PaymentComplete.Payment")}
          </Text>
          <Text style={styles.paymentText}>
            {i18n.t("doctor.PaymentComplete.SuccessFullyComplete")}
          </Text>
          <Text style={styles.textCenter}>
            {i18n.t("doctor.PaymentComplete.Congratulations")}
          </Text>
        </View>
      
        <View style={styles.button}>
          <GradientButton
            text="Continue"
            borderRadius={10}
            height={54}
            fontSize={18}
            width={"90%"}
          />
        </View>
      </View>
    </>
  );
};

export default PaymentComplete;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  backgroundImage: {
    justifyContent: "center",
    width: w(60),
    height: h(60),
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center"
  },
  button: {
    width:'100%',
    marginBottom:55
  },
  imageContainer: {
    width: w(30),
    height: w(30),
    borderRadius: w(100 / 2),
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  paymentText: {
    fontSize: w(6),
    fontWeight: "bold",
    marginBottom: 20,
  },
});