import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container, Card, Button } from 'react-bootstrap';
import { AppContext } from '../App';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const About = () => {
    const context = useContext(AppContext);
    const obj = context.about;
    console.log(obj);

    const onClickAdd = () => {
        const { id, myId, name, description, price } = obj;
        context.onAddOverlay({ id, myId, name, description, price });
    };

    const onClickAddToFavorite = () => {
        const { id, myId, name, description, price } = obj;
        context.onAddOverlay({ id, myId, name, description, price });
    };

    return (
        <Container className="my-2">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <h1 className="mb-4">О товаре</h1>
                <Card className="shadow-sm">
                    <Card.Img className="rounded" variant="top" src={obj.url} />
                    <Card.Body>
                        <Card.Text className="h3">{obj.name}</Card.Text>
                        <Card.Text className="h5">{obj.description}</Card.Text>
                        <Card.Text className="h4">{obj.price} руб.</Card.Text>
                        {
                            context.isAdded(obj.myId) ? (
                                <Button
                                    variant="danger"
                                    className="me-2"
                                    onClick={onClickAdd}>
                                    Удалить
                                </Button>):(
                                <Button
                                    variant="primary"
                                    className="me-2"
                                    onClick={onClickAdd}>
                                    Добавить
                                </Button>
                            )
                        }
                        <Button
                            variant="outline-primary"
                            onClick={() => context.onAddFavorite(obj)}>
                            {
                                context.isAddedToFavorite(obj.id) ? (
                                    <AiFillHeart size="1.5em" />
                                ) : (
                                    <AiOutlineHeart size="1.5em" />
                                )
                            }
                        </Button>
                    </Card.Body>
                </Card>
            </motion.div>
        </Container>
    );
};

export default About;