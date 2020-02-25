import Write from './views/write/Write';
import DiaryList from './views/diary/DiaryList';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import OneDiary from './views/diary/OneDiary'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: DiaryList
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }, {
        path: '/login',
        name: 'Login',
        component: Login
    }, {
        path: '/write',
        name: 'Write',
        component: Write
    },
    {
        path:'/diary',
        name: 'Diary',
        component: OneDiary

    }
]

export default routes;