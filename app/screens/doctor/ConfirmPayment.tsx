// screen U4.2 Examinations Details screen
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppScreenKeyboardHide from "../../components/AppScreenKeyboardHide";
import GradientButton from "../../components/GradientButton";
import Header from "../../components/Header";
import i18n from "../../utils/i18n";
import { FONT1MEDIUM } from "../../config";
import Colors from "../../config/colors";
import { COLORS } from "../../config";
import { w, h, fs } from "../../config/customSize";

interface CheckBoxProps {
  checked: boolean;
  setChecked: (value: boolean) => void;
}

function MyCheckbox(props: CheckBoxProps) {
  const { checked, setChecked } = props;
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Ionicons name="checkmark" size={18} color={COLORS.blue} />}
    </Pressable>
  );
}

function ConfirmPayment({navigation}: any) {

  const [checked, setChecked] = useState(true);

  return (
    <AppScreenKeyboardHide>
      <Header title={i18n.t("doctor.ConfirmPayment.ConfirmPlan")} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.columnElement}>
            <Text>{i18n.t("doctor.ConfirmPayment.Description")}</Text>
            <Text>{i18n.t("doctor.ConfirmPayment.Subtotal")}</Text>
          </View>
          <View style={styles.line}></View>
          <Text style={styles.yearText}>{i18n.t("doctor.AllSubscriptionPlan.BasicPlan")}</Text>
          <Text style={styles.yearText}>{i18n.t("doctor.AllSubscriptionPlan.BasicPlan")}</Text>
          <View style={{ marginBottom: w(3) }}>
            <View style={styles.dotText}>
              <Text style={styles.dotCircle}>.</Text>
              <Text>Lorem Ipsum is simply dummy</Text>
            </View>

            <View style={styles.dotText}>
              <Text style={styles.dotCircle}></Text>
              <Text>Lorem Ipsum is simply dummy</Text>
            </View>
            <View style={styles.dotText}>
              <Text style={styles.dotCircle}>.</Text>
              <Text>Lorem Ipsum is simply dummy</Text>
            </View>
          </View>
          <View style={styles.columnElement}>
            <Text style={styles.textBold}>
              {i18n.t("doctor.AllSubscriptionPlan.Price")}
            </Text>
            <Text>$100/Year</Text>
          </View>
          <View style={styles.columnElement}>
            <Text style={styles.textBold}>{i18n.t("doctor.ConfirmPayment.Discount")}</Text>

            <Text>$10</Text>
          </View>
          <View style={styles.columnElement}>
            <Text style={styles.textBold}>{i18n.t("doctor.ConfirmPayment.Tax")}</Text>

            <Text>$5</Text>
          </View>
          <View style={[styles.line, { marginTop: 74 }]}></View>
          <View style={styles.columnElement}>
            <Text style={styles.grandTotalText}>{i18n.t("doctor.ConfirmPayment.GrandTotal")}</Text>
            <Text>$99</Text>
          </View>
        </View>
        <View
          style={[
            { flexDirection: "row", paddingLeft: 8, marginTop: 10 },
          ]}>
          <MyCheckbox checked={checked} setChecked={setChecked} />
          <Text style={styles.checkboxText}>{i18n.t("doctor.ConfirmPayment.AutoRenew")}</Text>
        </View>
      </ScrollView>
      <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <GradientButton
          text="Pay Now"
          borderRadius={10}
          marginTopHide
          height={54}
          fontSize={18}
          width={"100%"}
          onPress={() => navigation.navigate("PaymentComplete")}
        />
        <TouchableOpacity style={styles.backBtn}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </AppScreenKeyboardHide>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: 20,
    marginVertical: 10,
    flex: 1
  },
  text: {
    fontFamily: "Rubik-Medium",
    fontSize: fs(16),
    fontWeight: "500",
    marginBottom: 22,
  },
  dotCircle: {
    width: w(2),
    height: w(2),
    marginRight: 10,
    borderRadius: 100 / 2,
    backgroundColor: Colors.primary,
  },
  yearText: {
    fontFamily: FONT1MEDIUM,
    color: Colors.black,
    fontSize: fs(17),
    marginVertical: h(1),
  },
  container: {
    borderWidth: w(0.2),
    padding: w(6),
    borderRadius: w(3),
    backgroundColor: Colors.white,
    borderColor: 'transparent',
  },
  columnElement: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: w(1),
  },
  line: {
    borderWidth: w(0.1),
    borderColor: Colors.grey,
    marginVertical: h(4),
  },
  dotText: {
    flexDirection: "row",
    alignItems: "center",
  },
  grandTotalText: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: fs(15),
  },
  textBold: {
    fontSize: fs(16),
    fontWeight: "bold",
  },
  backBtn: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  checkboxText: {
    fontSize: 17,
    fontWeight: "500",
    marginLeft: 10,
    color: COLORS.blue,
  },
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
  checkboxChecked: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
  },
});

export default ConfirmPayment;