import React from 'react';
import DataLoader from '../../components/DataLoader';
import { getPhones } from '../../api';
import PhonesView from '../../components/PhonesView';

const PhonesBlock = () => {
  return (
    <div>
      <h2>Phones</h2>
      <DataLoader
        getData={getPhones}
        render={(state) => <PhonesView state={state} />}
      />
    </div>
  );
};

export default PhonesBlock;
