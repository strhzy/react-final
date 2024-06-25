import { useContext} from 'react';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from "framer-motion";


const Home = () => {
    const context = useContext(AppContext);
    const items = context.card.slice(0, 10);
    console.log(items);
    return(
        <motion.div
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            <div className="container">
                <h1 className="my-3">Мы - ЭльдоМвидео</h1>
                <h4>Онлайн дистрибьютор техники</h4>
                <div className="row mt-3">
                    {items.map((obj) => {
                        return(
                            <Item
                                key={obj.id}
                                id={obj.id}
                                myId={obj.myId}
                                name={obj.name}
                                description={obj.description}
                                price={obj.price}
                                url={obj.url}
                                item={obj}
                                onPlus={(cartObj) => context.onAddOverlay(cartObj)}
                                onPlusFavorite={(cartObj) => context.onAddFavorite(cartObj)}
                                />
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )

}

export default Home;
