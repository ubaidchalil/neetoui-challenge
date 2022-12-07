import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const CreateOrEditPane = ({
  isEdit = false,
  note,
  showPane,
  setShowPane,
  handleSubmit,
}) => {
  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {isEdit ? "Edit Note" : "Create a new note"}
        </Typography>
      </Pane.Header>
      <Form
        handleSubmit={handleSubmit}
        isEdit={isEdit}
        note={note}
        onClose={onClose}
      />
    </Pane>
  );
};

export default CreateOrEditPane;
