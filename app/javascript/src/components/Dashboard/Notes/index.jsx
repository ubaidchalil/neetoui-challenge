import React, { useState, useEffect } from "react";

import dayjs from "dayjs";
import EmptyListImage from "images/EmptyList";
import { Alert, Button, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import SideMenuBar from "components/Common/SideMenuBar";

import Card from "./Card";
import {
  NOTES,
  NOTES_FORM_INITIAL_FORM_VALUES,
  NOTES_MENU_ITEMS,
} from "./constants";
import CreateOrEditPane from "./Pane/CreateOrEdit";
import { formatNoteDataForApi, formatNoteDataForForm } from "./utils";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [selectedNoteForEditOrDelete, setSelectedNoteForEditOrDelete] =
    useState({});
  const [showSideMenuBar, setShowSideMenuBar] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showCreateOrEditPane, setShowCreateOrEditPane] = useState(false);
  const [isEditNote, setIsEditNote] = useState(false);

  useEffect(() => {
    setNotes(NOTES);
  }, []);

  const resetStates = () => {
    setShowCreateOrEditPane(false);
    setSelectedNoteForEditOrDelete({});
    setIsEditNote(false);
    setShowDeleteAlert(false);
    setShowSideMenuBar(false);
  };

  const handleDelete = note => {
    setSelectedNoteForEditOrDelete(note);
    setShowDeleteAlert(true);
  };

  const handleEdit = note => {
    setIsEditNote(true);
    setSelectedNoteForEditOrDelete(formatNoteDataForForm(note));
    setShowCreateOrEditPane(true);
  };

  const handleCreate = () => {
    setIsEditNote(false);
    setSelectedNoteForEditOrDelete({});
    setShowCreateOrEditPane(true);
  };

  const handleSubmit = ({ note, isEdit }) => {
    note.updatedAt = dayjs().format("YYYY-MM-DD HH:mm:ss");
    if (isEdit) {
      const indexOfSelectedNote = notes.findIndex(({ id }) => id === note.id);
      if (indexOfSelectedNote === -1) return;

      notes[indexOfSelectedNote] = formatNoteDataForApi(note);
    } else {
      const sortedNotesById = notes.sort((a, b) => a.id - b.id);

      const nextId =
        sortedNotesById.length === 0
          ? 1
          : sortedNotesById[sortedNotesById.length - 1].id + 1;
      note.id = nextId;
      notes.push(formatNoteDataForApi(note));
    }
    setNotes([...notes]);
    Toastr.success(
      `The note '${note.title}' was ${
        isEdit ? "updated" : "created"
      } successfully.`
    );

    resetStates();
  };

  const handleConfirmDelete = () => {
    const { id, title } = selectedNoteForEditOrDelete;
    const indexOfSelectedNote = notes.findIndex(note => note.id === id);
    if (indexOfSelectedNote === -1) return;

    notes.splice(indexOfSelectedNote, 1);
    setNotes([...notes]);
    Toastr.success(`The note '${title}' was deleted successfully.`);
    resetStates();
  };

  return (
    <>
      <SideMenuBar
        menuData={NOTES_MENU_ITEMS}
        showSideMenuBar={showSideMenuBar}
        title="Notes"
      />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add note"
              size="small"
              onClick={handleCreate}
            />
          }
          menuBarToggle={() =>
            setShowSideMenuBar(showSideMenuBar => !showSideMenuBar)
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email and Phone Number",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length > 0 ? (
          notes.map(note => (
            <Card
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              key={note.id}
              note={note}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyListImage}
            primaryActionLabel="Add note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        {showDeleteAlert && (
          <Alert
            isOpen
            message="Are you sure you want to delete this note?"
            title="Delete Note"
            onClose={() => setShowDeleteAlert(false)}
            onSubmit={handleConfirmDelete}
          />
        )}
        <CreateOrEditPane
          handleSubmit={handleSubmit}
          isEdit={isEditNote}
          setShowPane={setShowCreateOrEditPane}
          showPane={showCreateOrEditPane}
          note={
            isEditNote
              ? selectedNoteForEditOrDelete
              : NOTES_FORM_INITIAL_FORM_VALUES
          }
        />
      </Container>
    </>
  );
};

export default Notes;
