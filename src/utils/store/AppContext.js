import React from "react";

const AppContext = React.createContext({ loggedIn: false, user: null });

export default AppContext;
