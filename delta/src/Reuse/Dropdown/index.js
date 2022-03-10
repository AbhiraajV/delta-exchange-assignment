import React from "react";
import "./index.css";
import Checkbox from "../Checkbox";
function Dropdown({ title, list, setExcludedCompanies }) {
  const UniqueCompany = [
    ...new Map(list.map((item) => [item["company"], item])).values(),
  ];
  return (
    <div className="nav__listitem">
      {title}
      <ul className="nav__listitemdrop">
        {UniqueCompany.map((li, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "space-between",
            }}
          >
            {li.company}{" "}
            <Checkbox
              onChangeFunc={() => {
                const company = li.company;
                setExcludedCompanies((prev) => {
                  const temp = prev;
                  if (temp.includes(company)) {
                    const index = temp.indexOf(company);
                    temp.splice(index, 1);
                  } else {
                    temp.push(company);
                  }
                  console.log(temp, "end");
                  return [...temp];
                });
              }}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;
