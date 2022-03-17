import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native";
import TabBar from "../components/TabBar";
import Routes from "./routes";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

interface Nav {
  name: string;
  component: any;
  options: object;
}

function HomeForCustomer() {
  return (
    <Stack.Navigator>
      {Routes.CUSTOMER.filter(route => ["SearchDoctors","DoctorList", "DoctorDetails"].includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

function FavoriteForCustomer() {
  return (
    <Stack.Navigator>
      {Routes.CUSTOMER.filter(route => ["FavoriteDoctors","FavoriteDoctorsDetails"].includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

function BookForCustomer() {
  return (
    <Stack.Navigator>
       {Routes.CUSTOMER.filter(route => ["AppointmentList","AppointmentBooking"].includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

function BellForCustomer() {
  return (
    <Stack.Navigator>
      {Routes.CUSTOMER.filter(route => ["NotificationsList"].includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

function ProfileForCustomer() {
  return (
    <Stack.Navigator>
       {Routes.CUSTOMER.filter(route => ["Profile"].includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

function HomeForDoctor() {
  return (
    <Stack.Navigator>
       {Routes.DOCTOR.filter(route => ["AppointmentRequestsList"].includes(route.name)).map((route: Nav, index: number) =>  (
        <Stack.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={route.options}
        />
      ))}
    </Stack.Navigator>
  );
}

function MainTabNav() {
  const [isCustomer, setIsCustomer] = useState(true); // Change "isDoctor" to "true" to check Doctor's screens

  return (
    <>
      {isCustomer ? (
        <Tab.Navigator
          initialRouteName={"Home"}
          screenOptions={{ headerShown: false }}
          tabBar={(props) => (
            <SafeAreaView style={{
              position: 'absolute',
              backgroundColor: "white",
              left: 0,
              right: 0,
              bottom: 0
            }}>
              <TabBar customer {...props} />
            </SafeAreaView>
          )}
        >
          <Tab.Screen name="Home" component={HomeForCustomer} />
          <Tab.Screen name="Favorite" component={FavoriteForCustomer} />
          <Tab.Screen name="Book" component={BookForCustomer} />
          <Tab.Screen name="Bell" component={BellForCustomer} />
          <Tab.Screen name="ProfileScreen" component={ProfileForCustomer} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          initialRouteName={"Home"}
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <TabBar doctor {...props} />}
        >
          <Tab.Screen name="Home" component={HomeForDoctor} />
          <Tab.Screen name="Customers" component={BellForCustomer} />
          <Tab.Screen name="Book" component={BellForCustomer} />
          <Tab.Screen name="Schedule" component={BellForCustomer} />
          <Tab.Screen name="Notification" component={BellForCustomer} />
        </Tab.Navigator>
      )}
    </>
  );
}

export default MainTabNav;