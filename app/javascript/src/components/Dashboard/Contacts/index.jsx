import React, { useState, useEffect } from "react";

import EmptyListImage from "images/EmptyList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import { CONTACTS } from "components/constants";

import Table from "./Table";

const Notes = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

  return (
    <Container>
      <Header
        title="Contacts"
        actionBlock={
          <Button icon="ri-add-line" label="Add Contact" size="small" />
        }
        searchProps={{
          value: searchTerm,
          placeholder: "Search Name, Email and Phone Number",
          onChange: e => setSearchTerm(e.target.value),
        }}
      />
      {contacts.length > 0 ? (
        <Table contacts={contacts} />
      ) : (
        <EmptyState
          image={EmptyListImage}
          primaryActionLabel="Add Contacts"
          subtitle="Add your contacts and notes to them."
          title="Looks like you don't have any contacts!"
        />
      )}
    </Container>
  );
};

export default Notes;
