import React, {useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppContext} from "../App.jsx";
import Item from "./Item.jsx";
import {motion} from 'framer-motion';

const Overlay = () => {

    const context = useContext(AppContext);

    return(
        <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}>
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-9"><h1>Корзина</h1></div>
                    <div className="col-md-3"><h1>Итого: {context.totalPrice}</h1></div>
                </div>
                <div className="row mt-3">
                    {context.overlayItems.length > 0 ? (
                        context.overlayItems.map((obj) => (
                            <Item
                                key={obj.id}
                                id={obj.id}
                                myId={obj.myId}
                                name={obj.name}
                                price={obj.price}
                                description={obj.description}
                                url={obj.url}
                                item={obj}
                                onPlus={(obj) => context.onAddOverlay(obj)}
                                onPlusFavorite={(obj) => context.onAddFavorite(obj)}/>
                        ))
                    ) : (
                        <h1>Пусто</h1>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default Overlay;