import { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  Button,
  Col,
  Form,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Table,
} from "antd";

import "./secondStep.css";

import EditIcon from "../../../../assets/images/edit-icon-table.svg";

const SecondStep = ({ props }) => {
  const [form] = Form.useForm();

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [value, setValue] = useState(1);

  const next = props.next;
  const prev = props.prev;

  const onFinish = (values) => {
    console.log("Success:", values);
    next(2);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const validateMessages = {
  //   required: "Iltimos, ${label}ni kiriting!",
  //   types: {
  //     email: "${label} is not a valid email!",
  //     number: "${label} is not a valid number!",
  //   },
  //   number: {
  //     range: "${label} must be between ${0} and ${10}",
  //   },
  // };

  const { t } = useTranslation();

  const columns = [
    {
      title: "T/r",
      dataIndex: "number",
    },
    {
      title: "Nomlari",
      dataIndex: "name",
    },
    {
      title: "Manba",
      dataIndex: "age",
    },
    {
      title: "Faollashtirish",
      dataIndex: "address",
    },
    {
      title: "",
      dataIndex: "action",
    },
  ];
  const data = [
    {
      key: "1",
      number: 1,
      name: "Karyera sayti",
      age: "express24.smartjob.uz",
      address: "Faollashtirilgan",
    },
    {
      key: "2",
      number: 2,
      name: "Smartjobs",
      age: "Smartjobs",
      address: <Switch onChange={onChange} />,
      action: <img src={EditIcon} alt="EditIcon" />,
    },
    {
      key: "3",
      number: 3,
      name: "Clcik Jobs",
      age: "Clcik Jobs",
      address: <Switch onChange={onChange} />,
      action: <img src={EditIcon} alt="EditIcon" />,
    },
    {
      key: "4",
      number: 4,
      name: "MegaJob",
      age: "MegaJob",
      address: <Switch onChange={onChange} />,
      action: <img src={EditIcon} alt="EditIcon" />,
    },
  ];

  const columns1 = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Test nomi",
      dataIndex: "testName",
    },
    {
      title: "Savollar soni",
      dataIndex: "emountOfQuestions",
    },
    {
      title: "O'tish bali",
      dataIndex: "pastBall",
    },
    {
      title: "",
      dataIndex: "see",
    },
  ];

  const data1 = [
    {
      key: "1",
      id: 1,
      testName: "UX/UI dizayner",
      emountOfQuestions: 23,
      pastBall: (
        <Select
          defaultValue="23"
          style={{
            width: 133,
          }}
          options={[
            {
              value: "23",
              label: "23",
            },
          ]}
        />
      ),
      see: (
        <button className="default-btn default-btn__create-vacancy">
          Ko'rish
        </button>
      ),
    },
    {
      key: "2",
      id: 2,
      testName: "UX/UI dizayner",
      emountOfQuestions: 23,
      pastBall: (
        <Select
          defaultValue="23"
          style={{
            width: 133,
          }}
          options={[
            {
              value: "23",
              label: "23",
            },
          ]}
        />
      ),
      see: (
        <button className="default-btn default-btn__create-vacancy">
          Ko'rish
        </button>
      ),
    },
    {
      key: "3",
      id: 3,
      testName: "UX/UI dizayner",
      emountOfQuestions: 23,
      pastBall: (
        <Select
          defaultValue="23"
          style={{
            width: 133,
          }}
          options={[
            {
              value: "23",
              label: "23",
            },
          ]}
        />
      ),
      see: (
        <button className="default-btn default-btn__create-vacancy">
          Ko'rish
        </button>
      ),
    },
    {
      key: "4",
      id: 4,
      testName: "UX/UI dizayner",
      emountOfQuestions: 23,
      pastBall: (
        <Select
          defaultValue="23"
          style={{
            width: 133,
          }}
          options={[
            {
              value: "23",
              label: "23",
            },
          ]}
        />
      ),
      see: (
        <button className="default-btn default-btn__create-vacancy">
          Ko'rish
        </button>
      ),
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <div className="header__resume">
        <h3>Vakansiya yaratish </h3>
        <p> {t("enterYourBasicInformation")} </p>
      </div>
      <div className="content__resume">
        <Form
          form={form}
          layout="vertical"
          // validateMessages={validateMessages}
          name="basic"
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 24]} style={{ marginBottom: "48px" }}>
            <Col xs={24} sm={24}>
              <div className="desc__create-vacancy">
                <h6>Qabul qilish tartibi</h6>
                <p>
                  Nomzodlar sizning ishingizga qanday murojaat qilishlarini va
                  ular darhol qanday ma'lumotlarni taqdim eitishlarini nazorat
                  qilsing
                </p>
              </div>
              <Form.Item name="radio-group" label="">
                <Radio.Group onChange={onChange} value={value}>
                  <Space direction="vertical">
                    <Radio value={1}>Standart</Radio>
                    <Radio value={2}>Faqat ichki ilovalar</Radio>
                    <Radio value={3}>
                      Ro'yxatdan o'tmagan
                      <p>
                        Ushubu lavozimga ariza berish uchun nomzodning
                        to'g'ridan-to'g'ri havolasi bo'lishi kerak (quyida).
                      </p>
                      <p>Ish URL manzili: https://korzinka.smartjob.uz/</p>
                    </Radio>
                    <Radio value={4}>O'chirilgan</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24}>
              <div className="desc__create-vacancy">
                <h6>3-tomon ma'lumotlarini belgilang</h6>
                <p>
                  Nomzodlar sizning ishingizga qanday murojaat qilishlarini va
                  ular darhol qanday ma'lumotlarni taqdim eitishlarini nazorat
                  qilsing
                </p>
              </div>
              <div className="personal-information__create-vacancy">
                <h6>Shaxsiy ma'lumotlar</h6>
                <div className="labeled-line__create-vacancy">
                  <p>Ism familiya</p>
                  <Radio>Kerakli</Radio>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>E-mail manzili</p>
                  <Radio>Kerakli</Radio>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>Telefon raqami</p>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>Kerakli</Radio>
                    <Radio value={2}>Shartmas</Radio>
                    <Radio value={3}>O'chirilgan</Radio>
                  </Radio.Group>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>Manzil</p>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>Kerakli</Radio>
                    <Radio value={2}>Shartmas</Radio>
                    <Radio value={3}>O'chirilgan</Radio>
                  </Radio.Group>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>Istalgan ish haqi</p>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>Kerakli</Radio>
                    <Radio value={2}>Shartmas</Radio>
                    <Radio value={3}>O'chirilgan</Radio>
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24}>
              <div className="personal-information__create-vacancy">
                <h6>Shaxsiy ma'lumotlar</h6>
                <div className="labeled-line__create-vacancy">
                  <p>Ism familiya</p>
                  <Radio>Kerakli</Radio>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>E-mail manzili</p>
                  <Radio>Kerakli</Radio>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>Telefon raqami</p>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>Kerakli</Radio>
                    <Radio value={2}>Shartmas</Radio>
                    <Radio value={3}>O'chirilgan</Radio>
                  </Radio.Group>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>Manzil</p>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>Kerakli</Radio>
                    <Radio value={2}>Shartmas</Radio>
                    <Radio value={3}>O'chirilgan</Radio>
                  </Radio.Group>
                </div>
                <div className="labeled-line__create-vacancy">
                  <p>Istalgan ish haqi</p>
                  <Radio.Group name="radiogroup" defaultValue={1}>
                    <Radio value={1}>Kerakli</Radio>
                    <Radio value={2}>Shartmas</Radio>
                    <Radio value={3}>O'chirilgan</Radio>
                  </Radio.Group>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24}>
              <p className="subtitle__create-vacancy">
                E'lon qilinadigan kanallarni belgilang
              </p>
              <div style={{ overflow: "auto" }}>
                <Table
                  bordered
                  columns={columns}
                  dataSource={data}
                  size="middle"
                  pagination={false}
                  style={{ marginTop: "40px", minWidth: "100%" }}
                />
              </div>
            </Col>
            <Col xs={24} sm={24}>
              <p className="subtitle__create-vacancy">
                Ushbu vakansiya uchun test sinovi belgilaysizmi ?
              </p>
              <Radio.Group
                name="radiogroup"
                defaultValue={1}
                style={{ marginTop: "15px" }}
              >
                <Space direction="vertical">
                  <Radio value={"no"}>Yo'q</Radio>
                  <Radio value={"yes"}>Ha</Radio>
                </Space>
              </Radio.Group>
            </Col>
            <Col xs={24} sm={24}>
              <div className="table-header__create-vacancy">
                <p className="subtitle__create-vacancy">Testlarni belgilash</p>
                <button className="primary-btn">Test qo'shish</button>
              </div>
            </Col>
            <Col xs={24} sm={24}>
              <div style={{ overflow: "auto" }}>
                <Table
                  size="small"
                  rowSelection={{
                    type: "radio",
                    ...rowSelection,
                  }}
                  columns={columns1}
                  style={{ minWidth: "100%" }}
                  dataSource={data1}
                  pagination={false}
                />
              </div>
            </Col>
          </Row>
          <div className="footer__resume">
            <Button size="large" onClick={() => prev(1)}>
              {t("back")}
            </Button>
            <button
              size="large"
              className="primary-btn"
              type="submit"
              style={{ marginLeft: "auto" }}
            >
              {t("continue")}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default SecondStep;
