import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];
export const teamSlice = createSlice({
  name: "team",
  initialState: { value: initialStateValue },
  reducers: {
    setTeam: (state, action) => {
      state.value = action.payload;
    },
    addMember: (state, action) => {
      state.value.push(action.payload);
    },
    membersDelete: (state, action) => {
      const temp = state.value;
      const toDelete = action.payload;
      for (var i in toDelete)
        temp.splice(
          temp.findIndex(
            (a) =>
              !(
                a.name === i.name &&
                a.company === i.company &&
                i.notes === a.notes &&
                i.status === a.status
              )
          ),
          1
        );

      state.value = temp;
    },
    sortTeam: (state, action) => {
      const temp = state.value;
      console.log(temp);
      temp.sort(function (x, y) {
        return x.status === y.status ? 0 : x.status ? -1 : 1;
      });
      state.value = temp;
    },
  },
});
export const { setTeam, addMember, sortTeam, membersDelete } =
  teamSlice.actions;
export default teamSlice.reducer;
