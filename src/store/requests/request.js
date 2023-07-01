import axios from "axios";

export async function getOrganizationMe(params, thunkApi) {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/Me`,
      method: "GET",
    });

    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValues(error.response.data.message);
  }
}

export async function postOrganizationGetSmsCode(params, thunkApi) {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/GetSmsCode`,
      method: "POST",
      data: {
        phoneNumberOrEmailAddress: params.data.phoneNumberOrEmailAddress,
      },
    });

    console.log(res);

    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValues(error.response.data.message);
  }
}
