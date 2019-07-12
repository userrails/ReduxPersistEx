import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class Remainder extends Component {
  // This tells redux is working now
  addReminders() {
    let idValue = Math.random();
    let dateval = new Date(this.state.dueDate);
    const rec = {id: idValue, text: this.state.text, dueDate: dateval};
    this.props.addReminder(rec);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return(
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div className="list-item"><em>{moment(new Date(reminder.dueDate)).fromNow()}</em></div>
                <div 
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                  >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="title text-primary">
          Reminder Application
        </div>

        <div className="row">
          <div className="form-inline">
            <div className="form-group">
              <input className="form-control"
                     placeholder="Enter ToDo ..."
                     onChange={event => this.setState({text: event.target.value})} />
            
              <input className="form-control"
                     onChange={event => this.setState({dueDate: event.target.value})} />
            </div>
          </div>
          <div class="row">
            <div className="form-group">
              <button type="button"
                     className="btn btn-success"
                     onClick={() => this.addReminders()}
                     >Add Reminder</button>
            </div>

            <div className="form-group">
              <button type="button"
               className="btn btn-success"
               onClick={() => this.props.clearReminders()}
               >Clear Reminders</button>
            </div>
          </div>
        </div>
        
        <div className="row">
          { this.renderReminders() }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    reminders: state.reminders
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Remainder);
