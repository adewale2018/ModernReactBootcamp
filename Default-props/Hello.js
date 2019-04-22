class Hello extends React.Component {
  static defaultProps = {
    from: "Kolawole",
    to: "Anonymous",
    bangs: 4

  }
  render() {
    let {to, from, bangs} = this.props;
    bangs = " * ".repeat(bangs);
    return(
      <p>Hello {to}, greeting from {from} {bangs}</p>
    );
  }
}
