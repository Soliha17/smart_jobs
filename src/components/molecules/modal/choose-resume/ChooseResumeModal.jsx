import React, { useState } from "react";
import { Col, Form, Modal, Radio, Row, Switch } from "antd";

import { useTranslation } from "react-i18next";

import "./chooseResumeModal.css";

import PlusIcon from "../../../../assets/images/add-circle-blue.svg";
import Boy from "../../../../assets/images/designer-boy.png";
import TextArea from "antd/es/input/TextArea";
import AssignedToWorkModal from "../../../atoms/assigned-to-work-modal/AssignedToWorkModal";

const ChooseResumeModal = ({ open, setOpen }) => {
  const [form] = Form.useForm();

  const [isTextareaOpen, setIsTextareaOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function openAssignedToWorkModal() {
    setIsSuccessModalOpen(true);
  }

  const handleCancel = () => {
    setOpen(false);
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  const { t } = useTranslation();

  return (
    <>
      <Modal
        open={open}
        onCancel={handleCancel}
        wrapClassName="choose-resume-modal"
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          className="report-form"
          // validateMessages={validateMessages}
          name="basic"
          initialValues={
            {
              // require: true,
              // requiredMark: true,
              // requiredMarkValue: requiredMark,
            }
          }
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="container__choose-resume-modal">
            <Row gutter={[20, 8]}>
              <Col xs={24} sm={24}>
                <h2> {t("selectYourResume")} </h2>
              </Col>
              <Col xs={24} sm={24} className="header__choose-resume-modal">
                <h4>{t("submitToWork")}</h4>
                <button type="button">
                  {t("createAResume")}
                  <img src={PlusIcon} alt="PlusIcon" />
                </button>
              </Col>
              <Col xs={24} sm={24}>
                <Form.Item className="radio-item__choose-resume-modal">
                  <Radio.Group className="radio-group__choose-resume-modal">
                    <Radio value="1" size="large">
                      <div className="profile-group__choose-resume-modal">
                        <img src={Boy} alt="Boy" />
                        <span>
                          <h5>{t("productManager")}</h5>
                          <p>{t("change")}</p>
                        </span>
                      </div>
                    </Radio>
                    <Radio value="2" size="large">
                      <div className="profile-group__choose-resume-modal">
                        <img src={Boy} alt="Boy" />
                        <span>
                          <h5>{t("productManager")}</h5>
                          <p>{t("change")}</p>
                        </span>
                      </div>
                    </Radio>
                    <Radio value="3" size="large">
                      <div className="profile-group__choose-resume-modal">
                        <img src={Boy} alt="Boy" />
                        <span>
                          <h5>{t("productManager")}</h5>
                          <p>{t("change")}</p>
                        </span>
                      </div>
                    </Radio>
                  </Radio.Group>
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} className="footer__choose-resume-modal">
                <div className="footer-item__choose-resume-modal">
                  <p>{t("coverLetter1")}</p>
                  <Switch onChange={() => setIsTextareaOpen(!isTextareaOpen)} />
                </div>
                {isTextareaOpen && (
                  <div className="textarea__choose-resume-modal">
                    <TextArea rows={4} />
                  </div>
                )}

                <div className="footer-item__choose-resume-modal footer-item__choose-resume-modal--last">
                  <p>{t("getInformationAboutTheVacancy")} </p>
                  <Switch onChange={onChange} />
                </div>
              </Col>

              <button
                type="submit"
                className="primary-btn"
                onClick={openAssignedToWorkModal}
              >
                {t("submitAnApplication")}
              </button>
            </Row>
          </div>
        </Form>
      </Modal>

      <AssignedToWorkModal
        isAssignedToWorkModalOpen={isSuccessModalOpen}
        setIsAssignedToWorkModalOpen={setIsSuccessModalOpen}
      />
    </>
  );
};

export default ChooseResumeModal;
