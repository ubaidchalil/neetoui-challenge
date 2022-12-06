import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import { notes as noteList } from "data";

import Card from "./Card";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(noteList);
  }, []);

  return (
    <Container>
      <Header
        title="Notes"
        searchProps={{
          value: searchTerm,
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
  );
};

export default Notes;
