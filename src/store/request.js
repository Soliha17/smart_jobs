import axios from "axios";

export async function postOrganizationGetSmsCode(params) {
  try {
    const res = await axios({
      url:
        params.role === "worker"
          ? `${process.env.REACT_APP_API_ROUTE}/Organization/GetSmsCode`
          : `${process.env.REACT_APP_API_ROUTE}/Worker/GetSmsCode`,
      method: "POST",
      headers: {
        phoneNumberOrEmailAddress: params.phone,
        // 'lang: 1'
      },
    });

    params.callback(res.status);

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
  // AxiosError = error
}
