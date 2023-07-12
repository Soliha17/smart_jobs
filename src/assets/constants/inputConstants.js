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
