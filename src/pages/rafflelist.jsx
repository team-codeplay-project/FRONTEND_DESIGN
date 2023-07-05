import { Link } from "react-router-dom";
import axios from "axios" ;
import { useEffect, useState } from "react";

const Rafflelist = () => {

const [raffle,setRaffle] = useState() ;
const [t_data,setT_Data] = useState() ;

// post 넣기 , get 가져오기
const get_Raffle_Data = async() =>{
  try {

    const response = await axios.get( `${process.env.REACT_APP_BACKEND_URL}/raffle` ) ;
    setRaffle( response.data ) ;
  
  } catch (error) {
    console.log(error);
  }
}

useEffect( () => {
get_Raffle_Data(); } , [] ) ;

return (
<div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
<div className="flex flex-col justify-center items-center">

  <div className="flex flex-col">
      {raffle?.map((v, i) => (
        <Link to={`/test/${i+1}`} >{v.id}번 래플</Link>
        ))}
    </div>
  
</div>
</div>
);
}
export default Rafflelist;
