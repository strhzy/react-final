import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTelegram, FaVk, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-danger text-dark mt-5 p-4">
            <Container>
                <Row>
                    <Col md="4">
                        <h5>Контакты</h5>
                        <ul className="list-unstyled">
                            <li>Email: alexeydm2@gmail.com</li>
                            <li>Phone: +7 985 884-70-64</li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>Мы в соц сетях</h5>
                        <ul className="list-unstyled d-flex">
                            <li>
                                <a href="https://t.me/strhzy" className="text-dark">
                                    <FaTelegram size="1.5em" />
                                </a>
                            </li>
                            <li className="mx-3">
                                <a href="https://vk.com/alexpolezh" className="text-dark">
                                    <FaVk size="1.5em" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/strhzy" className="text-dark">
                                    <FaGithub size="1.5em" />
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4">
                        <h5>О нас</h5>
                        <p>
                            Мы - онлайн дистрибьютор техники в России. Наша цель сделать электронику доступной для всех жителей страны.
                        </p>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        &copy; {new Date().getFullYear()} strhzy
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;