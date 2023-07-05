import { Link } from "react-router-dom";
import axios from "axios" ;
import { useEffect, useState } from "react";

const Rafflelist = () => {

const [raffle,setRaffle] = useState() ;
const [toggle, setToggle] = useState(false);

const ing = () =>{
  setToggle(false);
}

const end = () =>{
  setToggle(true);
}


const create = async() =>{

  try {
  const test= [0,'aaa'];
  await axios.post( `${process.env.REACT_APP_BACKEND_URL}/raffle` , test ) ;
  } catch (error) {
    console.error(error);
  }

}

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

  <button className='p-2 m-2' onClick={create}>래플 생성</button>


  <button className={`p-2 rounded ${ !toggle ? 'bg-yellow-400' : ''}`} onClick={ing}>진행 중</button>
  <button className={`p-2 rounded ${ toggle ? 'bg-red-400' : ''}`} onClick={end}>완료</button>

  <div className="flex flex-col">
  {raffle?.map((v, i) => {
    if (v.isEnd === toggle ) {
      return (
        <Link key={i} to={`/test/${i+1}`}>
          {v.id}번 래플
        </Link>
      );
    }
    return null;
  })}
    </div>
  
</div>
</div>
);
}

export default Rafflelist;