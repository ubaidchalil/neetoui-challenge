import { toast, Slide } from "react-toastify";

const FEATURE_LIST = [
  "Uses Rails, React, Tailwind CSS and Webpacker.",
  "Uses Devise, Honeybadger, Sidekiq, PostgreSQL, ActiveAdmin.",
  "Heroku ready. Push to Heroku and it will work.",
  "Uses slim for cleaner syntax over erb and better performance over haml.",
  "Intercepts all outgoing emails in non production environment using gem mail_interceptor.",
  "Uses SemaphoreCI for continuous testing.",
  "Content compression via Rack::Deflater.",
  "Auto-formats Ruby code with rubocop.",
  "Auto-formats JavaScript and CSS code with prettier.",
  "Performs background job processing 'inline' for heroku env. It means heroku can deliver emails.",
  "Letter opener gem for development.",
];

const TOASTR_OPTIONS = {
  position: toast.POSITION.BOTTOM_CENTER,
  transition: Slide,
  theme: "colored",
};

const CONTACTS = [
  {
    id: 1,
    imageUrl: "https://i.pravatar.cc/300",
    firstName: "Ronald",
    lastName: "Richards",
    fullName: "Ronald Richards",
    email: "ronald@example.com",
    role: { id: 1, name: "Admin" },
    createdAt: "2022-12-07 12:55:33",
  },
  {
    id: 2,
    imageUrl: "https://i.pravatar.cc/300",
    firstName: "Albert",
    lastName: "Ferrara",
    fullName: "Albert Ferrara",
    email: "albert@example.com",
    role: { id: 2, name: "Developer" },
    createdAt: "2022-12-07 12:55:33",
  },
  {
    id: 3,
    imageUrl: "https://i.pravatar.cc/300",
    firstName: "Thomas",
    lastName: "Mullar",
    fullName: "Thomas Mullar",
    email: "thomas@example.com",
    role: { id: 3, name: "Tester" },
    createdAt: "2022-12-07 12:55:33",
  },
  {
    id: 4,
    imageUrl: "https://i.pravatar.cc/300",
    firstName: "Shayam",
    lastName: "Madhav",
    fullName: "Shyam Madhav",
    email: "shaym@example.com",
    role: { id: 4, name: "DevOps" },
    createdAt: "2022-12-07 12:55:33",
  },
  {
    id: 5,
    imageUrl: "https://i.pravatar.cc/300",
    firstName: "Ubaid",
    lastName: "Chalil",
    fullName: "Ubaid Chalil",
    email: "ubaid@example.com",
    role: { id: 1, name: "Admin" },
    createdAt: "2022-12-07 12:55:33",
  },
];

export { TOASTR_OPTIONS, FEATURE_LIST, CONTACTS };
