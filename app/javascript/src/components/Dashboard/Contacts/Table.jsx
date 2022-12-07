import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Table as NeetoUITable, Avatar, Typography, Dropdown } from "neetoui";
import { formatDateToDayAndTime } from "utils";

const { Menu, MenuItem } = Dropdown;

const renderAvatarWithNameAndRole = (fullName, { role, imageUrl }) => (
  <div className="flex space-x-2">
    <Avatar showTooltip size="large" user={{ imageUrl, name: fullName }} />
    <div className="flex flex-col">
      <Typography style="h4">{fullName}</Typography>
      <Typography style="body3">{role.name}</Typography>
    </div>
  </div>
);

const renderDropdownMenu = ({ handleDelete, handleEdit, contact }) => (
  <Dropdown buttonStyle="text" icon={MenuHorizontal}>
    <Menu>
      <MenuItem.Button onClick={() => handleEdit(contact)}>
        Edit
      </MenuItem.Button>
      <MenuItem.Button style="danger" onClick={() => handleDelete(contact)}>
        Delete
      </MenuItem.Button>
    </Menu>
  </Dropdown>
);

const Table = ({ contacts, handleDelete, handleEdit }) => (
  <div className="contacts-table-height w-full">
    <NeetoUITable
      rowSelection
      defaultPageSize={10}
      rowData={contacts}
      columnData={[
        {
          title: "Name and Role",
          dataIndex: "fullName",
          key: "fullName",
          width: "40%",
          render: renderAvatarWithNameAndRole,
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          width: "30%",
        },
        {
          title: "Created at",
          dataIndex: "createdAt",
          key: "createdAt",
          width: "20%",
          render: formatDateToDayAndTime,
        },
        {
          dataIndex: "id",
          key: "id",
          width: "10%",
          render: (_, contact) =>
            renderDropdownMenu({ handleDelete, handleEdit, contact }),
        },
      ]}
    />
  </div>
);

export default Table;
