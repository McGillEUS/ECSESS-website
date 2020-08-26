const Council = () => import('./components/Council.vue')
const Home = () => import('./components/Home.vue')


const routes = [
    {path: '/council', component: Council},
    {path: '/', component: Home}
]

export default routes