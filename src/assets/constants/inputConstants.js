export const restrictedKeysInSignUpForm = [
  "*",
  "/",
  "+",
  "-",
  "_",
  "(",
  ")",
  "&",
  "%",
  "$",
  "!",
  "^",
  "~",
  "#",
  ",",
  "Shift",
  " ",
  "Alt",
];

export const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const phonePattern = /^\d{12}$/;

export const monthOptions = [
  {
    value: "dekabr",
    label: "Dekabr",
  },
  {
    value: "yanvar",
    label: "Yanvar",
  },
  {
    value: "fevral",
    label: "Fevral",
  },
  {
    value: "mart",
    label: "Mart",
  },
  {
    value: "aprel",
    label: "Aprel",
  },
  {
    value: "may",
    label: "May",
  },
  {
    value: "iyun",
    label: "Iyun",
  },
  {
    value: "iyul",
    label: "Iyul",
  },
  {
    value: "avgust",
    label: "Avgust",
  },
  {
    value: "sentyabr",
    label: "Sentyabr",
  },
  {
    value: "oktyabr",
    label: "Oktyabr",
  },
  {
    value: "noyabr",
    label: "Noyabr",
  },
];
