import { Steps } from "antd";

import "./vacancyStepper.css";

const VacancyStepper = () => (
  <>
    <Steps
      progressDot
      current={1}
      items={[
        {
          title: "Finished",
          description: "This is a description.",
        },
        {
          title: "In Progress",
          description: "This is a description.",
        },
        {
          title: "Waiting",
          description: "This is a description.",
        },
      ]}
    />
  </>
);
export default VacancyStepper;
