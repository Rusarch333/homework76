import React, { Component } from 'react';
import { getEvents } from '../../api';

class EventsLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isPending: false,
      error: null,
    };
  }
  componentDidMount() {
    this.setState({ isPending: true });
    getEvents()
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((error) => {
        this.setState({ error: error });
      })
      .finally(() => {
        this.setState({ isPending: false });
      });
  }
  render() {
    const { items, error, isPending } = this.state;
    if (error) {
      return <div>Error!!!!</div>;
    }
    if (isPending) {
      return <p>loading...</p>;
    }
    return (
      <ul>
        {items.map(({ id, title, date }) => (
          <li key={id}>
            {title} date:{date}
          </li>
        ))}
      </ul>
    );
  }
}

export default EventsLoader;
