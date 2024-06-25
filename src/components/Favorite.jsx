import React, { useContext } from 'react';
import { AppContext } from '../App.jsx';
import Item from './Item.jsx';
import { motion } from 'framer-motion';

const Favorite = () => {
    const context = useContext(AppContext);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}>
            <div className="container">
                <div className="my-3"><h1>Избранное</h1></div>

                {context.favorite.length > 0 ? (
                    <div className="row">
                        {context.favorite.map((obj) => (
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
                                onPlusFavorite={(obj) => context.onAddFavorite(obj)}
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Пусто</h1>
                )}
            </div>
        </motion.div>
    );
};

export default Favorite;
