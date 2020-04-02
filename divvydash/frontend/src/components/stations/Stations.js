import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getStations } from '../../actions/stations';
 
export class Stations extends Component {
  static propTypes = {
    stations: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getStations();
  }

  render() {
    return(
      <Fragment>
        <h1> Divvy Stations </h1>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>STATION ID</th>
              <th>NUMBER OF BIKES AVAILABLE</th>
              <th>NUMBER OF DOCKS AVAILABLE</th>
              <th>LAST UPDATED</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.stations.map(station => (
              <tr key={station.id}>
                <td>{station.station_id}</td>
                <td>{station.num_bikes_available}</td>
                <td>{station.num_docks_available}</td>
                <td>{station.last_updated}</td>
                <td><button className='btn btn-danger btn-sm'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  stations: state.stations.stations
})

export default connect(mapStateToProps, { getStations })(Stations);
