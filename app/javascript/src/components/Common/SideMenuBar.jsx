import React, { useState } from "react";

import { Search, Settings, Plus } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";
import PropTypes from "prop-types";

const SideMenuBar = ({ showSideMenuBar, title, menuData }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(false);

  return (
    <MenuBar showMenu={showSideMenuBar} title={title}>
      {menuData.filterTypes.map(({ label, dataCount, active }, idx) => (
        <MenuBar.Block
          active={active}
          count={dataCount}
          key={`filter-type-${idx}`}
          label={label}
        />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Search,
            onClick: () =>
              setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Segments
        </Typography>
      </MenuBar.SubTitle>
      <MenuBar.Search
        collapse={isSearchCollapsed}
        onCollapse={() => setIsSearchCollapsed(true)}
      />
      {menuData.segments.map(({ label, dataCount }, idx) => (
        <MenuBar.Block count={dataCount} key={`segment-${idx}`} label={label} />
      ))}
      <MenuBar.SubTitle
        iconProps={[
          {
            icon: Settings,
          },
          {
            icon: Plus,
          },
          {
            icon: Search,
          },
        ]}
      >
        <Typography
          component="h4"
          style="h5"
          textTransform="uppercase"
          weight="bold"
        >
          Tags
        </Typography>
      </MenuBar.SubTitle>
      {menuData.tags.map(({ label, dataCount }, idx) => (
        <MenuBar.Block count={dataCount} key={`tag-${idx}`} label={label} />
      ))}
    </MenuBar>
  );
};

SideMenuBar.propTypes = {
  showSideMenuBar: PropTypes.bool,
  title: PropTypes.string,
  menuData: PropTypes.object,
};

export default SideMenuBar;
