import React from 'react'
import "./Coins.css"

const CoinItem =(props)=>{
    const priceChangePercentage =props.coins.price_change_percentage_24h;
    const colorChangePercentage =priceChangePercentage < 0 ? 'red':'green';
    return (
        <div className='coin-row'>
            <p>{props.coins.market_cap_rank}</p>
           <div className='img-symbol'>
                <img src={props.coins.image} alt=''/>        
            </div>
            <p>{props.coins.name.toUpperCase()} </p>
            <p>₹{props.coins.current_price.toLocaleString()}</p>

            <p className={colorChangePercentage}>{priceChangePercentage.toFixed(2)} %</p>
            <p className='hide-mobile'>₹{props.coins.total_volume.toLocaleString()}</p>
            <p className='hide-mobile'>₹{props.coins.market_cap.toLocaleString()}</p>
            
        </div>
    )
}

export default CoinItem