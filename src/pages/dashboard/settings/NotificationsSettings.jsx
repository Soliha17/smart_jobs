import React from "react";
import { Switch, Tooltip } from "antd";

import "./settings.css"

import QuestionMark from "../../../assets/images/question-mark-dashboard.svg";

const NotificationsSettings = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="notifications__settings">
      <h3>Bildirishnomlar sozlamalari</h3>
      <div className="content-notifications__settings">
        <h4>SMS xabarnomalar</h4>
        <div className="card-notifications__settings">
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch defaultChecked onChange={onChange} size="large" />
          </div>
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch onChange={onChange} size="large" />
          </div>
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch onChange={onChange} size="large" />
          </div>
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch onChange={onChange} size="large" />
          </div>
        </div>
      </div>
      <div className="content-notifications__settings">
        <h4>Pochta ro'yxatlari</h4>
        <div className="card-notifications__settings">
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch defaultChecked onChange={onChange} size="large" />
          </div>
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch onChange={onChange} size="large" />
          </div>
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch onChange={onChange} size="large" />
          </div>
          <div className="col-notifications__settings">
            <span className="text-notifications__settings">
              Push-bildirishnomalar taklifnomalar
              <Tooltip
                placement="right"
                title={"Ma'lumotlarni  kiriting"}
                color="blue"
              >
                <img src={QuestionMark} alt="QuestionMark" />
              </Tooltip>
            </span>
            <Switch onChange={onChange} size="large" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSettings;
