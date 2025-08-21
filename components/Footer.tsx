import { APP_NAME } from "@/lib/constants";
import React from "react";

const Footer = () => {
  const getYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="text-center p-5">
        {getYear} &copy; {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
