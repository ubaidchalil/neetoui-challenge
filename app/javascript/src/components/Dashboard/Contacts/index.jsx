import React, { useState, useEffect } from "react";

import EmptyListImage from "images/EmptyList";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";
import SideMenuBar from "components/Common/SideMenuBar";
import { CONTACTS } from "components/constants";

import { CONTACTS_MENU_ITEMS } from "./constants";
import Table from "./Table";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSideMenuBar, setShowSideMenuBar] = useState(true);

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

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
            <Button icon="ri-add-line" label="Add Contact" size="small" />
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
    </>
  );
};

export default Contacts;
