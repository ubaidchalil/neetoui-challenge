import * as yup from "yup";

export const NOTES_STATUS_TITLE = {
  created: "Created",
  drafted: "Drafted",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_MENU_ITEMS = {
  filterTypes: [
    { label: "All", dataCount: 13, active: true },
    { label: "Users", dataCount: 2 },
    { label: "Leads", dataCount: 7 },
    { label: "Visitors", dataCount: 4 },
  ],
  segments: [
    { label: "Europe", dataCount: 80 },
    { label: "Middle-East", dataCount: 75 },
    { label: "Asia", dataCount: 50 },
  ],
  tags: [
    { label: "Getting Started", dataCount: 40 },
    { label: "Onboarding", dataCount: 55 },
    { label: "User Flow", dataCount: 65 },
    { label: "UX", dataCount: 55 },
    { label: "Bugs", dataCount: 45 },
    { label: "V2", dataCount: 75 },
  ],
};
