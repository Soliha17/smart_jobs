import React, { useEffect, useState } from "react";
import { Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from "antd";
import LabeledInput from "../labeled-input/LabeledInput";
import CloseIcon from "../../../assets/images/Exit.svg";
import { v4 as uuidv4 } from "uuid";

const FamiliarInsideDrawer = ({
  open,
  setOpen,
  getFamilyFn,
  familyValues,
  setFamilyValues,
}) => {
  const [form] = Form.useForm();

  const [date, setDate] = useState(new Date());

  let isFamilyEditValues = JSON.parse(localStorage.getItem("isFamilyEdit"));

  useEffect(() => {
    if (isFamilyEditValues !== null) {
      form.setFieldValue(isFamilyEditValues);
    }
  }, [open]);

  const onChildrenDriwerFinish = (data) => {
    console.log("Success:", data);
    setOpen(false);

    // your code here
    getFamilyFn();

    if (isFamilyEditValues !== null) {
      const index = familyValues.findIndex(
        (item) => item.id === isFamilyEditValues.id
      );

      if (index !== -1) {
        familyValues[index] = data;
        setFamilyValues([...familyValues]);
        localStorage.removeItem("isFamilyEdit");
      }
    } else {
      familyValues.push({ ...data, id: uuidv4() });
      setFamilyValues([...familyValues]);
    }

    localStorage.setItem("familyDrawerValues", JSON.stringify(familyValues));
    form.resetFields();
  };

  function onClose() {
    if (isFamilyEditValues !== null) {
      localStorage.removeItem("isFamilyEdit");
      form.resetFields();
    }

    setOpen(false);
  }

  const onChildrenDriwerFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <Drawer
        title="Oila a'zosi"
        width={603}
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
            // validateMessages={validateMessages}
            name="basic"
            initialValues={
              {
                // remember: true,
                // requiredMarkValue: requiredMark,
              }
            }
            onFinish={onChildrenDriwerFinish}
            // onValuesChange={onRequiredTypeChange}
            // requiredMark={requiredMark}
            onFinishFailed={onChildrenDriwerFinishFailed}
            autoComplete="off"
          >
            <Row gutter={[24, 0]}>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Oila a'zosi"
                  labelFor="familiarPerson"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      size="large"
                      placeholder="Tanlash"
                      // onChange={onChange}
                      options={[
                        {
                          value: "father",
                          label: "Otasi",
                        },
                        {
                          value: "mother",
                          label: "Onasi",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Otasinging F.I.Osi"
                  labelFor="fullNameOfFather"
                  req={true}
                  input={
                    <Input
                      size="large"
                      placeholder="Masalan, Karimov Nodirjon Hotamovich"
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Fuqaroligi"
                  labelFor="citizenship"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      size="large"
                      placeholder="Tanlash"
                      // onChange={onChange}
                      options={[
                        {
                          value: "uzb",
                          label: "O'zbek",
                        },
                        {
                          value: "qozoq",
                          label: "Qozoq",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Tug'ilgan sana"
                  labelFor="workedDate"
                  req={true}
                  input={
                    <DatePicker
                      onChange={onChange}
                      size="large"
                      placeholder="kun/oy/yil"
                      value={date}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName="Mamlakat"
                  labelFor="countryFamily"
                  req={true}
                  input={
                    <Select
                      defaultValue="uzbekistan"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "uzbekistan",
                          label: "O'zbekiston",
                        },
                        {
                          value: "turkey",
                          label: "Turkiya",
                        },
                        {
                          value: "usa",
                          label: "AQSH",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={12}>
                <LabeledInput
                  labelName="Shahar"
                  labelFor="cityFamily"
                  req={true}
                  input={
                    <Select
                      defaultValue="buxoro"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "buxoro",
                          label: "Buxoro",
                        },
                        {
                          value: "toshkent",
                          label: "Toshkent",
                        },
                        {
                          value: "istanbul",
                          label: "Istanbul",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Ish joyi"
                  labelFor="workFamily"
                  req={true}
                  input={<Input size="large" />}
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Lavozimi"
                  labelFor="positionFamily"
                  req={true}
                  input={<Input size="large" />}
                />
              </Col>
            </Row>
            <div className="footer__resume">
              <button size="large" className="primary-btn" type="submit">
                Saqlash
              </button>
            </div>
          </Form>
        </div>
      </Drawer>
    </>
  );
};

export default FamiliarInsideDrawer;
