import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './routes';
import MainTabNav from './bottomNav';

const Stack = createNativeStackNavigator();

interface Nav {
  name: string;
  component: any;
  options: object;
}

const bottomNavigatorsCustomer = [
  "SearchDoctors",
  "DoctorList",
  "DoctorDetails",
  "FavoriteDoctors",
  "FavoriteDoctorsDetails",
  "AppointmentList",
  "AppointmentBooking",
  "NotificationsList",
  "Profile"
]

const bottomNavigatorsDoctor = [
  "AppointmentRequestsList"
]
function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="SearchDoctors">
      {Routes.AUTH.map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
      {Routes.CUSTOMER.filter(route => !bottomNavigatorsCustomer.includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
      {Routes.DOCTOR.filter(route => !bottomNavigatorsDoctor.includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
      <Stack.Screen
        key={"main"}
        name={"main"}
        component={MainTabNav}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;