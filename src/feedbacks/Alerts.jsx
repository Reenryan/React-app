import { createContext, useContext, useState } from "react";

// Create a context
const FeedbackContext = createContext();

// Create a provider component
export function FeedbackProvider({ children }) {
  const [alert, setAlert] = useState({
    message: "",
    color: "",
    visible: false,
  });

  const showAlert = (message, color = "rgba(238, 75, 34, 1)", time = 5000) => {
    setAlert({ message, color, visible: true });

    setTimeout(() => {
      setAlert({ message: "", color: "", visible: false });
    }, time);
  };

  return (
    <FeedbackContext.Provider value={{ alert, showAlert }}>
      {children}
      {alert.visible && (
        <div
          className="feedback-alert"
          style={{
            backgroundColor: alert.color,
            color: "#fff",
            padding: "10px 15px",
            borderRadius: "8px",
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          }}
        >
          {alert.message}
        </div>
      )}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  return useContext(FeedbackContext);
}
