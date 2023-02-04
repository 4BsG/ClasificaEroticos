import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import Stepper from '../components/Stepper/Stepper';
import Table from '../components/Table/Table';

function molecules() {
  return (
    <div>
      <NavBar />
      <div className="mt-3">
        <Stepper />
      </div>
      <div className="mt-3">
        <Table />
      </div>
    </div>
  );
}

export default molecules;
