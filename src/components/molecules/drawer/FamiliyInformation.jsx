import { Button, Col, Drawer, Form, Input, Row, Select, Space } from "antd";
import { useState } from "react";

import CloseIcon from "../../../assets/images/Exit.svg";

import "./drawerResume.css";
import LabeledInput from "../labeled-input/LabeledInput";
import AddCircle from "../../../assets/images/add-circle.svg";
import Trash from "../../../assets/images/trash-icon.svg";
import Edit from "../../../assets/images/edit-icon.svg";
import FamiliarInsideDrawer from "./FamiliarInsideDrawer";

const FamilyInformationDrawer = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const [childrenDrawer, setChildrenDrawer] = useState(false);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  const onClose = () => {
    setOpen(false);
  };

  // const onsetChildrenDrawerClose = () => {
  //   setOpen(false);
  // };

  const showChildrenDrawer = () => {
    setChildrenDrawer(true);
  };

  const onChildrenDrawerClose = () => {
    setChildrenDrawer(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);

    // next(2);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const onChildrenDriwerFinish = (values) => {
  //   console.log("Success:", values);
  //   setChildrenDrawer(false);
  // };

  // const onChildrenDriwerFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <>
      <Drawer
        title="Oila ma'lumotlari"
        // width={818}
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
            // validateMessages={validateMessages}
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
            <Row gutter={[24, 34]}>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Oilaviy holati"
                  labelFor="familyCondition"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "full",
                          label: "To'liq stavka",
                        },
                        {
                          value: "part",
                          label: "Part time",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Farzanlar borligi"
                  labelFor="hasChildren"
                  req={true}
                  input={
                    <Select
                      // defaultValue="full"
                      size="large"
                      // onChange={onChange}
                      options={[
                        {
                          value: "full",
                          label: "To'liq stavka",
                        },
                        {
                          value: "part",
                          label: "Part time",
                        },
                      ]}
                    />
                  }
                />
              </Col>
              <Col xs={24} sm={24}>
                <LabeledInput
                  labelName="Oila a’zosi haqida ma’lumot qo’shish"
                  labelFor="extraInfoAboutFamilier"
                  req={true}
                  input={
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      <Input
                        size="large"
                        value="Otasi • Karimov Nodirjon Hotamovich • O’zbekiston • 12.08.1886 • O’zbekiston, Toshkent • Soliq • Inspektor"
                        suffix={
                          <span className="action-group__resume">
                            <img src={Edit} alt="Edit icon" />
                            <img src={Trash} alt="Trash icon" />
                          </span>
                        }
                      />
                      <Button
                        block
                        size="large"
                        onClick={showChildrenDrawer}
                        icon={<img src={AddCircle} alt="" />}
                        style={{
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        Qo'shish
                      </Button>
                    </span>
                  }
                />
              </Col>

              {/* <Col xs={24} sm={24}>
                <Button
                  block
                  size="large"
                  icon={<img src={AddCircle} alt="" />}

                  style={{
                    textAlign: "left",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  Qo'shish
                </Button>
              </Col> */}
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
        <Drawer
          title="Oila a’zosi"
          width={603}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          extra={
            <Space>
              <img
                src={CloseIcon}
                onClick={onChildrenDrawerClose}
                alt="CloseIcon"
              />
            </Space>
          }
        >
          <div className="content__drawer">
            <FamiliarInsideDrawer
              open={childrenDrawer}
              setOpen={setChildrenDrawer}
            />
          </div>
        </Drawer>
      </Drawer>
    </>
  );
};
export default FamilyInformationDrawer;
