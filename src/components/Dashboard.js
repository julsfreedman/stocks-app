import { Link } from "react-router-dom";
import stocks from "./stock-data";

export default function Dasboard(props) {
    return (
        <div>
            {
                stocks.map((stock) => {
                    const { name, symbol } = stock
                    return (
                        <ul>
                            <li>
                                <Link to={`/stocks/${symbol}`}>
                                    <div>{name}</div>
                                </Link>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}