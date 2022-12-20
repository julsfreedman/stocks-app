import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import stockDetails from './stock-data';

export default function Stock() {

    const { symbol } = useParams()
    const [stock, setStock] = useState(null)


    useEffect(() => {
        const getStock = async () => {
            try {
                const data = stockDetails.find(theStock => theStock.symbol === symbol);
                setStock(data);
            } catch (error) {
                console.error(error);
            }
        }
        getStock();
    }, [symbol]);

    const loaded = () => {
        return (
            <div>
                <h2>{stock.name} / {stock.symbol}</h2>
                <h3>Last Price ${stock.lastPrice}</h3>
                <h3>Change ${stock.change}</h3>
                <h3>High ${stock.high}</h3>
                <h3>Low ${stock.low}</h3>
                <h3>Open ${stock.open}</h3>


            </div>
        )
    }
    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        stock && stock.name ? loaded() : loading()
    )
}