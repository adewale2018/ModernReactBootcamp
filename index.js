let myMood = () => {
  const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Happy', 'Depressed'];
  return moods[Math.floor(Math.random() * moods.length)];
}
let getNum = () => {
  return Math.floor(Math.random() * 10) + 1;
}
class NumberPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h2>Your turn number is : {num}</h2>
        <h3>{num === 7 ? 
          <img src="https://media1.giphy.com/media/3o7aCYstPemVc9gvQs/200w.webp?cid=790b76115cbccf4c3667744c55544c51"/>
          : <img src="https://media2.giphy.com/media/4OJFCEeGzYGs0/200w.webp?cid=790b76115cbcd0255278466d45e1d6db"/> }</h3>
      </div>
    )
  }
}
class Hello extends React.Component {
  render() {
    return(
      <div>
        <h2>Your current mood is: {myMood()}</h2>
        <img src="https://images.unsplash.com/photo-1553618551-fba689030290?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1489&q=80"/>
      </div>
    );
  }
} 
ReactDOM.render(
  <div>
    <NumberPicker/>
    <Hello/>
  </div>, document.getElementById('root'));
