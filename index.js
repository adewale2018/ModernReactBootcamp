let myMood = () => {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Happy', 'Depressed'];
  return moods[Math.floor(Math.random() * moods.length)];
}
class Hello extends React.Component {
  render() {
    return(
      <div>
        <h1>My Image</h1>
        <h2>Your current mood is: {myMood()}</h2>
        <img src="https://images.unsplash.com/photo-1553618551-fba689030290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1489&q=80"/>
      </div>
    );
  }
} 
ReactDOM.render(<Hello/>, document.getElementById('root'));
