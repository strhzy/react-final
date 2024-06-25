import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AppContext} from "../App";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import {useLocation, useNavigate} from "react-router-dom";

const Item = (props) => {
    const context = React.useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    console.log(location.pathname);

    const onClickAdd = () => {
        const {id, myId, name: name, description: description, price: price, url:url} = props;
        props.onPlus({id, myId, name, description, price, url});
    }

    const onClickAddToFavorite = () => {
        const {id, myId, name:name, description:description, price:price, url:url} = props;
        props.onPlusFavorite({id, myId, name, description, price, url});
    }

    const onRedirectAbout = () => {
        context.setAbout(props.item);
        console.log("О товаре");
        return (
            navigate('/about')
        )
    }
    return (
        <div className="col-md-3 mb-2">
            <Card style={{ width: '20rem'}}>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.price} руб
                    </Card.Text>
                    {
                        context.isAdded(props.myId) ? (
                            <Button variant="danger" onClick={onClickAdd}>
                                Удалить
                            </Button>):(
                            <Button onClick={onClickAdd}>
                                Добавить
                            </Button>
                        )
                    }
                    <Button onClick={onClickAddToFavorite} variant="outline-primary" className="mr-2">
                        {
                            context.isAddedToFavorite(props.myId) ? <AiFillHeart size="1.5em"/> : <AiOutlineHeart size="1.5em"/>
                        }
                    </Button>
                    <br/>
                    <Button variant="link" onClick={onRedirectAbout}>О товаре</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Item;