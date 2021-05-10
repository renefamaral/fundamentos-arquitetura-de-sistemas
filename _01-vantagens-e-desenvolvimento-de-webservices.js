/**
 * Serviços Web ou Web Services são soluções para aplicações se comunicarem independente de linguagem, softwares e hardwares utilizados.
 *  
 * Inicialmente Web Services foram criados para troca de mensagens utilizando a linguagem XML (Extensible Markup Language) sobre o protocolo
 * HTTP sendo identificado por URI (Uniform Resource Identifier).
 * 
 * Podemos dizer que Web Services são API's que se comunicam por meio de redes sobre o protocolo HTTP
 */

/**
 * Exemplo de xml
 * 
 *  <endereco>
 *      <cep>01307-000</cep>
 *      <bairro>Jardim Paulista</bairro>
 *      <logradouro>Av. Paulista</logradouro>
 *      <cidade>São Paulo</cidade>
 *      <numero>100</numero>
 *  </endereco>
 * 
 */


/**
 * Exemplo de JSON
 * 
 *  {
 *      "endereco":{
 *          "cep": "01307-002",
 *          "logradouro": "Av. Paulista",
 *          "bairro": "Jardin Paulista",
 *          "cidade": "São Paulo",
 *          "numero": 99 * 
 *      }
 * }
 * 
 */


/**
 * SOAP = Simple Object Acesses Protocol
 * 
 * É um protocolo baseado em XML para acessar serviços web
 * 
 * Pode-se dizer que SOAP é uma definição de como serviços web se comuicam.
 * 
 * Foi desenvolvido para facilitar integrações entre aplicações.
 * 
 * Permite integrações entre aplicações, independente de linguagem, pois usa como linguagem comum o XML.
 * 
 * É independente de plataforme e software.
 * 
 * Meio de transporte genérico, ou seja, pode ser usado por outros protocolos além do HTTP.
 */


/**
 * XML - Extensible Markup Language
 * 
 * É uma linguagem de marcação criada na década de 90 pela W3C.
 * 
 * Facilita a separação de conteúdo.
 * 
 * Não tem limitação de criação de tags.
 * 
 * Linguagem comum para integrações entre aplicações.
 * 
 */


/**
 * o SOAP Message possui uma estrutura única que deve sempre ser seguida.
 * 
 * SOAP Envelope
 * SOAP header
 * SOAP Body
 * 
 * 
 * SOAP Envelope é o primeiro elemento de documento e é usado para encapsular toda a mensagem SOAP
 * 
 * SOAP Header é o elemento onde possui informações de atributos e metadados da requisição
 * 
 * SOAP Body é o elemento que contém os detalhes da menssagem
 * 
 */


/**
 * Exemplo de mansagem SOAP
 * 
 * <soap:Envelope xmlns: soap="http://www.w3.org/2003/05/soap-envelope">
 *  <soap:Header>
 *  </soap:Header>
 *  <soap:Body>
 *   <m:MetodoEndereco xmlns>m="http://www.example.org/endereco">
 *    <m:Cidade>São Paulo</m:Cidade>
 *    <m:CEP>01307-002</m:CEP>
 *    <m:Logradouro>Avenida Paulista</m:Logradouro>
 *    <m:Numero>100</m:Numero>
 *   </m:Endereco>
 *  </soap:Body>
 * </soap:Envelope>
 */

/**
 * WSDL - Web Services Description Language
 * 
 * Usado para descrever Web Services, funciona como um contrato do serviço.
 * 
 * A descrição é feito em um documento XML, onde é descrito o serviço, especificações de acesso, operações e métodos. 
 */

/**
 * XSD - XML Schema Definition
 * 
 * É um schema no formato XML usado para definir a estrutura de dados que será validada no XML.
 * 
 * O XSD funciona como uma documentação de como deve ser montado o SOAP MEssage (XML) que será eviado através de Web Service.
 */


/**
 * SoapUI - soapui.org
 * 
 * Tolls -> SoapUI Open Source
 */



/**
 * REST - Representation State Transfer = Representação de transferência de estado
 * 
 * É um estlo de arquitetura de software que define a implementação de um serviço web.
 * 
 * Podem trabalhar com os formatos XML, JSON ou outros.
 * 
 * O Rest é um design de arquitetura para web.
 * 
 * Vantagens: 
 * 
 * 1° Permite integrações entre aplicações e também entre cliente e servidor em páginas web e aplicações.
 * 2° Utiliza dos métodos HTTP para definir a operação que está sendo efetuda.
 * 3° Arquitetura de fácil compreensão.
 */


/**
 * API - Application Programming Interface - Interface de programação de aplicações
 * 
 * São conjuntos de rotinas decumentados e disponibilizados por uma aplicação para que outras aplicações possam consumir suas funcionalidades.
 * 
 * Ficou popular com o aumento dos serviços web.
 * 
 * As maiores plataformas de tecnologia disponibilizam APIs para acessos de suas funcionalidades, algumas delas são:
 * * Facebook
 * * Twitter
 * * Telegram
 * * Whatsapp
 * * GitHub
 */


/**
 * Pricipais Métodos HTTP: 
 * 
 *  GET - Solicita a representação de um recurso; // ou seja o objeto como está no momento solicitado
 *  POST - Solicita a criação de um recurso;
 *  DELETE - Solicita a exclusão de um recurso;
 *  PUT - Solicita a atualização de um recurso.
 */



/**
 * JSON - JavaScript Object Notation - Objeto de notação JavaScript // serve para qualquer linguagem
 * 
 * Formatação leve utilizada para troca de mensagens entre sistemas.
 * 
 * Usa-se de uma estrutura de chave e valor e também de listas ordenadas.
 * 
 * Um dos formatos mais populares e mais utilizados para troca de mensagens entre sistemas.
 */


// Exemplo de JSON


/** 

{
    "nome": "Os Vingadores",
    "ano_lancamento": "2019",
    "personagens":[              // lista de atributos
        {
            "nome": "Thanos"
        },
        {
            "nome": "Homem de Ferro"
        },
        {
            "nome": "Thor"
        }
    ]
}

*/

/**
 * 
 * https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
 * 
 * Status code = código de estado
 * 
 * Usado pelo servidor para avisar o cliente sobre o estado da operação solicitada
 * 
 * 1xx - Informativo
 * 2xx - Sucesso
 * 3xx - Redirecionamento
 * 4xx - Erro do Cliente
 * 5xx - Erro do Servidor
 */