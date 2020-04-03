import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
       const { error, alert, message } = this.props;
       if(error !== prevProps.error) {
           if(error.msg.station_id) alert.error(`Station ID: ${error.msg.station_id.join()}`);
           if(error.msg.num_bikes_available) alert.error(`Bikes Available: ${error.msg.num_bikes_available.join()}`);
           if(error.msg.num_docks_available) alert.error(`Docks Available: ${error.msg.num_docks_available.join()}`);
           if(error.msg.last_updated) alert.error(`Last Updated: ${error.msg.last_updated.join()}`);
       }

       if(message !== prevProps.message) {
           if(message.deleteStation) alert.success(message.deleteStation);
           if(message.addStation) alert.success(message.addStation);
       }
    }

    render(){
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));