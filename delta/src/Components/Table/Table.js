import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./index.css";
import TableOptions from "./TableOptions";
import FillTable from "./FillTable";
import { setTeam, sortTeam } from "../../Features/team";
import Checkbox from "../../Reuse/Checkbox";
import AddMember from "./AddMemberModal/AddMember";
import FillCSV, { selectAllFunction } from "./FillCSV";
function Data() {
  const [excludedCompanies, setExcludedCompanies] = useState([]);
  const [CSV, setCSV] = useState([]);
  const [addUser, setAddUser] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.team.value);
  const user = useSelector((state) => state.user.value);
  let navigate = useNavigate();
  if (!localStorage.getItem("user")) navigate("/login");

  useEffect(async () => {
    dispatch(setTeam(await FillTable()));
  }, []);
  return (
    <div className="table">
      {addUser && <AddMember addUser={addUser} setAddUser={setAddUser} />}
      <h2>
        {user.email}'s
        <br /> Team Members
      </h2>

      <TableOptions
        members={data}
        setExcludedCompanies={setExcludedCompanies}
        setAddUser={setAddUser}
        CSV={CSV}
      />

      <ul className="tableBody">
        <li className="tableHead">
          <div className="col">
            Choose All{" "}
            <Checkbox
              onChangeFunc={(e) => selectAllFunction(e, data, setCSV)}
            />
          </div>
          {["Name", "Company", "Notes", "Status"].map((el, ind) => (
            <div className="col" key={ind}>
              {el}
            </div>
          ))}
        </li>
        {data && data.length > 0 ? (
          data
            .filter((obj) => !excludedCompanies.includes(obj.company))
            .map((member) => (
              <li className="tableRow" key={member._id}>
                <Checkbox
                  onChangeFunc={() => FillCSV(setCSV, member)}
                  name={"check"}
                />
                <div className="col">{member.name}</div>
                <div className="col">{member.company}</div>
                <div className="col">{member.notes}</div>
                <div className="col">{member.status ? "Active" : "Closed"}</div>
              </li>
            ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
}

export default Data;
