import { Divider, Form, Select, Space } from "antd";
import React from "react";
import LabeledInput from "src/components/molecules/labeled-input/LabeledInput";

import { useTranslation } from "react-i18next";
import {
  useCreateSkillMutation,
  useGetAllSkillQuery,
} from "src/store/api/resumeApiSlice";
import { useDispatch } from "react-redux";

const SkillSelect = ({ form }) => {
  const { t } = useTranslation();

  const { data: skill } = useGetAllSkillQuery();
  const [createSkill] = useCreateSkillMutation();

  console.log(form.getFieldsValue());

  function handleChange(id, arr) {
    console.log("id:", id);
    console.log("arr:", arr);
    if (Object.keys(arr.at(-1) ?? {}).length === 0) {
      createSkill({
        name: id.at(-1),
      })
        .unwrap()
        .then((res) => {
          console.log(res.result.id);
          form.setFieldValue("skills", [
            ...form.getFieldValue("skills"),
            res.result.id,
          ]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      
    }
  }

  return (
    <LabeledInput
      labelName={t("skills")}
      labelFor="skills"
      input={
        <Select
          mode="tags"
          allowClear
          style={{
            width: "100%",
          }}
          size="large"
          placeholder="Please select"
          onChange={handleChange}
          options={skill?.result?.map((option) => ({
            value: option.id.toString(),
            label: option.name,
          }))}
        />
      }
    />
  );
};

export default SkillSelect;
