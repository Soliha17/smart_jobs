import { Checkbox, Col, Drawer, Form, Input, Row, Select, Space } from "antd";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";

const StudyDrawer = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const onClose = () => {
    setOpen(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);

    // next(2);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const validateMessages = {
    required: "Iltimos, ${label}ni kiriting!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${0} and ${10}",
    },
  };

  return (
    <>
      <Drawer
        title="Ta’lim muassasasi"
        size="large"
        closable={false}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <img src={CloseIcon} onClick={onClose} alt="CloseIcon" />
          </Space>
        }
      >
        <div className="content__drawer">
          <Form
            form={form}
            layout="vertical"
            validateMessages={validateMessages}
            name="basic"
            initialValues={
              {
                // remember: true,
                // requiredMarkValue: requiredMark,
              }
            }
            onFinish={onFinish}
            // onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Ta’lim muassasasi"
                  labelFor="studySchool"
                  req={true}
                  input={<Input size="large" placeholder="Masalan, Harvard" />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Fakultet nomi"
                  labelFor="facultyName"
                  req={true}
                  input={
                    <Input size="large" placeholder="Masalan, Psixologiya" />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Ta'lim darajasi"
                  labelFor="studyLevel"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      placeholder="Tanlang"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "bakalavr",
                          label: "Bakalavr",
                        },
                        {
                          value: "magistr",
                          label: "Magistr",
                        },
                      ]}
                    />
                  }
                />
              </Col>

              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName="Boshlash vaqti"
                  labelFor="studyBegin"
                  input={
                    <Row gutter={[12, 5]}>
                      <Col xs={12}>
                        <Select
                          // defaultValue="oy"
                          placeholder="Oy"
                          size="large"
                          // onChange={onChange}
                          options={[
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
                              value: "iyun",
                              label: "Iyun",
                            },
                          ]}
                        />
                      </Col>
                      <Col xs={12}>
                        <Select
                          // defaultValue="uzbek"
                          placeholder="Yil"
                          size="large"
                          // onChange={onChange}
                          options={[
                            {
                              value: "2020",
                              label: "2020",
                            },
                            {
                              value: "2021",
                              label: "2021",
                            },
                            {
                              value: "2022",
                              label: "2022",
                            },
                            {
                              value: "2023",
                              label: "2023",
                            },
                          ]}
                        />
                      </Col>
                    </Row>
                  }
                />
              </Col>

              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName="Tugash vaqti"
                  labelFor="studyFinish"
                  input={
                    <Row gutter={[12, 12]}>
                      <Col xs={12}>
                        <Select
                          // defaultValue="oy"
                          placeholder="Oy"
                          size="large"
                          // onChange={onChange}
                          options={[
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
                              value: "iyun",
                              label: "Iyun",
                            },
                          ]}
                        />
                      </Col>
                      <Col xs={12}>
                        <Select
                          // defaultValue="uzbek"
                          placeholder="Yil"
                          size="large"
                          // onChange={onChange}
                          options={[
                            {
                              value: "2020",
                              label: "2020",
                            },
                            {
                              value: "2021",
                              label: "2021",
                            },
                            {
                              value: "2022",
                              label: "2022",
                            },
                            {
                              value: "2023",
                              label: "2023",
                            },
                          ]}
                        />
                      </Col>
                      <Col xs={24}>
                        <Checkbox checked={true}>Hozirgacha</Checkbox>
                      </Col>
                    </Row>
                  }
                />
              </Col>
            </Row>
            <button
              type="submit"
              style={{ marginTop: "32px" }}
              className="primary-btn"
            >
              Saqlash
            </button>
          </Form>
        </div>
      </Drawer>
    </>
  );
};
export default StudyDrawer;
