import {useLocation} from "react-router-dom"

export const Home = ( {id}: {id: number}) =>{

    const location = useLocation();

    return (
        <div>
          <p>Home idは {location.state.id}です</p>
        </div>
    )
}