import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";
import { buildSelectOptions } from "utils";

import { CONTACTS } from "components/constants";

import { NOTES_FORM_VALIDATION_SCHEMA, TAGS } from "../constants";

const NoteForm = ({ onClose, handleSubmit, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={values => handleSubmit({ note: values, isEdit })}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={8}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignedContact"
              placeholder="Select Contact"
              options={buildSelectOptions({
                data: CONTACTS,
                labelKey: "fullName",
              })}
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              placeholder="Select Tags"
              options={buildSelectOptions({
                data: TAGS,
              })}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              type="reset"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
