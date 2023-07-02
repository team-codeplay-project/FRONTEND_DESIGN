import { Link } from "react-router-dom";

const Rafflelist = ({account}) => {

return (
<div className="w-[390px] h-[844px] rounded-[30px] relative text-white">
<div className="flex flex-col justify-center items-center">
  
  <Link to="/test/1">1번 래플!</Link>
  <Link to="/test/2">2번 래플</Link>
  
</div>
</div>
);
}
export default Rafflelist;
