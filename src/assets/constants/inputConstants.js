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
export const linkPattern =
  /^\s*(http\:\/\/)?([a-z\d\-]{1,63}\.)*[a-z\d\-]{1,255}\.[a-z]{2,6}\s*$/;

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

export function getYearOptions() {
  const yearOptions = [];

  for (let i = 1970; i <= 2023; i++) {
    yearOptions.push({
      value: i.toString(),
      label: i.toString(),
    });
  }
  return yearOptions;
}
