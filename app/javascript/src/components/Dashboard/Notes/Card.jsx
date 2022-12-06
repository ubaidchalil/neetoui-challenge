import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Dropdown, Tag, Tooltip, Avatar } from "neetoui";
import PropTypes from "prop-types";
import { formatDateToDayAndTime, formatDateToTimeSinceFromNow } from "utils";

import { NOTES_STATUS_TITLE } from "./constants";

const { Menu, MenuItem } = Dropdown;

const Card = ({
  title,
  description,
  tags = [],
  assignedContact,
  updatedAt,
  status,
}) => (
  <div className="my-2 w-full rounded-sm border border-solid p-4 shadow">
    <div className="flex items-center justify-between">
      <Typography style="h4" weight="semibold">
        {title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button
            style="danger"
            onClick={() => alert("Delete functionality is in progress")}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
    <Typography style="body2">{description}</Typography>
    <hr className="my-4" />
    <div className="flex items-center justify-between">
      {tags.map((tag, idx) => (
        <Tag
          className="mr-2 "
          key={`tag-${idx}`}
          label={tag}
          style="secondary"
        />
      ))}
      <div className="flex items-center">
        <Clock size={16} />
        <Tooltip content={formatDateToDayAndTime(updatedAt)} position="bottom">
          <Typography className="mx-2" style="body2">
            {`${NOTES_STATUS_TITLE[status]} ${formatDateToTimeSinceFromNow(
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

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.array,
  assignedContact: PropTypes.object,
  updatedAt: PropTypes.string,
  status: PropTypes.string,
};

export default Card;
