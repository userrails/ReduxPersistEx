import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (rec) => {
  return {
    type: ADD_REMINDER,
    payload: rec
  }
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER, 
    id
  }
  console.log('deleting in actions', action)
  return action;
}

export const clearReminders = () => {
  return {
    type: CLEAR_REMINDERS
  }
}