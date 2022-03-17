// screen 2.6 Successful signup
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import SuccessIcon from '../../assets/svg/success';
import i18n from '../../utils/i18n';
import AppScreen from '../../components/AppScreen';
import Button from '../../components/GradientButton';

interface OwnProps {
  navigation: any;
}

function Success({ navigation }: OwnProps) {
  return (
    <AppScreen>
      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
        <View />
        <View style={{ width: '90%', marginBottom: 30, alignItems: 'center' }}>
          <SuccessIcon />
          <View style={styles.featureView}>
            <Text style={styles.featureText}>{i18n.t("Congratulations!\nYou have successfully\ncompleted the\nSignup process!")}</Text>
          </View>
        </View>
        <View style={{ width: '100%', marginBottom: 30 }}>
          <Button
            text={i18n.t("Get Started")}
            onPress={() => navigation.navigate("Login")}
            marginTopHide
            borderRadius={10}
            height={50}
            fontSize={16}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  featureView: {
    alignItems: 'center',
    width: '90%',
    marginTop: 20
  },
  featureText: {
    fontSize: 22,
    color: '#090F47',
    textAlign: "center",
    fontFamily: "Rubik-Medium"
  },
});

export default Success;
