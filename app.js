const root = document.getElementById('root')
/**
 * Task 1: Create h1 element with DOM Element and React Element
 * >>> 
 *  <h1 title="Hello" class="heading">Hello guys!</h1>
 */

let h1Dom = document.createElement('h1');

h1Dom.id = 'h1Dom-id';
Object.assign(h1Dom.style, {
    backgroundColor: '#e9e9e9',
    display: 'inline-block',
    padding: '10px'
})
h1Dom.title = 'Hello';
h1Dom.className = 'heading';
h1Dom.innerText = 'Hello guys!';

// document.body.appendChild(h1Dom);


// React.createElement(type, props, children)
let h1React = React.createElement('h1', {
    id: 'h1React-id',
    title: 'Hello',
    className: 'heading',
}, 'Hello guys!')

ReactDOM.render(h1React, root)

/**
 * Task 2: Create ul > li element with DOM Element and React Element
 * >>> 
 *  <ul>
*       <li>Javascript</li>
*       <li>ReactJS</li>
*   </ul>
 */

const ulDom = document.createElement('ul');

const li1Dom = document.createElement('li')
li1Dom.innerText='Javascript';

const li2Dom = document.createElement('li');
li2Dom.innerText='ReactJS';

Object.assign(ulDom.style, {
    color: 'green',
    fontSize: '20px',
})

ulDom.appendChild(li1Dom);
ulDom.appendChild(li2Dom);

// document.body.appendChild(ulDom);

// React
const ulReact = React.createElement(
    'ul',
    {},
    React.createElement('li', null, 'Javascript'),
    React.createElement('li', null, 'ReactJS'),
)

// ReactDOM.render(ulReact, root)


/**
 * Task 3: 
 * >>>
 *  <div class="post-item">
 *      <h2 title="Học React tại F8">Học ReactJS</h2>
 *      <p>Học ReactJS từ cơ bản đến nâng cao</p>
 *  </div
 */

let task3 = React.createElement(
    'div',
    {
        className: 'post-item'
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

// ReactDOM.render(task3, root)