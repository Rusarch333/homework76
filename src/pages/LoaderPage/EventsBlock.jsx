import React from 'react';
import DataLoader from '../../components/DataLoader';
import { getEvents } from '../../api';
import EventsView from '../../components/EventsView';

const EventsBlock = () => {
  return (
    <div>
      <h2>Events</h2>
      <DataLoader
        getData={getEvents}
        render={(state) => <EventsView state={state} />}
      />
    </div>
  );
};

export default EventsBlock;
