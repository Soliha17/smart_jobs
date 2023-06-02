import { Collapse } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

import "./accordionFaq.css";
import { useTranslation } from "react-i18next";

const { Panel } = Collapse;

const text = `
  Responsibilities:
Ensuring successful and timely delivery of our services to clients
Working on contracts, agreements, and other account documentation
And any other activities that would boost company performance
`;

const customExpandIcon = (panelProps) => {
  if (panelProps.isActive) {
    return <CloseOutlined className="close-icon__antd" />;
  } else {
    return <PlusOutlined className="plus-icon__antd" />;
  }
};

const AccordionFaq = () => {
  const { t } = useTranslation();

  return (
    <div className="accordion-faq container">
      <h3 className="title"> {t("faq")} </h3>
      <Collapse
        defaultActiveKey={["0"]}
        expandIconPosition={"end"}
        size="large"
        expandIcon={customExpandIcon}
        accordion
        ghost
      >
        <Panel header={t("faq1")} key="1">
          <p>{text}</p>
        </Panel>
        <Panel header={t("faq2")} key="2">
          <p>{text}</p>
        </Panel>
        <Panel header={t("faq3")} key="3">
          <p>{text}</p>
        </Panel>
        <Panel header={t("faq4")} key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default AccordionFaq;
