function List({data, children}) {
    return (
        <ul>
            {data.map(item => children(item))}
        </ul>
    )
}

function App() {
    const cars = ["Honda", "BMW", "Ford"]
    return (
        <div className="wrapper">
            <List data={cars}>
                {(item) => <li>{item}</li>}
            </List>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))