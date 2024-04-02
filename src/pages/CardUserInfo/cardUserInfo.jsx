import { useSelector } from "react-redux"

import { CardUser } from "../../components/CardUser/cardUser"

export const CardUserInfo = () => {

  const cardUser= useSelector(state=>state.user);        
 
     return (
        <CardUser cardUser={cardUser}/>
    )
}