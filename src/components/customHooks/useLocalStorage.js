import React from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = React.useState(() => {
    const jsonVal = localStorage.getItem(key);
    if (jsonVal) return JSON.parse(jsonVal);
    return initialValue;
  });
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

// const [todos, setTodos] = useLocalStorage("todos", initialState);
//Custom Hooks LocalStorage