import Header from './Header'
import {useSelector} from 'react-redux'

// jha bh humein data chaiye hoga hm use selector k zaariye usko redux sy mangwayeingy
let Home = () => {
const state = useSelector(state=>state)
console.log(state)
    return(
    <>
     <Header/>
    <div>Hello This home Component !</div>
    </>
)
}



export default Home;