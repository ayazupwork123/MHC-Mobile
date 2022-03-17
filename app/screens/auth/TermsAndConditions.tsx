// screen 2.1 Terms and Conditions
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import i18n from '../../utils/i18n';
import Onboarding from '../../assets/svg/onboarding';
import AppScreen from '../../components/AppScreen';
import Button from '../../components/GradientButton';
import { SCREEN_WIDTH, FONT1REGULAR, FONT1LIGHT } from "../../config";

interface OwnProps {
  navigation: any;
}

function TermsCondition({ navigation }: OwnProps) {

  return (
    <AppScreen>
      <View style={styles.mainView}>
        <View style={styles.contentView}>
          <View style={{ width: '100%', alignItems: 'center' }}>
            <Onboarding />
          </View>
          <View style={styles.featureView}>
            <Text style={styles.featureText}>{i18n.t("TermsAndConditions")}</Text>
          </View>
          <View style={[styles.featureView, { marginTop: 20}]}>
            <Text style={{ fontFamily: FONT1LIGHT, color: '#677294E5', fontSize: 14 }}>{i18n.t("Lorem ipsum")}</Text>
          </View>
        </View>
        <View style={{ width: '100%', marginBottom: Platform.OS === 'ios' ? 20 : 0}}>
          <Button
            text={i18n.t("Accept")}
            onPress={() => navigation.navigate("UserType")}
            marginTopHide
            borderRadius={4}
            height={40}
            fontSize={14}
          />
          <Button
            text={i18n.t("Back")}
            onPress={() => navigation.goBack()}
            marginTopHide
            borderRadius={4}
            transparent
            height={40}
            fontSize={14}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: "10%",
    marginBottom: 20,
    width: SCREEN_WIDTH,
    justifyContent: "space-between",
    alignItems: "center",
  },
  contentView: {
    width: "90%",
  },
  featureView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 50
  },
  featureText: {
    fontSize: 18,
    fontFamily: FONT1REGULAR
  },
});
export default TermsCondition;
