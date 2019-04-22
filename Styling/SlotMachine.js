class SlotMachine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    let winner = ((s1 === s2) && (s2 === s3));
    let style = {
      fontSize: "50px",
      color: "red"
    }
    let style2 = {
      textAlign: "center",
      letterSpacing: "2px",
      color: "green",
      fontSize: '30px',
      textTransform: "uppercase"
    }
    return (
      <div className="SlotMachine">
        <p style={style}>First is: {s1}, second is: {s2}, third is: {s3}</p>
        <p className={winner ? 'style3' : 'lose'}>{winner ? "Whao, Winner!" : "Hoops, Loser!!!"}</p>
      </div>
    )
  }
}
