import axios from "axios";

export async function getOrganizationMe(params) {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/Me`,
      method: "GET",
      headers: {
        Authorization:`Bearer ${params.token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function postOrganizationGetSmsCode(params) {
  console.log(params);
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/GetSmsCode`,
      method: "POST",
      data: {
        phoneNumberOrEmailAddress: params.phone,
      },
    });

    params.callback(res.status);

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
  // AxiosError = error
}

export async function postOrganizationVerifySmsCode(params) {
  console.log(params);
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/VerifySmsCode`,
      method: "POST",
      data: {
        id: 0,
        code: 0,
      },
    });

    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function postOrganizationLogin(params) {
  console.log(params);
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/Login`,
      method: "POST",
      data: {
        login: "",
        password: "",
      },
    });

    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function postOrganizationRegister(params) {
  console.log(params);
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/Register`,
      method: "POST",
      data: {
        name: "",
        description: "",
        logo: "",
        webSiteUrl: "",
        firstName: "",
        lastName: "",
        addressId: 0,
        email: "user@example.com",
        phoneNumber: "",
        password: "",
        companySizeId: 0,
        companyDirectionId: 0,
      },
    });

    console.log(res);

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function organizationMeGet(params) {
  try {
    const res = await axios({
      url: `${process.env.REACT_APP_API_ROUTE}/Organization/Me`,
      method: "GET",
    });
  } catch (error) {
    console.log(error);
  }
}
// error.massage edimi error.response.data.message
