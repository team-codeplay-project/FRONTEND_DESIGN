import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { b_abi , b_addr } from "../raffletest.config" ;

const web3 = new Web3(window.ethereum);
const contract = new web3.eth.Contract( b_abi , b_addr );

const chk = {} ;
const TestPage = ({ account }) => {

  const [chkscreen , setChkScreen] = useState('false') ;
  const [data, setData] = useState([]);
  

  const get_CHK_raffle = async ( e ) => {
    e.preventDefault();
    try { 
    const f_B = 9270146 ; // fromBlock : 은 디비에서
    const temp_data = new FormData(e.target);
    const a = await contract.getPastEvents('Raffle', {filter : { _idx : temp_data.get("R_ID")}, fromBlock : f_B , toBlock : 'latest'});
  
    a.map((v)=>{
      const nowdata = v.returnValues._add.toLowerCase() ;
      console.log(nowdata,chk[nowdata]);
      if (chk[nowdata] !== true ){
        console.log(nowdata);
        chk[ nowdata ] = true ;
        setData(prev => [...prev, nowdata]);  
      }
    });

    console.log( 'chk_raffle!') ;

    } catch (error) {
      console.log(error);
    } 
  }

  useEffect(()=>{
    if( chk[ account ] === true ){
      setChkScreen( true ) ;
      console.log(chkscreen);
    }  
  },[data]);

  const printData = () =>{
    
    console.log(data.length);

    data.map((v, i) => {
      console.log(v);
      });

  }
  
  const onclickRaffle_participate = async() => {
    
    try {
    await contract.methods.Raffle_participate(1).send({from:account}); 

    } catch (error) {
      error(error);
    }

  };
  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      <div className="flex flex-col justify-center items-center">
        <button> 래플 참가! </button>
        <form onSubmit={get_CHK_raffle}>
          <input className="text-black w-10" type="text" name="R_ID"></input>
          <button type="submit">이벤트 로그 불러오기</button>
        </form>
        <button onClick={printData} >저장된 데이터 출력 테스트(콘솔)</button>
        { chkscreen === true ? <div> 이미 참가 </div> : 
        <div>
        <div> 참가 가능</div>
        <button onClick={onclickRaffle_participate} >참가!</button>
        </div> }
        
      </div>
    </div>


  );
};

export default TestPage ;