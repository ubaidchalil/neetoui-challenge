import React, { useState, useEffect } from "react";

import EmptyListImage from "images/EmptyList";
import { Button, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import SideMenuBar from "components/Common/SideMenuBar";
import { CONTACTS } from "components/constants";

import {
  CONTACTS_FORM_INITIAL_FORM_VALUES,
  CONTACTS_MENU_ITEMS,
} from "./constants";
import CreateOrEditPane from "./Pane/CreateOrEdit";
import Table from "./Table";
import { formatContactDataForEdit, formatContactDataForSave } from "./utils";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContactForEditOrDelete, setSelectedContactForEditOrDelete] =
    useState({});
  const [showSideMenuBar, setShowSideMenuBar] = useState(true);
  const [showCreateOrEditPane, setShowCreateOrEditPane] = useState(false);
  const [isEditContact, setIsEditContact] = useState(false);

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

  const resetStates = () => {
    setShowCreateOrEditPane(false);
    setSelectedContactForEditOrDelete({});
    setIsEditContact(false);
    setShowSideMenuBar(false);
  };

  const handleCreate = () => {
    setIsEditContact(false);
    setSelectedContactForEditOrDelete({});
    setShowCreateOrEditPane(true);
  };

  const handleEdit = contact => {
    setIsEditContact(true);
    setSelectedContactForEditOrDelete(formatContactDataForEdit(contact));
    setShowCreateOrEditPane(true);
  };

  const handleSubmit = ({ contact, isEdit }) => {
    if (isEdit) {
      const indexOfSelectedContact = contacts.findIndex(
        ({ id }) => id === contact.id
      );
      if (indexOfSelectedContact === -1) return;

      contacts[indexOfSelectedContact] = formatContactDataForSave(contact);
    } else {
      const sortedContactsById = contacts.sort((a, b) => a.id - b.id);

      const nextId =
        sortedContactsById.length === 0
          ? 1
          : sortedContactsById[sortedContactsById.length - 1].id + 1;
      contact.id = nextId;
      contacts.push(formatContactDataForSave(contact));
    }
    setContacts([...contacts]);
    Toastr.success(
      `The contact '${contact.fullName}' was ${
        isEdit ? "updated" : "created"
      } successfully.`
    );

    resetStates();
  };

  return (
    <>
      <SideMenuBar
        menuData={CONTACTS_MENU_ITEMS}
        showSideMenuBar={showSideMenuBar}
        title="Contacts"
      />
      <Container>
        <Header
          title="Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
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
        {contacts.length > 0 ? (
          <Table contacts={contacts} handleEdit={handleEdit} />
        ) : (
          <EmptyState
            image={EmptyListImage}
            primaryActionLabel="Add Contacts"
            subtitle="Add your contacts and assign notes to them."
            title="Looks like you don't have any contacts!"
          />
        )}
        <CreateOrEditPane
          handleSubmit={handleSubmit}
          isEdit={isEditContact}
          setShowPane={setShowCreateOrEditPane}
          showPane={showCreateOrEditPane}
          contact={
            isEditContact
              ? selectedContactForEditOrDelete
              : CONTACTS_FORM_INITIAL_FORM_VALUES
          }
        />
      </Container>
    </>
  );
};

export default Contacts;
