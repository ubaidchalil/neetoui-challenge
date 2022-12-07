import dayjs from "dayjs";

const formatContactDataForSave = contact => ({
  ...contact,
  createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  fullName: `${contact.firstName} ${contact.lastName}`,
  role: { id: contact.role.value, name: contact.role.label },
});

const formatContactDataForEdit = contact => ({
  ...contact,
  role: { value: contact.role.id, label: contact.role.name },
});

export { formatContactDataForSave, formatContactDataForEdit };
