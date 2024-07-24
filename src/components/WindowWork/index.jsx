import React, { Component } from 'react';

class WindowWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
  }
  handlerResizeWindow = () => {
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight,
    });
  };
  componentDidMount() {
    window.addEventListener('resize', this.handlerResizeWindow);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.handlerResizeWindow);
  }
  render() {
    const { w, h } = this.state;

    return (
      <div>
        width = {w}px, height = {h}px
      </div>
    );
  }
}

export default WindowWork;
