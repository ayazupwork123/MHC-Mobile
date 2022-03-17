import CreateDoctorProfile1 from '../screens/auth/CreateDoctorProfile1'
import CreateDoctorProfile2 from '../screens/auth/CreateDoctorProfile2'
import CreateDoctorProfile3 from '../screens/auth/CreateDoctorProfile3'
import ResetPassword from '../screens/auth/ResetPassword'
import ResetPasswordSuccess from '../screens/auth/ResetPasswordSuccess'
import CustomersList from "../screens/doctor/CustomersList"
import CustomerDetails from "../screens/doctor/CustomerDetails"
import AllSubscriptionPlan from "../screens/doctor/AllSubscriptionPlan"
// import Login from "../screens/auth/Login"
import AppointmentScreen from "../screens/doctor/AppointmentScreen"
import Profile from '../screens/customer/Profile'
import AppointmentDetails from '../screens/customer/AppointmentDetails'
import ExaminationDetails from "../screens/customer/ExaminationDetails"
import AppointmentRequestsList from '../screens/doctor/AppointmentRequestsList'
import AppointmentList from '../screens/doctor/AppointmentList'
import RescheduleAppointmentRequest from '../screens/doctor/RescheduleAppointmentRequest'
import PaymentComplete from '../screens/doctor/PaymentComplete';
import ConfirmPayment from '../screens/doctor/ConfirmPayment';
import NotificationsList from '../screens/customer/NotificationsList';
import SearchDoctors from '../screens/customer/SearchDoctors';
import DoctorList from "../screens/customer/SearchDoctorResults";
import DoctorDetails from "../screens/customer/DoctorDetails";
import FavoriteDoctors from "../screens/customer/FavouriteDoctors";
import FavoriteDoctorsDetails from "../screens/customer/FavouriteDoctorsDetails";
import AppointmentListCustomer from "../screens/customer/AppointmentsList";
import AppointmentBooking from "../screens/customer/AppointmentBooking"


export default Object.freeze({
  //Routes go here as per example below
  AUTH: [
    { name: "CreateDoctorProfile1", component: CreateDoctorProfile1, options: { headerShown: false }},
    { name: "CreateDoctorProfile2", component: CreateDoctorProfile2, options: { headerShown: false }},
    { name: "CreateDoctorProfile3", component: CreateDoctorProfile3, options: { headerShown: false }},
    { name: "ResetPassword", component: ResetPassword, options: { headerShown: false }},
    { name: "ResetPasswordSuccess", component: ResetPasswordSuccess, options: { headerShown: false }},
    // { name: "Login", component: Login, options: { headerShown: false }}
  ],
  CUSTOMER: [
    { name: "CustomersList", component: CustomersList, options: { headerShown: false }},
    { name: "CustomerDetails", component: CustomerDetails, options: { headerShown: false }},
    { name: "Profile", component: Profile, options: { headerShown: false }},
    { name: "AppointmentDetails", component: AppointmentDetails, options: { headerShown: false }},
    { name: "NotificationsList", component: NotificationsList, options: { headerShown: false }},
    { name: "SearchDoctors", component: SearchDoctors, options: { headerShown: false }},
    { name: "DoctorList", component: DoctorList, options: { headerShown: false }},
    { name: "DoctorDetails", component: DoctorDetails, options: { headerShown: false }},
    { name: "FavoriteDoctors", component: FavoriteDoctors, options: { headerShown: false }, props: { transparent: false}},
    { name: "FavoriteDoctorsDetails", component: FavoriteDoctorsDetails, options: { headerShown: false }},
    { name: "AppointmentList", component: AppointmentListCustomer, options: { headerShown: false }},
    { name: "AppointmentBooking", component: AppointmentBooking, options: { headerShown: false }},
  ],
  DOCTOR: [
    { name: "AppointmentScreen", component: AppointmentScreen, options: { headerShown: false }},
    { name: "ExaminationDetails", component: ExaminationDetails, options: { headerShown: false }},
    { name: "AllSubscriptionPlan", component: AllSubscriptionPlan, options: { headerShown: false }},
    { name: "AppointmentList", component: AppointmentList, options: { headerShown: false }},
    { name: "AppointmentRequestsList", component: AppointmentRequestsList, options: { headerShown: false }},
    { name: "RescheduleAppointmentRequest", component: RescheduleAppointmentRequest, options: { headerShown: false }},
    { name: "PaymentComplete", component: PaymentComplete, options: { headerShown: false }},
    { name: "ConfirmPayment", component: ConfirmPayment, options: { headerShown: false }}
  ]
});
