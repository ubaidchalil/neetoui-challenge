import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import SideMenuBar from "components/Common/SideMenuBar";
import { notes as noteList } from "data";

import Card from "./Card";
import { NOTES_MENU_ITEMS } from "./constants";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [showSideMenuBar, setShowSideMenuBar] = useState(true);

  useEffect(() => {
    setNotes(noteList);
  }, []);

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
      </Container>
    </>
  );
};

export default Notes;
