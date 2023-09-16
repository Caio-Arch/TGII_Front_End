import React, { useState } from 'react';
import '../Style/cart.css'; // Importe o arquivo CSS
import Ingresso from '../imgs/bilhete.png';
import Lixo from '../imgs/Lixo.png';
import Presente from '../imgs/presente.png';
import Feedback from '../imgs/feedback.png';

function Cart() {
  const [quantidade, setQuantidade] = useState(1);
  const precoIngresso = 800;
  const total = quantidade * precoIngresso;

  const handleIncrement = () => {
    setQuantidade(quantidade + 1);
  };

  const handleDecrement = () => {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  };

  return (
    <div>
      <nav>
        <div className="logo">Venda de Ingressos</div>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Serviços</a></li>
          <li><a href="">Sobre</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </nav>
      <div className="cart-container">
        <div className="cart-left">
          <h2>Meu Carrinho</h2>
          <hr className="custom-hr" />
          <div className='teste'>
          <img className="lixo" src={Lixo} alt="Lixo" />
          </div>
          <div className="item-description">
            <img className="ingresso" src={Ingresso} alt="Ingresso" />
            <div className="text-description">
              <p>Descrição:</p>
              <div className='text1' >
              <p className='text1'>Show Taylor Swift</p>
              </div>
              <p>Data:</p>
              <div className='text2' >
              <p>19/11/2023</p>
              </div>
              <p>Local:</p>
              <div className='text3'>
              <p>Allianz Parque (Estádio Palestra Itália)</p>
              </div>
            </div>
          </div>
          <div className='text4'>
            <p>Valor do ingresso: </p>
            <p>R$200</p>
          <div className="quantity-container">  
            <button className='buttons' onClick={handleDecrement}>-</button>
            <span>{quantidade}</span>
            <button className='buttons' onClick={handleIncrement}>+</button>
            </div>  
          </div>
          <hr className="custom-hr" />
          <div className='item-description2'>
            <img className="presente" src={Presente} alt="Presente" />
            <p className='text-description2'>Insira o Código promocional</p>
          </div>
          <div className='item-description2'>
            <img className="feedback" src={Feedback} alt="Feedback" />
            <p className='text-description2'>Deixe seu Comentário</p>
          </div>
        </div>
        <div className="cart-right">
          <h3>Resumo do Pedido</h3>
          <hr className="custom-hr2" />
          <p className='leftText'>Subtotal:</p> <p className='rightText'> R${total}</p>
          <p className='leftText'>Envio:</p> <p className='rightText'>Grátis</p>
          <p className='leftText'>Local para Envio:</p><p className='rightText'>Padrão</p>
          <hr className="custom-hr2" />
          <p className='leftText'>Total</p><p className='rightText'>R${total}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
