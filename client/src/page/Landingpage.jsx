import React,{useState,useEffect} from "react";
import axios from 'axios'

const Landingpage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
     getData();
  }, []);
  
  const getData = async () => {
    try {
      const response = await axios.get('http://localhost:4001/getdata');
      const responseData = response.data;

      if (responseData.success) {
        setData(responseData.data);
      } else {
        console.error('Error fetching data from the server');
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(data,"array filles")
  
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
    {/* First Column: Image */}
    <div className="md:w-1/2">
      <img
        src="https://res.cloudinary.com/dsyln8j3g/image/upload/v1706001200/annie-spratt-hCb3lIB8L8E-unsplash_abgszn.jpg"
        className="w-full h-full object-cover"
        alt="Background"
      />
    </div>

    {/* Second Column: Data Boxes */}
    <div className="md:w-1/2 p-4 md:flex md:flex-wrap md:-mx-2 mt-10">
      {data.map((item, index) => (
        <div key={index} className="w-full md:w-1/2 px-2 mb-4">
          <div className="bg-white p-6 shadow-md">
            <div className="mb-4">
              <img
                src={`http://localhost:4001${item.img}`} 
                className="w-full h-24 object-cover mb-2 rounded-lg"
                alt={`Box ${index + 1}`}
              />
            </div>
            <div className="text-gray-500 text-lg font-normal leading-normal mb-2">
              {item.ptitle}
            </div>
            <div className="text-slate-900 text-sm font-medium leading-[30px]">
              {item.pdescription}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
      
     
     
      
     
       
 
     
  );
};

export default Landingpage;
