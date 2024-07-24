import React, { Component } from 'react';
import { getPhones } from '../../api';

class PhonesLoader extends Component {
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
    getPhones()
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
      <ol>
        {items.map(({ id, name, brand, price }) => (
          <li key={id}>
            {name} {brand} costs {price}$
          </li>
        ))}
      </ol>
    );
  }
}

export default PhonesLoader;
