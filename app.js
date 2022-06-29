const root = document.getElementById('root')
/**
 * Task 1: 
 * >>>
 *  <div class="post-item">
 *      <h2 title="Học React tại F8">Học ReactJS</h2>
 *      <p>Học ReactJS từ cơ bản đến nâng cao</p>
 *  </div
 */

let info = React.createElement(
    'div',
    {
        className: 'post-item',
        style: {
            color: 'white',
            fontSize: '20px',
            backgroundColor: '#000',
            padding: '20px',
            borderRadius: '14px',
            textAign: 'center',
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.6)'
        }
    },
    React.createElement(
        'h2',
        {
            title: 'HỌc React tại F8'
        },
        'Học ReactJS'
    ),
    React.createElement(
        'p',
        {},
        'Học ReactJS từ cơ bản đến nâng cao'
    )
)

// Don't use React.createElement()
// New way
let newDescription = '@Hieunmps2022'
let spanStyle = {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: '12px'
}
let info2 = 
    <div className="Học React tại F8">
        <h2 title="Học React tại F8">Học ReactJS</h2>
        <p>Học ReactJS từ cơ bản đến nâng cao</p>
        <span style={spanStyle}>{newDescription}</span>
    </div>

// Homework:
const courses = [
    {
        id: 1,
        name: 'HTML-CSS',
        coins: 100
    },
    {
        id: 2,
        name: 'Javascript',
        coins: 200
    },
    {
        id: 3,
        name: 'Angular',
        coins: 250
    }
];

const listItems = courses.map(course => {
    return <li>{course.name}</li>
})

const ul = <ul>
    {listItems}
</ul>
ReactDOM.render(ul, root)