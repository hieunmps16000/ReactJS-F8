import Home from "../Lessons/Home";
import Timer from "../Lessons/Timer";
import TwoWayBinding from "../Lessons/Two-wayBinding";

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/timer', component: Timer },
    { path: '/two-way-binding', component: TwoWayBinding },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }