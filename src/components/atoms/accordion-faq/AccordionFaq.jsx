import { Collapse } from "antd";
import { PlusOutlined, CloseOutlined } from "@ant-design/icons";

import "./accordionFaq.css";

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

const AccordionFaq = () => (
  <div className="accordion-faq container">
    <h3 className="title">Ko'p beriladigan savollar</h3>
    <Collapse
      defaultActiveKey={["0"]}
      expandIconPosition={"end"}
      size="large"
      expandIcon={customExpandIcon}
      accordion
      ghost
    >
      <Panel header="Rezyumesiz ham topshirsa bo’ladimi?" key="1">
        <p>{text}</p>
      </Panel>
      <Panel header="Meni ma’lumotlarim xavfsiz saqlanadimi" key="2">
        <p>{text}</p>
      </Panel>
      <Panel header="Smart Jobning boshqalarni nima farqi bor" key="3">
        <p>{text}</p>
      </Panel>
      <Panel header="Ishga topshirish uchun tajriba shartmi" key="4">
        <p>{text}</p>
      </Panel>
    </Collapse>
  </div>
);
export default AccordionFaq;
