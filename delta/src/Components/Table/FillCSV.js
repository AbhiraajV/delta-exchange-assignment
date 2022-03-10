export default (setCSV, cur) => {
  setCSV((prev) => {
    const temp = prev;
    if (temp.includes(cur)) {
      const index = temp.indexOf(cur);
      temp.splice(index, 1);
    } else {
      temp.push(cur);
    }
    return [...temp];
  });
};
const headers = [
  { label: "Name", key: "name" },
  { label: "Company", key: "company" },
  { label: "Notes", key: "notes" },
  { label: "Status", key: "status" },
];
export const csv = {
  data: [],
  headers: headers,
  filename: "delta_exchange.csv",
};
export const selectAllFunction = (e, data, setCSV) => {
  var checkboxes = document.getElementsByName("check");
  if (e.target.checked) {
    for (var checkbox of checkboxes) {
      checkbox.checked = e.target.checked;
      setCSV(data);
    }
  } else {
    for (var checkbox of checkboxes) {
      checkbox.checked = e.target.checked;
      setCSV([]);
    }
  }
};
