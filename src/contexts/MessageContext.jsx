import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MessageContext = createContext(null);

export const MessageProvider = ({ children }) => {
  const [message, setMessage] = useState("");

  const value = { message, setMessage };
  return (
    <MessageContext.Provider value={value}>{children}</MessageContext.Provider>
  );
};

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
