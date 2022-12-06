import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import SideMenuBar from "components/Common/SideMenuBar";
import { notes as noteList } from "data";

import Card from "./Card";
import { NOTES_MENU_ITEMS } from "./constants";
import DeleteAlert from "./DeleteAlert";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [selectedNoteForDelete, setSelectedNoteForDelete] = useState({});
  const [showSideMenuBar, setShowSideMenuBar] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

  useEffect(() => {
    setNotes(noteList);
  }, []);

  const confirmDelete = () => {
    const { id: noteId } = selectedNoteForDelete;
    const indexOfSelectedNote = notes.findIndex(note => note.id === noteId);
    if (indexOfSelectedNote === -1) {
      return;
    }

    notes.splice(indexOfSelectedNote, 1);
    setNotes([...notes]);
    setShowDeleteAlert(false);
  };

  const handleDelete = note => {
    setSelectedNoteForDelete(note);
    setShowDeleteAlert(true);
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
            <Button icon="ri-add-line" label="Add note" size="small" />
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
              {...note}
              assignedContact={note.assigned_contact}
              handleDelete={handleDelete}
              id={note.id}
              key={note.id}
              updatedAt={note.updated_at}
            />
          ))
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryActionLabel="Add note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        {showDeleteAlert && (
          <DeleteAlert
            confirmDelete={confirmDelete}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
