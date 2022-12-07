import * as yup from "yup";

export const NOTES_STATUS_TITLE = {
  created: "Created",
  drafted: "Drafted",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignedContact: yup
    .object()
    .nullable()
    .shape({
      value: yup.number().required(),
      label: yup.string().required(),
    })
    .required("Assigned Contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        value: yup.number().required(),
        label: yup.string().required(),
      })
    )
    .min(1, "Select at least one tag"),
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

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const NOTES = [
  {
    id: 1,
    title: "Reusable components",
    description:
      "In React, a reusable component is a piece of UI that can be used in various part of an application to build more than one UI instance.",
    assigned_contact: {
      id: 1,
      name: "Jimmy Hern",
      profile_image_url: "https://i.pravatar.cc/300",
    },
    tags: [
      { id: 1, name: "Getting Started" },
      { id: 2, name: "Onboarding" },
    ],
    status: "created",
    updated_at: "2022-12-05 17:24:43",
  },
  {
    id: 2,
    title: "What is CRUD?",
    description:
      "In the software development world, CRUD consists of four operations - create, read, update, and delete.",
    assigned_contact: { id: 2, name: "Jack Paul", profile_image_url: null },
    tags: [{ id: 1, name: "Getting Started" }],
    status: "created",
    updated_at: "2022-12-05 17:24:43",
  },
  {
    id: 3,
    title: "What is a slug?",
    description:
      "A slug is the part of a URL that identifies a page in human-readable keywords.",
    assigned_contact: { id: 3, name: "Arun Mdhav", profile_image_url: null },
    tags: [{ id: 1, name: "Getting Started" }],
    status: "drafted",
    updated_at: "2022-12-05 17:24:43",
  },
  {
    id: 4,
    title: "Rails Models",
    description:
      "Models are Ruby classes that can be hold the value of a single row in a database table.",
    assigned_contact: {
      id: 1,
      name: "Jimmy Hern",
      profile_image_url: "https://i.pravatar.cc/300",
    },
    tags: [{ id: 1, name: "Getting Started" }],
    status: "created",
    updated_at: "2022-12-05 17:24:43",
  },
  {
    id: 5,
    title: "What is CircleCI?",
    description:
      "CircleCI is a modern continuous integration and continuous delivery (CI/CD) platform.",
    assigned_contact: { id: 2, name: "Jack paul", profile_image_url: null },
    tags: [{ id: 1, name: "Getting Started" }],
    status: "drafted",
    updated_at: "2022-12-05 17:24:43",
  },
];

export const TAGS = [
  { id: 1, name: "Getting Started" },
  { id: 2, name: "Onboarding" },
  { id: 3, name: "User Flow" },
  { id: 4, name: "UX" },
  { id: 5, name: "Bugs" },
  { id: 6, name: "V2" },
];
