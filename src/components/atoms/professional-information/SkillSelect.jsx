import { Divider, Form, Select, Space } from "antd";
import React from "react";
import LabeledInput from "src/components/molecules/labeled-input/LabeledInput";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useCreateSkillMutation, useGetAllSkillQuery } from "src/store/api/apiSlice";

const SkillSelect = ({ form }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState("");

  const { data: skills } = useGetAllSkillQuery();
  const [createSkill] = useCreateSkillMutation();

  function handleSearchSkill(value) {
    setSearchValue(value);
  }

  function addNewSkill() {
    createSkill({
      name: searchValue,
    })
      .unwrap()
      .then((res) => setSearchValue(""))
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <LabeledInput
      labelName={t("skills")}
      labelFor="skills"
      input={
        <Select
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          size="large"
          placeholder="Please select"
          options={skills?.result?.map((option) => ({
            value: option.id.toString(),
            label: option.name,
          }))}
          onSearch={handleSearchSkill}
          notFoundContent={
            <div onClick={addNewSkill} style={{ padding: "5px 10px" }}>
              Add "{searchValue}"
            </div>
          }
          optionFilterProp={"label"}
        />
      }
    />
  );
};

export default SkillSelect;
