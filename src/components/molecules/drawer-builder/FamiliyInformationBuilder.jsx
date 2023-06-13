import { useEffect, useState } from "react";
import { Button, Col, Drawer, Form, Row, Select, Space } from "antd";
import { useTranslation } from "react-i18next";

import "./drawerResumeBuilder.css";

import CloseIcon from "../../../assets/images/Exit.svg";
import AddCircle from "../../../assets/images/add-circle.svg";
import Trash from "../../../assets/images/trash-icon.svg";
import Edit from "../../../assets/images/edit-icon.svg";

import LabeledInput from "../labeled-input/LabeledInput";
import FamiliarInsideDrawerBuilder from "./FamiliarInsideDrawerBuilder";

const FamilyInformationDrawerBuilder = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const [childrenDrawer, setChildrenDrawer] = useState(false);

  const [familyValues, setFamilyValues] = useState([]);

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  const onClose = () => {
    setOpen(false);
  };

  // const onsetChildrenDrawerClose = () => {
  //   setOpen(false);
  // };

  // const showChildrenDrawer = () => {
  //   setChildrenDrawer(true);
  // };

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

  useEffect(() => {
    getFamilyFromLocalStorage();
  }, []);

  function getFamilyFromLocalStorage() {
    let familyDrawerValues = JSON.parse(
      localStorage.getItem("familyDrawerValues")
    );

    if (familyDrawerValues !== null) {
      setFamilyValues(familyDrawerValues);
    }
  }

  const { t } = useTranslation();

  return (
    <>
      <Drawer
        title={t("familyInformation")}
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
                  labelName={t("familyCondition")}
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
                  labelName={t("hasChildren")}
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
                  labelName={t("addInformationAboutAFamilyMember")}
                  labelFor="extraInfoAboutFamilier"
                  input={familyValues?.map((item) => (
                    <div key={item?.id} className="field__resume">
                      <span>
                        <h4>{item?.familiarPerson}</h4>•
                        <p>{item?.fullNameOfFather}</p>•
                        <p>{item?.citizenship}</p>•
                        <p>
                          {item?.workedDate &&
                            new Date(item?.workedDate).toLocaleDateString(
                              "en-US",
                              { year: "numeric", month: "long", day: "numeric" }
                            )}
                        </p>
                        •<p>{item?.countryFamily}</p>
                        <p> ,{item?.cityFamily}</p>•<p>{item?.workFamily}</p>•
                        <p>{item?.positionFamily}</p>
                      </span>
                      <span className="action-group__resume">
                        <img
                          src={Edit}
                          alt="Edit icon"
                          onClick={() => {
                            localStorage.setItem(
                              "familyDrawerValues",
                              JSON.stringify(item)
                            );
                            setChildrenDrawer(true);
                          }}
                        />
                        <img
                          src={Trash}
                          onClick={() => {
                            let newArray = familyValues.filter(
                              (del) => del.id !== item.id
                            );
                            setFamilyValues(newArray);
                            localStorage.setItem(
                              "familyDrawerValues",
                              JSON.stringify(newArray)
                            );
                            getFamilyFromLocalStorage();
                          }}
                          alt="Trash icon"
                        />
                      </span>
                    </div>
                  ))}
                />
                <Row>
                  <Col xs={24} sm={24}>
                    <LabeledInput
                      // labelName=""
                      labelFor="familyAddButton"
                      input={
                        <Button
                          block
                          size="large"
                          onClick={() => setChildrenDrawer(true)}
                          icon={<img src={AddCircle} alt="" />}
                          style={{
                            textAlign: "left",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                          }}
                        >
                          {t("add")}
                        </Button>
                      }
                    />
                  </Col>
                </Row>
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
              {t("save")}
            </button>
          </Form>
        </div>
        <FamiliarInsideDrawerBuilder
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
          setOpen={setChildrenDrawer}
          familyValues={familyValues}
          setFamilyValues={setFamilyValues}
          getFamilyFn={getFamilyFromLocalStorage}
        />
      </Drawer>
    </>
  );
};
export default FamilyInformationDrawerBuilder;
