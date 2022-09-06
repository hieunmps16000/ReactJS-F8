import { useState, useEffect } from 'react';
import './style.css'

const courses = [
    {
        id: 1,
        title: 'HTML-CSS'
    },
    {
        id: 2,
        title: 'Javascript'
    },
    {
        id: 3,
        title: 'ReactJS'
    }
]

function TwoWayBinding() {
    const [showModal, setShowModal] = useState(false);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [checked, setChecked] = useState();
    const [yourNameCourse, setYourNameCourse] = useState('')

    const handleSubmit = () => {
        setShowModal(true)
    }

    useEffect(() => {
        const nameCourse = courses.filter(course => course.id === checked)
        nameCourse.map(course => setYourNameCourse(course.title))
    }, [checked])
    
    console.log(yourNameCourse);
    return ( 
        <>
            <div className='container'>
                <div className='form-container'>
                    <h1 className='title'>Đăng ký khóa học</h1>
                    <div className='form-controller'>
                        <input type="text" placeholder="Họ và tên" onChange={(e) => setFullName(e.target.value)} />
                    </div>
                    <div className='form-controller'>
                        <input type="text" placeholder="Email" onChange={ (e) => setEmail(e.target.value)} />
                    </div>
                    <div className=''>
                        <label>Danh sách khóa học</label>
                        {courses.map(course => (
                            <div className='input-container' key={course.id}>
                                <input type="radio" checked={course.id === checked} onChange={() => setChecked(course.id)}/>
                                {course.title}
                            </div>
                        ))}
                    </div>
                    <div className='form-controller'>
                        <button className='btn btn-success' onClick={handleSubmit}>Gửi</button>
                    </div>
                </div>
            </div>
            
            {/* Modal */}
            { showModal && (
                <div className='m-modal'>
                <div className='m-modal-container'>
                    <div className='m-modal-header'>
                        <h2 className='title'>Thông tin </h2>
                        <button className='btn btn-danger close-btn' onClick={() => setShowModal(false)}>
                            Thoát
                        </button>
                    </div>
                    <div className='m-modal-main'>
                        <div className='content'>
                            <p> <strong>Họ và tên: </strong>{fullName}</p>
                            <p> <strong>Email: </strong>{email}</p>
                            <p> <strong>Tên khóa học: </strong>{yourNameCourse}</p>
                        </div>
                    </div>
                    <div className='m-modal-footer'>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default TwoWayBinding;