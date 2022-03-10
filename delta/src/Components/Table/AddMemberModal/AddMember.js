import React, { useState } from "react";
import "./index.css";
import Checkbox from "../../../Reuse/Checkbox";
import Button from "../../../Reuse/Button";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "../../../Features/team";
import FunctionAddMember from "./FunctionAddMember";
function AddMember({ addUser, setAddUser }) {
  const [formInput, setFormInput] = useState({
    name: "",
    company: "",
    notes: "",
    status: false,
  });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.team.value);
  return (
    <div className="modal">
      <h2>Add Member</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setFormInput((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <input
        type="text"
        placeholder="Company"
        onChange={(e) =>
          setFormInput((prev) => {
            return { ...prev, company: e.target.value };
          })
        }
      />

      <textarea
        placeholder="Notes"
        onChange={(e) =>
          setFormInput((prev) => {
            return { ...prev, notes: e.target.value };
          })
        }
      />

      <span className="StaCon">
        Status
        <Checkbox
          onChangeFunc={(e) =>
            setFormInput((prev) => {
              return { ...prev, status: !prev.status };
            })
          }
        />
      </span>
      <Button
        placeholder={"Add"}
        onclick={async () => {
          const member = await FunctionAddMember(formInput, dispatch);
          setAddUser(!addUser);
        }}
      />
      <button className="close" onClick={() => setAddUser(!addUser)}>
        Close
      </button>
    </div>
  );
}

export default AddMember;
