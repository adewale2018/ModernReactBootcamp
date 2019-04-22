class App extends React.Component {
  render() {
    return (
      <div>
        <Hello 
          from="Dammy" 
          to="Aasiyah" 
          bangs={4}
          img="https://images.unsplash.com/photo-1554624158-c0d08d8dc6df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
        <Hello 
          from="Coder Shittu" 
          to="Software community" 
          bangs={8}
          img="https://images.unsplash.com/photo-1555267648-6a4efdb37f1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
        <Hello 
          from="Dad" 
          to="Mum" 
          bangs={20}
          img="https://images.unsplash.com/photo-1542578951838-47d40e8b4f0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
        />
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));