import axios from "axios";

export async function postGetSmsCode(params) {
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

export async function patchOrganizationRefreshToken(params) {
  try {
    const res = await axios({
      url:
        params.role === "organizator"
          ? `${process.env.REACT_APP_API_ROUTE}/Organization/RefreshToken`
          : `${process.env.REACT_APP_API_ROUTE}/Worker/RefreshToken`,
      method: "PATCH",
      headers: {
        refreshToken: params.refreshToken,
      },
    });

    console.log("working...", params.role);

    // params.callback(res.status);

    return res.data;
  } catch (error) {
    console.log(error, params.role);
    // params.callback(error.response.status, error.response.data.error.message);
  }
  // AxiosError = error
}

export async function getLogout(params) {
  try {
    const res = await axios({
      url:
        params.role === "organizator"
          ? `${process.env.REACT_APP_API_ROUTE}/Organization/Logout`
          : `${process.env.REACT_APP_API_ROUTE}/Worker/Logout`,
      method: "GET",
      headers: {
        refreshToken: localStorage.getItem("refreshToken"),
      },
    });

    console.log("working...", params.role);

    // params.callback(res.status);
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("accessToken");

    return res.data;
  } catch (error) {
    console.log(error, params.role);
    // params.callback(error.response.status, error.response.data.error.message);
  }
  // AxiosError = error
}
