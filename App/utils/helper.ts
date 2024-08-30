import {LogBox} from 'react-native';

export const today = new Date();
export const currentMonth = today.getMonth();
export const currentYear = today.getFullYear();

export const monthNameInShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const currencyMap: {[x: string]: string} = {
  AE: 'AED', // United Arab Emirate Dirham
  AU: 'AUD', // Australian Dollar
  BR: 'BRL', // Brazilian Real
  CA: 'CAD', // Canadian Dollar
  CH: 'CHF', // Swiss Franc
  CN: 'CNY', // Chinese Yuan Renminbi
  EU: 'EUR', // European Union Euro
  GB: 'GBP', // British Pound Sterling
  IN: 'INR', // Indian Rupee
  JP: 'JPY', // Japanese Yen
  KR: 'KRW', // South Korean Won
  MX: 'MXN', // Mexican Peso
  NG: 'NGN', // Nigeria Naira
  NZ: 'NZD', // New Zealand Dollar
  RU: 'RUB', // Russian Ruble
  SA: 'SAR', // Saudi Riyal
  SG: 'SGD', // Singapore Dollar
  TR: 'TRY', // Turkish Lira
  US: 'USD', // United States Dollar
  ZA: 'ZAR', // South African Rand
  KE: 'KES', //	Kenyan Shilling
  EG: 'EGP', // Egyptian Pound
  GH: 'GHS', //	Ghanaian Cedi
  MA: 'MAD', //	Moroccan Dirham
  ET: 'ETB', //	Ethiopian Birr
  TZ: 'TZS', //	Tanzanian Shilling
  UG: 'UGX', //	Ugandan Shilling
  DZ: 'DZD', //	Algerian Dinar
  AO: 'AOA', //	Angolan Kwanza
  ZW: 'ZWL', //	Zimbabwean Dollar
  TN: 'TND', //	Tunisian Dinar
  ZM: 'ZMW', //	Zambian Kwacha
  MZ: 'MZN', //	Mozambican Metical
  BW: 'BWP', //	Botswanan Pula
  NA: 'NAD', //	Namibian Dollar
  RW: 'RWF', //	Rwandan Franc
  SC: 'SCR', //	Seychellois Rupee
  MU: 'MUR', //	Mauritian Rupee
  CI: 'XOF', // West African CFA Franc
  SN: 'XOF', //	West African CFA Franc
  CM: 'XAF', //	Central African CFA Franc
  GA: 'XAF', //	Central African CFA Franc
  CG: 'XAF', //	Central African CFA Franc
};

export const capitalize = (text: string) =>
  text.charAt?.(0).toUpperCase?.() + text.toLowerCase().slice?.(1);

export const formatCurrency = (value: number, countryCode?: string): string => {
  countryCode = countryCode || 'NG';

  // Get the currency code based on the provided country code
  const currencyCode = currencyMap[countryCode] || 'NGN'; // Default to USD if not found

  // Format the value
  return new Intl.NumberFormat(`en-${countryCode}`, {
    currency: currencyCode,
    minimumFractionDigits: 2,
    style: 'currency',
  }).format(value);
};

export const createMultiDimensionArray = <T>(arr: T[], count: number) => {
  const arrayLength =
    Math.floor(arr.length / count) + (arr.length % count !== 0 ? 1 : 0);
  const splittedArray = new Array(arrayLength)
    .fill(1)
    .map((_, i) => arr.slice(i * count, i * count + count));
  return splittedArray;
};

export function addAlphaToColor(color: string, opacity: number): string {
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const getPastDate = (
  value: number,
  variant: 'days' | 'months' | 'years',
) => {
  const pastDays = today.setDate(today.getDate() - value);
  const pastMonths = today.setMonth(currentMonth - value);
  const pastYears = today.setFullYear(currentYear - value);
  switch (variant) {
    case 'months':
      return new Date(pastMonths);
    case 'years':
      return new Date(pastYears);
    default:
      return new Date(pastDays);
  }
};

export const formatDate = (
  date: string,
  returnType?: 'time' | 'api' | 'ui' | 'card',
  type?: 'timestamp' | 'date' | 'api',
) => {
  const validateDate = type === 'timestamp' ? parseInt(date, 10) * 1000 : date;
  const formatToday = new Date(validateDate);

  const {YY, MM, DD, HR, MN} = {
    DD: formatToday.getDate(),
    HR: formatToday.getHours(),
    MM: monthNameInShort[formatToday.getMonth()],
    MN:
      formatToday.getMinutes() < 10
        ? `0${formatToday.getMinutes()}`
        : formatToday.getMinutes(),
    YY: formatToday.getFullYear(),
  };

  const Hr = HR % 12 === 0 ? 12 : HR % 12 < 10 ? `0${HR % 12}` : HR % 12;

  switch (returnType) {
    case 'api': {
      if (type === 'api') {
        const dateParts: string[] = date.split('/'); // Split the date string into an array
        const year = dateParts[2];
        //@ts-ignore
        const month = String(parseInt(dateParts[0], 10)).padStart(2, '0'); // Ensure two-digit month
        //@ts-ignore
        const day = String(parseInt(dateParts[1], 10)).padStart(2, '0'); // Ensure two-digit day

        return `${year}${month}${day}`; // "20221020";
      }
      return formatToday?.toISOString()?.slice(0, 10).replaceAll('-', ''); // "2022-10-20"
    }
    case 'time':
      return `${MM} ${DD}, ${YY}. ${
        HR >= 12 && HR <= 23 ? `${Hr}:${MN}pm` : `${Hr}:${MN}am`
      }`; // Sep 22, 2022. 01:26am
    case 'ui':
      return `${monthNames[formatToday?.getMonth()]} ${YY}`; // September, 2022
    case 'card':
      return `${
        formatToday.getMonth() % 12 < 10
          ? `0${formatToday.getMonth() % 12}`
          : formatToday.getMonth() % 12
      }/${YY - 2000}`; // "10/23"
    default:
      return `${MM} ${DD}, ${YY}`; // Sep 22, 2022
  }
};

export const formatTimestamp = (timestamp: number) => {
  if (typeof timestamp !== 'number') {
    return new Date();
  }

  if (timestamp < 1000000000000) {
    timestamp *= 1000;
  }

  const dateObject = new Date(timestamp);
  const month = monthNameInShort[dateObject.getUTCMonth()];
  const day = dateObject.getUTCDate();
  const year = dateObject.getUTCFullYear();
  const daySuffix = ['st', 'nd', 'rd'][(day - 1) % 10] || 'th';
  return `${day}${daySuffix} ${month}, ${year}`;
};

export const LogBoxMsg = () =>
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
  ]);

export const handleBase64 = (str: string, type?: 'encode' | 'decode') => {
  switch (type) {
    case 'decode':
      const decoded = atob(str);
      return decoded;

    default:
      const base64String = btoa(str);
      return base64String;
  }
};

export const maskEmail = (email: string) => {
  const atIndex = email.indexOf('@');
  const nameLength = email.substring(0, atIndex).length;
  const maskLength = Math.max(2, nameLength - 2);
  const mask = '*'.repeat(maskLength);
  return `${email.substring(0, 2)}${mask}${email.substring(atIndex - 2)}`;
};
