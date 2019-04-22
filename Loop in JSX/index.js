class App extends React.Component {
  render() {
    return (
      <div>
        <Friend 
          name="Saheed"
          hobbies={["programming", "reading", "traveling", "chilling"]}
        />
        <Friend 
          name="Kolawole"
          hobbies={["coding", "watching movies", "playing video games", "sleeping"]}
        />
        <Friend 
          name="Carlous"
          hobbies={["coding", "watching movies", "playing video games", "sleeping"]}
        />

      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));