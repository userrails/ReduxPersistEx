import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { addReminder, deleteReminder, clearReminders } from '../actions';
import moment from 'moment';

class Remainder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  // This tells redux is working now
  addReminder() {
    // console.log('this.state', this.state);
    // console.log('this', this);
    console.log("this.state.dueDate", this.state.dueDate)
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    console.log('deleting in application', id);
    console.log('this.props', this.props);
    this.props.deleteReminder(id);
  }

  // clearReminders() {
  //   this.props.clearReminders();
  // }

  renderReminders() {
    const { reminders } = this.props;
    // console.log('reminders', reminders );
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

        <div class="row">
          <div className="form-inline">
            <div className="form-group">
              <input className="form-control"
                     placeholder="Enter ToDo ..."
                     onChange={event => this.setState({text: event.target.value})} />
            
              <input className="form-control"
                     type="datetime-local"
                     onChange={event => this.setState({dueDate: event.target.value})} />
            </div>
            
            <div class="form-group">
              <button type="button"
                     className="btn btn-success"
                     onClick={() => this.addReminder()}
                     >Add Reminder</button>
            </div>

            <div class="form-group">
              <div 
                className="btn btn-danger"
                onClick={() => this.props.clearReminders()}
              >
                Clear Reminders
              </div>
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
  console.log('state', state);
  return {
    reminders: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder, deleteReminder, clearReminders}, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Remainder);

// export default App;