import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import "./index.css";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) =>
    setOpenSection(openSection === section ? null : section);

  const sections = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <div className="sidebar">
      <div className="filter-item">
        <label>
          <input type="checkbox" /> CUSTOMIZABLE
        </label>
      </div>

      {sections.map((section, index) => (
        <div className="filter-section" key={index}>
          <div className="filter-header" onClick={() => toggleSection(section)}>
            <span>{section}</span>
            {openSection === section ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {openSection === section && (
            <div className="filter-body">
              <p>All</p>
              <label>
                <input type="checkbox" /> Option 1
              </label>
              <label>
                <input type="checkbox" /> Option 2
              </label>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
