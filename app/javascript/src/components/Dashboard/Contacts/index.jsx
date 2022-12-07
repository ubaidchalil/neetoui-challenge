import React, { useState, useEffect } from "react";

import EmptyListImage from "images/EmptyList";
import { Container } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import { CONTACTS } from "components/constants";

import Table from "./Table";

const Notes = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

  return (
    <Container>
      {contacts.length > 0 ? (
        <Table contacts={contacts} />
      ) : (
        <EmptyState
          image={EmptyListImage}
          primaryActionLabel="Add contacts"
          subtitle="Add your contacts and notes to them."
          title="Looks like you don't have any contacts!"
        />
      )}
    </Container>
  );
};

export default Notes;
