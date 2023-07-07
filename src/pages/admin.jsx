import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';

const AdminPage = () => {
  const [raffle, setRaffle] = useState();
  const [Goods_url, setUrl] = useState('');
  const { contract, web3 } = useContext(AppContext);

  // await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/user`, {
  //   account: accounts[0],
  //   email,
  //   signedToken,
  // });

  // localStorage.setItem("signedToken", signedToken);

  const create = async (e) => {
    try {
      e.preventDefault();

      let start_block = await web3.eth.getBlockNumber();
      start_block = Number(start_block);

      //console.log('f_s_b', start_block, typeof start_block);

      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/raffle/`, {
        URL: Goods_url,
        start_block,
      });
    } catch (error) {
      console.error(error);
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
              return <div key={i}>{v.id}번 래플</div>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
