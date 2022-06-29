function PostItem() {
    return (
        <div className="post-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Qvov3Fy5FKt44_Y-rynYY8liqZ4YRg9jrg&usqp=CAU" alt="" />
            <h2>Học ReactJS tại F8</h2>
        </div>
    )
}

const app = (
    <div className="posts-list">
        <PostItem />
    </div>
)

ReactDOM.render(app, document.getElementById('root'))