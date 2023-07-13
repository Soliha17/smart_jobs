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
    value: "1",
    label: "Yanvar",
  },
  {
    value: "2",
    label: "Fevral",
  },
  {
    value: "3",
    label: "Mart",
  },
  {
    value: "4",
    label: "Aprel",
  },
  {
    value: "5",
    label: "May",
  },
  {
    value: "6",
    label: "Iyun",
  },
  {
    value: "7",
    label: "Iyul",
  },
  {
    value: "8",
    label: "Avgust",
  },
  {
    value: "9",
    label: "Sentyabr",
  },
  {
    value: "10",
    label: "Oktyabr",
  },
  {
    value: "11",
    label: "Noyabr",
  },
  {
    value: "12",
    label: "Dekabr",
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
