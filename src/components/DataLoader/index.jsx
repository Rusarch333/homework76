import React, { Component } from 'react';

class DataLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isPending: false,
      error: null,
    };
  }
  load = () => {
    const {getData} = this.props;
    this.setState({ isPending: true });
    getData()
      .then((data) => {
        this.setState({ items: data });
      })
      .catch((error) => {
        this.setState({ error: error });
      })
      .finally(() => {
        this.setState({ isPending: false });
      });
  };
  componentDidMount() {
    this.load();
  }
  render() {
    const {render} = this.props;
    return render(this.state);
  }
}

export default DataLoader;
