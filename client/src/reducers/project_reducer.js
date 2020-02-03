import { ADD_PROJECT } from "../actions/types";

const initialState = {
  _id: "",
  title: "",
  description: "",
  issueid: "",
  projectManager: "",
  developer: "",
  brand: "",
  benefitsByMarket: [
    {
      name: "",
      hours: 0
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return state;
    default:
      return state;
  }
}
