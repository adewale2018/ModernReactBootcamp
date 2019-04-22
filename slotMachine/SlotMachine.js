class SlotMachine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    let winner = ((s1 === s2) && (s2 === s3));
    return (
      <div>
        <p>First is: {s1}, second is: {s2}, third is: {s3}</p>
        <p>{winner ? "Whao, Winner!" : "Hoops, Loser!!!"}</p>
      </div>
    )
  }
}
