import { Collapse } from "antd";

import "./faqMock.css";
import { useTranslation } from "react-i18next";
import ArrowIcon from "./ArrowIcon";

const { Panel } = Collapse;

const text = `
  Responsibilities:
Ensuring successful and timely delivery of our services to clients
Working on contracts, agreements, and other account documentation
And any other activities that would boost company performance
`;

const customExpandIcon = (panelProps) => {
  if (panelProps.isActive) {
    return <ArrowIcon className="close-icon__antd" />;
  } else {
    return <ArrowIcon className="open-icon__antd" />;
  }
};

const FaqMock = () => {
  const { t } = useTranslation();

  return (
    <div className="mock-faq container">
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
          <p className="desc__mock-faq">{text}</p>
        </Panel>
        <Panel header={t("faq2")} key="2">
          <p className="desc__mock-faq">{text}</p>
        </Panel>
        <Panel header={t("faq3")} key="3">
          <p className="desc__mock-faq">{text}</p>
        </Panel>
        <Panel header={t("faq4")} key="4">
          <p className="desc__mock-faq">{text}</p>
        </Panel>
        <Panel header={t("faq2")} key="5">
          <p className="desc__mock-faq">{text}</p>
        </Panel>
      </Collapse>
    </div>
  );
};
export default FaqMock;
