import React from "react";

class AutoScrollToTop extends React.Component {
  componentDidMount() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }

  render() {
    // This component doesn't render anything visible
    return null;
  }
}

export default AutoScrollToTop;
