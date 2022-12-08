import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const CreateOrEdit = ({
  isEdit = false,
  contact,
  showPane,
  setShowPane,
  handleSubmit,
}) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {isEdit ? "Edit Contact" : "Create a new contact"}
        </Typography>
      </Pane.Header>
      <Form
        contact={contact}
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        onClose={onClose}
      />
    </Pane>
  );
};

export default CreateOrEdit;
