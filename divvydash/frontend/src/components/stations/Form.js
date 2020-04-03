import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStation } from '../../actions/stations';

export class Form extends Component{
  state = {
    station_id: '',
    num_bikes_available: '',
    num_docks_available: '',
    last_updated: ''
  };

static propTypes = { 
  addStation: PropTypes.func.isRequired
};

onChange = e => this.setState({ [e.target.name]: e.target.value });

onSubmit = e => {
  e.preventDefault();
  const { station_id, num_bikes_available, num_docks_available, last_updated } = this.state;
  const station = { station_id, num_bikes_available, num_docks_available, last_updated };
  this.props.addStation(station);
  this.setState({
    station_id: '',
    num_bikes_available: '',
    num_docks_available: '',
    last_updated: ''
  });
};

  render() {
    const { station_id, num_bikes_available, num_docks_available, last_updated } = this.state;
    return(
      <div className='card card-body mt-4 mb-4'>
        <h2>Add Station</h2>
        <form onSubmit={this.onSubmit}>
          <div className='form-group'>
            <label>Station ID</label>
            <input
              className='form-control'
              type='number'
              name='station_id'
              onChange={this.onChange}
              value={station_id}
              />
          </div>
          <div className='form-group'>
            <label>Bikes Available</label>
            <input
              className='form-control'
              type='number'
              name='num_bikes_available'
              onChange={this.onChange}
              value={num_bikes_available}
              />
          </div>
          <div className='form-group'>
            <label>Docks Available</label>
            <input
              className='form-control'
              type='number'
              name='num_docks_available'
              onChange={this.onChange}
              value={num_docks_available}
              />
          </div>
          <div className='form-group'>
            <label>Last Updated</label>
            <input
              className='form-control'
              type='datetime-local'
              name='last_updated'
              onChange={this.onChange}
              value={last_updated}
              />
          </div>
          <div className='form-group'>
              <button type='submit' className='btn btn-primary'> 
                Submit
              </button>
          </div>
        </form>
      </div>
    )
  }
}

export default connect(
  null,
  { addStation }
)(Form);
