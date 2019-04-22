class App extends React.Component {
  render() {
    return (
      <div>
        <h1>STYLING REACT</h1>
        <SlotMachine s1='🍅' s2='🍅' s3='🍅'/>
        <SlotMachine s1='😊' s2='😂' s3='🤷'/>
        <SlotMachine s1='🤷‍♂️' s2='❤' s3='💋'/>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
