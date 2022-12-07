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
    first_name: "Ronald",
    last_name: "Richards",
    full_name: "Ronald Richards",
    email: "ronald@example.com",
    role: "admin",
    updated_at: "2022-12-07 12:55:33",
  },
  {
    id: 2,
    first_name: "Albert",
    last_name: "Ferrara",
    full_name: "Albert Ferrara",
    email: "albert@example.com",
    role: "guest",
    updated_at: "2022-12-07 12:55:33",
  },
  {
    id: 3,
    first_name: "Thomas",
    last_name: "Mullar",
    full_name: "Thomas Mullar",
    email: "thomas@example.com",
    role: "developer",
    updated_at: "2022-12-07 12:55:33",
  },
  {
    id: 4,
    first_name: "Shayam",
    last_name: "Madhav",
    full_name: "Shyam Madhav",
    email: "shaym@example.com",
    role: "tester",
    updated_at: "2022-12-07 12:55:33",
  },
  {
    id: 5,
    first_name: "Ubaid",
    last_name: "Chalil",
    full_name: "Ubaid Chalil",
    email: "ubaid@example.com",
    role: "admin",
    updated_at: "2022-12-07 12:55:33",
  },
];

export { TOASTR_OPTIONS, FEATURE_LIST, CONTACTS };
