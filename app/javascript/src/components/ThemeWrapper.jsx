import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const ThemeWrapper = ({ children }) => (
  <div className={classnames("app", "app--theme")}>{children}</div>
);

ThemeWrapper.propTypes = {
  children: PropTypes.node,
};

export default ThemeWrapper;
