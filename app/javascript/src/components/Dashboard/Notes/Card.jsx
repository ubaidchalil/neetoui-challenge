import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tag, Tooltip, Avatar } from "neetoui";
import { formatDateToDayAndTime, formatDateToTimeSinceNow } from "utils";

import { NOTES_STATUS_TITLE } from "./constants";

const { Menu, MenuItem } = Dropdown;

const Card = ({ handleDelete, handleEdit, note }) => {
  const {
    title,
    description,
    tags = [],
    assigned_contact: assignedContact,
    updated_at: updatedAt,
    status,
  } = note;

  return (
    <div className="my-2 w-full rounded-sm border border-solid p-4 shadow">
      <div className="flex items-center justify-between">
        <Typography style="h4" weight="semibold">
          {title}
        </Typography>
        <Dropdown buttonStyle="text" icon={MenuVertical}>
          <Menu>
            <MenuItem.Button onClick={() => handleEdit(note)}>
              Edit
            </MenuItem.Button>
            <MenuItem.Button style="danger" onClick={() => handleDelete(note)}>
              Delete
            </MenuItem.Button>
          </Menu>
        </Dropdown>
      </div>
      <Typography style="body2">{description}</Typography>
      <hr className="my-4" />
      <div className="flex items-center justify-between">
        <div className="flex">
          {tags.map(tag => (
            <Tag
              className="mr-2 "
              key={tag.id}
              label={tag.name}
              style="secondary"
            />
          ))}
        </div>
        <div className="flex items-center">
          <Clock size={16} />
          <Tooltip
            content={formatDateToDayAndTime(updatedAt)}
            position="bottom"
          >
            <Typography className="mx-2" style="body2">
              {`${NOTES_STATUS_TITLE[status]} ${formatDateToTimeSinceNow(
                updatedAt
              )}`}
            </Typography>
          </Tooltip>
          <Avatar
            user={{
              imageUrl: assignedContact.profile_image_url,
              name: assignedContact.name,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
