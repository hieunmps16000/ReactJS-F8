import './Content.css'
import { useState, useEffect } from 'react';

function Content() {
    const tabs = ['posts', 'comments', 'albums'];
    const [title, setTitle] = useState('');
    const [listData, setListData] = useState([]);
    const [type, setType] = useState('posts');
    const [goToTop, setGoToTop] = useState(false);
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        document.title = title;
    })

    //  **  call API
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(listData => setListData(listData))
    }, [type]);

    //  ** Go to top
    useEffect(() => {
        const handleScroll = () => {
            setGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
        
    }, []);

    // ** show width
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            <h2>Width: {width}</h2>
            <input 
                type="text" 
                placeholder='Change website title here...'
                onChange={(e) => setTitle(e.target.value)}
            />
            <div>
                {tabs.map(tab => (
                    <button 
                        key={tab}
                        style={tab === type ? {
                            color: '#fff',
                            backgroundColor: '#333'
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <ol>
                {listData.map(data => (
                    <li key={data.id}>{data.title || data.name}</li>
                ))}
            </ol>
            
            {
                goToTop && (
                <button 
                    className='go-to-top-btn'
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Go to top
                </button>
            )}
        </div>
    )
}

export default Content