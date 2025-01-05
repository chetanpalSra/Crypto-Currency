import React,{ useState } from 'react'

function Data(props) {

    const {search} = props;

    const [Crypto,setCrypto] = useState([]);

     const fetchCryptoData = async()=>{
        try{
            const response = await fetch('http://localhost:7002/api/crypto',{
                method: 'GET',
                headers:{
                    'Content-Type': 'application/json',
                }
            })

            if(!response.ok){
                throw new Error(`Error: ${response.statusText}`)
            }

            //getting response -->
            const cryptoData = await response.json();

            //setting array -->

            setCrypto(cryptoData.data);



        }catch(error){
            console.log('An Error occurred:',error.message);
        }
     }
  
      fetchCryptoData();
      // eslint-disable-next-line
    
    


  return (       

            <table  style={{border: '1px solid beige'}} className='container'>
                <thead>
                    <td>CMC_Rank</td>
                    <td>Name</td>
                    <td>Symbol</td>
                    <td>Market-Cap</td>
                    <td>Price</td>
                    <td>Circulating Supply</td>
                    <td>Volume(24Hrs)</td>
                </thead>
              <tbody>
              {Crypto.length === 0 ?  <h4 className='text-center my-2'>Nothing To show.Wait Loading...</h4> : Crypto.filter((element)=>{
                return element.name.toLowerCase().includes(search.toLowerCase())
              }).map((element,index)=>{
             return (
                <>
                   <tr key={index}>
                    <td>{element.cmc_rank}</td>
                    <td>{element.name}</td>
                    <td>{element.symbol}</td>
                    <td>{parseFloat(element.quote.INR.market_cap).toFixed(2)}</td>
                    <td>{parseFloat(element.quote.INR.price).toFixed(2)}</td>
                    <td>{element.circulating_supply}</td>
                    <td>{parseFloat(element.quote.INR.volume_24h).toFixed(2)}</td>
                </tr>
                </>   
        )
       
   })}
    </tbody>
             
</table>
   
  )
}

export default Data
