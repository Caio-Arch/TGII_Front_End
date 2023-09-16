// Payments.js
import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import connection from '../service/api'
import '../Style/paypal.css';

function Payments() {
  const [clientId, setClientId] = useState();

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await connection.get('/payments');
        if (response.data) {
          setClientId(response.data.clientId);
        }
      } catch (error) {
        console.error('Error fetching payment data:', error);
      }
    };

    fetchPaymentData();
  }, []);

  useEffect(() => {
    const insertScript = info => {
      if (!$(`#${info.id}`)[0]) {
        const script = document.createElement('script');
        script.src = info.src;
        script.id = info.id;
        script.onload = () => {
          if (typeof window !== 'undefined' && window.paypal) {
            console.log('Script do PayPal SDK carregado!');

            const styleOptions = {
              color: 'blue',
              shape: 'pill',
              label: 'pay',
              height: 40
            };

            window.paypal.Buttons({
              createOrder(data, actions) {
                return fetch('http://localhost:4000/payments/ordes', {
                  method: 'post',
                  // Resto do código...
                })
                .then(response => response.json())
                .then(order => order.id);
              },
              onApprove(data, actions) {
                console.log(data.orderID);
              },
              style: styleOptions // Adicione as opções de estilo aqui
            }).render('#paypal-button-container');
          }
        };
        document.head.appendChild(script);
      }
    };

    if (clientId) {
      insertScript({
        src: `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=BRL`,
        id: 'paypal-sdk-script',
      });
    }
  }, [clientId]);

  return (
    <div className="App">
      <div id="paypal-button-container"></div>
      {/* Adicione o estilo CSS diretamente aqui */}
      <style>
        {`
          /* Media query for mobile viewport */
          @media screen and (max-width: 400px) {
              #paypal-button-container {
                  width: 50%;
              }
          }
          
          /* Media query for desktop viewport */
          @media screen and (min-width: 400px) {
              #paypal-button-container {
                  width: 50px;
              }
          }
        `}
      </style>
    </div>
  );
}

export default Payments;
