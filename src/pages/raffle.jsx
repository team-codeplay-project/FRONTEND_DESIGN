import React, { useContext, useEffect, useState } from "react";
import Web3 from "web3";
import { b_abi , b_addr } from "../raffletest.config" ;
import { useParams } from "react-router-dom";
import { AppContext } from "../App";
import axios from "axios";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract( b_abi , b_addr );

const Raffle = () => {

  const [chkscreen , setChkScreen] = useState(false) ;
  const [isLoading , setIsLoading] = useState(true) ;
  const { account , chkchainID } = useContext(AppContext);
  const { r_idx } = useParams() ;

  const get_R_data = async () => {

    try { 

    const response = await axios.get( `${process.env.REACT_APP_BACKEND_URL}/raffle/${r_idx}` ) ;
    
    console.log(response);
    const f_B = response.data.start_block ; // fromBlock : 은 디비에서
    console.log(f_B);
    // const a = await contract.getPastEvents('Raffle', {filter : { _idx : r_idx }, fromBlock : f_B , toBlock : 'latest'});

    // for (const v of a) {
    //   const nowdata = v.returnValues._add.toLowerCase();
    //   if (nowdata === account) {
    //     setChkScreen(true);
    //     break; // 중지
    //   }
    // }

    setIsLoading(false) ;
//    console.log( 'chk_raffle!' ) ;

    } catch (error) {
      console.log(error);
    } 
  }

  const onclickRaffle_participate = async() => {
    
    setIsLoading(true) ;
    try {
    
    await contract.methods.Raffle_participate(r_idx).send({from:account}); 
    get_R_data() ;

    } catch (error) {
      setIsLoading(false) ;
      error(error);
    }
    
  };

  useEffect( () => { 
    chkchainID() ;
    get_R_data() ;
  } , [] ) ;

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      <div className="flex flex-col justify-center items-center">
        
        { isLoading ? ( <div> Loading </div> )
        : chkscreen ? ( <div> 이미 참가 </div> ) 
        : ( <div> 
          <div> 참가 가능</div>
          <button onClick={onclickRaffle_participate}>참가!</button>
          </div> ) }
        
      </div>
    </div>

  );
};

export default Raffle ;