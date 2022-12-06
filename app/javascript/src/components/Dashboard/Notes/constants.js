import * as yup from "yup";

export const NOTES_STATUS_TITLE = {
  created: "Created",
  drafted: "Drafted",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});
