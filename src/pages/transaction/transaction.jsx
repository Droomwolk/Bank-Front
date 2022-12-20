import React from 'react';
import PropTypes from 'prop-types';
import '../../scss/main.scss';
// import CollapsibleTable from '../../components/table/table';
// import Collapse from '../../components/collapse/collapse';

function Transaction() {
  return (
    <div className="transaction">
      <div className="transaction__argent">
        <p> Argent Bank checking </p>
        <h3 className="transaction__argent-price"> $2,083.79 </h3>
        <p> Available balance </p>
      </div>
      {/* <CollapsibleTable /> */}
      {/* <Collapse /> */}
    </div>
  );
}

Transaction.propTypes = {};

export default Transaction;
