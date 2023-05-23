import { useEffect, useState } from "react";
import { Checkbox, Col, Drawer, Form, Input, Row, Select, Space } from "antd";

import { v4 as uuidv4 } from "uuid";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";

const StudyDrawer = ({
  open,
  setOpen,
  studyValues,
  setStudyValues,
  getStudyFunction,
}) => {
  const [form] = Form.useForm();
  const [isChecked, setIsChecked] = useState(true);

  let isStudyEditValues = JSON.parse(localStorage.getItem("isStudyEdit"));

  useEffect(() => {
    if (isStudyEditValues !== null) {
      form.setFieldsValue(isStudyEditValues);
    }
  }, [open]);

  function onChange(event) {
    setIsChecked(event.target.checked);
  }

  const onClose = () => {
    if (isStudyEditValues !== null) {
      localStorage.removeItem("isStudyEdit");
      form.resetFields();
    }

    setOpen(false);
  };

  const onFinish = (data) => {
    console.log("Success:", data);
    setOpen(false);

    getStudyFunction();
    
    if (isStudyEditValues !== null) {
      const index = studyValues.findIndex(
        (item) => item.id === isStudyEditValues.id
      );

      if (index !== -1) {
        studyValues[index] = data;
        setStudyValues([...studyValues]);
        localStorage.removeItem("isStudyEdit");
      }
    } else {
      studyValues.push({ ...data, id: uuidv4() });
      setStudyValues([...studyValues]);
    }

    localStorage.setItem("studyDrawerValues", JSON.stringify(studyValues));
    form.resetFields();

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
        title="Ta'lim muassasasi"
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
                <Row gutter={[12, 5]}>
                  <Col xs={12}>
                    <LabeledInput
                      labelName="Boshlash vaqti"
                      labelFor="beginsMonthOfStudy"
                      input={
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
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <LabeledInput
                      labelName="&nbsp;"
                      labelFor="beginsYearOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
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
                      }
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={24} sm={12}>
                <Row gutter={[12, 5]}>
                  <Col xs={12}>
                    <LabeledInput
                      labelName="Tugash vaqti"
                      labelFor="finishMonthOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
                          placeholder="Oy"
                          size="large"
                          disabled={isChecked}
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
                      }
                    />
                  </Col>
                  <Col xs={12}>
                    <LabeledInput
                      labelName="&nbsp;"
                      labelFor="finishYearOfStudy"
                      input={
                        <Select
                          // defaultValue="oy"
                          placeholder="Yil"
                          size="large"
                          disabled={isChecked}
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
                      }
                    />
                  </Col>
                  <Col xs={24}>
                    <LabeledInput
                      // labelName="&nbsp;"
                      valuePropName="checked"
                      labelFor="studyingUntilNow"
                      input={
                        <Checkbox checked={isChecked} onChange={onChange}>
                          Hozirgacha
                        </Checkbox>
                      }
                    />
                  </Col>
                </Row>
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
