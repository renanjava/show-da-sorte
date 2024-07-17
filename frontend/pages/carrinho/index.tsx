import React from 'react'
import "frontend/public/assets/scss/carrinho-compras/styles.css";
import Head from 'next/head';
import { SITE_NAME } from '../../../src/constants/constants';

const CarrinhoCompras: React.FC = () => {

    return (
    <div>
        <Head>
            <meta charSet="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <div className="body">
        <header>{SITE_NAME}</header>
        <main className="main">
            <div className="page-title">
                Seu Carrinho
            </div>
            <div className="content">
                <section>
                    <table>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Quantidade</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="product">
                                        <img src="https://picsum.photos/100/120" alt="Produto 1"/>
                                        <div className="info">
                                            <div className="product-name">Nome</div>
                                            <div className="description">Descricao</div>
                                        </div>
                                    </div>
                                </td>
                                <td>R$ 120</td>
                                <td>
                                    <div className="qtd">
                                        <button><i className='bx bx-minus' ></i></button>
                                        <span>2</span>
                                        <button><i className='bx bx-plus'></i></button>
                                    </div>
                                </td>
                                <td>R$ 240</td>
                                <td><button className="remove"><i className='bx bx-x'></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <aside>
                    <div className="box">
                        <header>Resumo da compra</header>
                        <div className="info-total">
                            <div><span>Sub-total</span><span>R$ 240</span></div>
                            <div><span>Desconto</span><span>R$ 20</span></div>
                        </div>
                        <footer>
                            <span>Total</span>
                            <span>R$ 220</span>
                        </footer>
                    </div>
                    <button>Finalizar Compra</button>
                </aside>
            </div>
        </main>
        </div>
    </div>
       
    );
  };
  
  export default CarrinhoCompras;