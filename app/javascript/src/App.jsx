import React from "react";

import Main from "components/Main";
import ThemeWrapper from "components/ThemeWrapper";
import { AuthProvider } from "contexts/auth";
import { UserProvider } from "contexts/user";

const App = props => (
  <AuthProvider>
    <UserProvider>
      <ThemeWrapper>
        <Main {...props} />
      </ThemeWrapper>
    </UserProvider>
  </AuthProvider>
);

export default App;
