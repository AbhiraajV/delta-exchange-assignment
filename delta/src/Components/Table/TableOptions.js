import React from "react";
import Button from "../../Reuse/Button";
import Dropdown from "../../Reuse/Dropdown";
import { CSVLink } from "react-csv";
import { csv } from "./FillCSV";
import { useDispatch } from "react-redux";
import { membersDelete, sortTeam } from "../../Features/team";

function TableOptions({ members, setExcludedCompanies, setAddUser, CSV }) {
  const dispatch = useDispatch();
  csv.data = CSV;
  return (
    <div className="tableRow">
      <Button placeholder={"Add Member +"} onclick={() => setAddUser(true)} />

      {members && (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Button
            placeholder={
              <CSVLink style={{ color: "white" }} {...csv}>
                Export to CSV
              </CSVLink>
            }
          />
          <Button
            placeholder={"Sort By Status"}
            onclick={() => {
              dispatch(sortTeam());
            }}
          />{" "}
          <button
            className="close"
            onClick={() => dispatch(membersDelete(CSV))}
          >
            Delete
          </button>
        </div>
      )}
      {members && (
        <Dropdown
          title={"Company"}
          list={members}
          setExcludedCompanies={setExcludedCompanies}
        />
      )}
    </div>
  );
}

export default TableOptions;
