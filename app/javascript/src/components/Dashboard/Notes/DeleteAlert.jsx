import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, confirmDelete }) => (
  <Alert
    isOpen
    message="Are you sure you want to delete this note?"
    title="Delete"
    onClose={onClose}
    onSubmit={confirmDelete}
  />
);

export default DeleteAlert;
