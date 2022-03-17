import * as Localization from 'expo-localization';
import { LocaleConfig } from 'react-native-calendars';
import i18n from "i18n-js";
import en from "./en.json";
import el from "./el.json";
import moment from 'moment-timezone'
import 'moment/locale/el'
// Set the key-value pairs for the different languages you want to support.
i18n.fallbacks = true;
i18n.translations = {
  en,
  el
};

i18n.locale = Localization.locale;

moment.tz.setDefault(Localization.timezone);
moment.locale(Localization.locale);

LocaleConfig.locales['el'] = {
  monthNames: [
    'Ιανουάριος',
    'Φεβρουάριος',
    'Μάρτιος',
    'Απρίλιος',
    'Μάιος',
    'Ιούνιος',
    'Ιούλιος',
    'Αύγουστος',
    'Σεπτέμβριος',
    'Οκτώμβριος',
    'Νοέμβριος',
    'Δεκέμβριος'
  ],
  monthNamesShort: ['Ιαν.', 'Φεβ.', 'Μαρ.', 'Απρλ.', 'Μάιος', 'Ιουν.', 'Ιούλ.', 'Αυγ.', 'Σεπτ.', 'Οκτ.', 'Νοε.', 'Δεκ.'],
  dayNames: ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σαββάτο'],
  dayNamesShort: ['Κυρ.', 'Δευ.', 'Τρι.', 'Τετ.', 'Πεμ.', 'Παρ.', 'Σαβ.'],
  today: "Σήμερα"
};

var locale = Localization.locale.substring(0, 2)
LocaleConfig.defaultLocale = locale;

// Set the locale once at the beginning of your app.
export default i18n;
