import axios from "axios";

export async function postOrganizationGetSmsCode(params) {
  try {
    const res = await axios({
      url:
        params.role === "organizator"
          ? `${process.env.REACT_APP_API_ROUTE}/Organization/GetSmsCode`
          : `${process.env.REACT_APP_API_ROUTE}/Worker/GetSmsCode`,
      method: "POST",
      headers: {
        phoneNumberOrEmailAddress: params.phone,
      },
    });

    console.log("working...", params.role);

    params.callback(res.status);

    return res.data;
  } catch (error) {
    console.log(error, params.role);
    params.callback(error.response.status, error.response.data.error.message);
  }
  // AxiosError = error
}
