import React from "react";
import toast from "react-hot-toast";

const CustomToast = ({ message, icon }) => {
  const showToast = () => {
    toast(message, {
      icon: icon || "⚠️",
    });
  };

  return { showToast };
};

export default CustomToast;
