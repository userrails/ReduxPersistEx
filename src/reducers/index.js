import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

const initialState = {
  reminders: [{id: '1001', text: 'Default value', dueDate: '2019-10-12'}]
};

const removeById = (state, id) => {
  const reminders = state.reminders.filter(reminder => reminder.id !== id)
  return reminders;
}

const reminders = (state = initialState, action) => {
  switch(action.type) {
    case ADD_REMINDER:
      return {...state, reminders: [...state.reminders, action.payload]};
    case DELETE_REMINDER:
      let res = removeById(state, action.id);
      return {...state, reminders: res}
    case CLEAR_REMINDERS:
      return {...state, reminders: []};
    default:
      return state;
  }
}

export default reminders;
