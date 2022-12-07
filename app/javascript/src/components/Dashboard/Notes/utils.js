import dayjs from "dayjs";
import { buildSelectOptions } from "utils";

const formatNoteDataForSave = note => ({
  id: note.id,
  title: note.title,
  description: note.description,
  status: note.status || "created",
  updated_at: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  assigned_contact: {
    id: note.assignedContact.value,
    name: note.assignedContact.label,
    profile_image_url: null,
  },
  tags: note.tags.map(tag => ({ id: tag.value, name: tag.label })),
});

const formatNoteDataForEdit = note => ({
  id: note.id,
  title: note.title,
  description: note.description,
  status: note.status || "created",
  updatedAt: note.updated_at,
  assignedContact: {
    value: note.assigned_contact.id,
    label: note.assigned_contact.name,
  },
  tags: buildSelectOptions({ data: note.tags }),
});

export { formatNoteDataForSave, formatNoteDataForEdit };
