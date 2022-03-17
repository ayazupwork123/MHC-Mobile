import i18n from "../utils/i18n"

const IMAGES = {
  common : {
    profileImage : require('../assets/profileImg.png'),
    forwardArrow : require('../assets/common/forward-arrow.png') 
  },
  drawer : {    
    account : require('../assets/drawer/account.png'),
    medical : require('../assets/drawer/medical.png'),
    privacy : require('../assets/drawer/privacy.png'),
    feedback : require('../assets/drawer/feedback.png'),
    setting : require('../assets/drawer/setting.png'),
    logout :  require('../assets/drawer/logout.png') ,
    payment :  require('../assets/drawer/payment.png') ,  
  }
}

const DOCTOR_DRAWER_MENU = [
  {
    name : i18n.t("drawer.account"),
    icon : IMAGES.drawer.account,
    route: "AllSubscriptionPlan"
  },
  {
    name : i18n.t("drawer.medicalProfile"),
    icon : IMAGES.drawer.medical,
    route: "StackNavigation"
  },
  {
    name : i18n.t("drawer.privacy"),
    icon : IMAGES.drawer.privacy,
    route: "TermsCondition"
  },
  {
    name : i18n.t("drawer.feedback"),
    icon : IMAGES.drawer.feedback,
    route: "Feedback"
  },
  {
    name : i18n.t("drawer.settings"),
    icon : IMAGES.drawer.setting,
    route: "Settings"
  }
];

const USER_DRAWER_MENU = [
  {
    name : i18n.t("drawer.account"),
    icon : IMAGES.drawer.account,
    route: "ExaminationCreationSuccess"
  },
  {
    name : i18n.t("drawer.profile"),
    icon : IMAGES.drawer.medical,
    route: "UserProfile"
  },
  {
    name : i18n.t("drawer.payment"),
    icon : IMAGES.drawer.payment,
    route: "Payment"
  },
  {
    name : i18n.t("drawer.privacy"),
    icon : IMAGES.drawer.privacy,
    route: "Privacy"
  },
  {
    name : i18n.t("drawer.feedback"),
    icon : IMAGES.drawer.feedback,
    route: "Feedback"
  },
  {
    name : i18n.t("drawer.settings"),
    icon : IMAGES.drawer.setting,
    route: "Settings"
  }
]

export { IMAGES,DOCTOR_DRAWER_MENU,USER_DRAWER_MENU };