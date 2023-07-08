import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

const chk = {} ;
const AdminPage = () => {
  const [ raffle, setRaffle] = useState();
  const [ Goods_url, setUrl] = useState('');
  const [ winner , setWinner ] = useState([]);
  const [ n , setN ] = useState() ;
  const [ E , setE ] = useState() ;
  const { contract, web3 , account } = useContext(AppContext);

  // await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
  //   account: accounts[0],
  //   email,
  //   signedToken,
  // });

  // localStorage.setItem("signedToken", signedToken);

  const create = async (e) => {
    try {
      e.preventDefault();

      console.log('create') ;
      let start_block = await web3.eth.getBlockNumber();
      start_block = Number(start_block);

      //console.log('f_s_b', start_block, typeof start_block);

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/raffle/`, {
        URL: Goods_url,
        start_block,
      });
      
      get_Raffle_Data();
    } catch (error) {
      console.error(error);
    }
  };

  const RaffleEnd = async (key) => {
    try {
      // e.preventDefault();

      setN( key ) ;
      let end_block = await web3.eth.getBlockNumber();
      end_block = Number(end_block);
      setE( end_block ) ;

      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle/${key}`
      );

      const f_B = response.data.start_block; // fromBlock : 은 디비에서
      const e_B = end_block ;
        
      const a = await contract.getPastEvents('Raffle', {
          filter: { _idx: key },
          fromBlock: f_B,
          toBlock: 'latest',
      });

      initializeChk() ;

      a.map((v)=>{
        const nowdata = v.returnValues._add.toLowerCase() ;
        if (chk[nowdata] !== true ){
          chk[ nowdata ] = true ;
          setWinner(prev => [...prev, nowdata]);  
        }
      });

      console.log( 'Raffle_End!' ) ;

      // getwinner( key ) ;

    } catch (error) {
      console.error(error);
    }
  };

  const getwinner = async() => {

    // const idx = await contract.methods.RaffleEnd( n ).call() ;

    const idx = 1 ;

    await axios.put(`${process.env.REACT_APP_BACKEND_URL}/raffle/${n}}/done`, {
      end_block : E,
      winner : winner[ idx ],
   });

    console.log(winner[1]) ;

  }

  useEffect( () => {
    const length = winner.length ;
    if( length !== 0 ){
      setWinner([]);
      getwinner() ;
    } 
  } , [winner] ) ;

  const initializeChk = () => {
    for (const key in chk) {
      if (chk.hasOwnProperty(key)) {
        delete chk[key];
      }
    }
  };

  const get_Raffle_Data = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/raffle`
      );
      setRaffle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_Raffle_Data();
  }, []);

  return (
    <div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
      <div className="flex flex-col justify-center items-center">
        <form onSubmit={create}>
          <input
            className="text-black"
            type="text"
            value={Goods_url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button className="p-2 m-2">래플 생성</button>
        </form>

        <div className="flex flex-col">
          {raffle?.map((v, i) => {
            if (v.isEnd === false) {
              return <button key={i} onClick={() => RaffleEnd(i+1)} >{v.id}번 래플 종료</button>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
