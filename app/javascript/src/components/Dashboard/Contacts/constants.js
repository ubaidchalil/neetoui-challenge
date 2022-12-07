import * as yup from "yup";

export const CONTACTS_MENU_ITEMS = {
  filterTypes: [
    { label: "All", dataCount: 5, active: true },
    { label: "Archived", dataCount: 3 },
    { label: "Completed", dataCount: 1 },
    { label: "Phase 2", dataCount: 1 },
  ],
  segments: [],
  tags: [],
};

export const ROLES = [
  { id: 1, name: "Admin" },
  { id: 2, name: "Developer" },
  { id: 3, name: "Tester" },
  { id: 4, name: "DevOps" },
];

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      value: yup.number().required(),
      label: yup.string().required(),
    })
    .required("Role is required"),
});

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};
