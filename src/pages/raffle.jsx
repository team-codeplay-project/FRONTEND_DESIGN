import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { b_abi , b_addr } from "../raffletest.config" ;
import { useParams } from "react-router-dom";

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract( b_abi , b_addr );
// hooks 사용

const chk = {} ; // 추후 usdState 로 업데이트해야함
const Raffle = ({ account }) => {

  const [chkscreen , setChkScreen] = useState(false) ;
  const [isLoading , setIsLoading] = useState(false) ;
  const [data, setData] = useState([]);
  const { r_idx } = useParams() ;

  const get_R_data = async () => {

    try { 
    const f_B = 9270146 ; // fromBlock : 은 디비에서
    const a = await contract.getPastEvents('Raffle', {filter : { _idx : r_idx }, fromBlock : f_B , toBlock : 'latest'});
    a.map((v)=>{
      const nowdata = v.returnValues._add.toLowerCase() ;
      if (chk[nowdata] !== true ){
        chk[ nowdata ] = true ;
        setData(prev => [...prev, nowdata]);  
      }
    });

    console.log( 'chk_raffle!') ;

    } catch (error) {
      console.log(error);
    } 
  }

  const printData = () =>{

    data.map((v, i) => {
      console.log(v ,i);
    });
    console.log(chk);

  }
  
  const onclickRaffle_participate = async() => {
    
    setIsLoading(true) ;
    try {
    await contract.methods.Raffle_participate(r_idx).send({from:account}); 

    await get_R_data() ;
    setIsLoading(false) ;

    } catch (error) {
      setIsLoading(false) ;
      error(error);
    }
    
  };

  
  useEffect( () => {

    const initializeChk = () => { // 새로 홈페이지를 띄울때마다 chk 초기화
      for (const key in chk) {
        if (chk.hasOwnProperty(key)) {
          delete chk[key];
        }
      }
    };
  
    initializeChk();

    get_R_data() ;
  },[]);

  useEffect(()=>{
    if( chk[ account ] === true ){
      setChkScreen( true ) ;
    }  
  },[data]);

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      <div className="flex flex-col justify-center items-center">
        
        <button onClick={printData} >저장된 데이터 출력 테스트(콘솔)</button>
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