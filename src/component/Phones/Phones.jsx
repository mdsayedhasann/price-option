import axios from "axios";
import {  useState } from "react";
import { Dna } from  'react-loader-spinner'

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
  //     .then(res => res.json())
  //     .then(data => setPhones(data.data))
  // }, [])

  axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
  .then(data => {
      setPhones(data.data.data), 
      setLoading(false)})


  return (
        <>
        {
            loading &&
            <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper" />
        }
        <div>
              <h2>Total Phones: {phones.length}</h2>
          </div></>
  );
};

export default Phones;
