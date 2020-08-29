const Council = () => import('./components/Council.vue')
const Home = () => import('./components/Home.vue')
const Bursaries = () => import('./components/Bursaries.vue')
const Events = () => import('./components/Events.vue')
const Extracurriculars = () => import('./components/Extracurriculars.vue')
const Opportunities = () => import('./components/Opportunities.vue')
const Photos = () => import('./components/Photos.vue')


const routes = [
    {path: '/council', component: Council},
    {path: '/', component: Home},
    {path: '/bursaries', component: Bursaries},
    {path: '/events', component: Events},
    {path: '/extracurriculars', component: Extracurriculars},
    {path: '/opportunities', component: Opportunities},
    {path: '/photos', component: Photos}
]

export default routes