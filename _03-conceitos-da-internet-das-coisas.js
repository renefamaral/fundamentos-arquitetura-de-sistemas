/**
 * Objetivos da aula:
 * 
 * 1° Introdução a internet das coisas
 * 2° Arquitetura da internet das coisas
 * 3° Caso de uso
 * 
 * Desafios da Internet das coisas:
 * 
 * 1° Privacidade e segueança;
 * 2° Quantidade exponencial de dispositivos conectados na rede;
 * 3° Ser capaz de processar e armazenar uma enorme quantidade de informações;
 * 4° Gerar valor a partir dos dados coletados.
 * 
 */


/**
 * Principais componente e arquitetura de IOT.
 * 
 * Atributos que precisam ser analisados na escolha de um dispositivo IOT:
 * 
 * 1° Baixo consumo de energia;
 * 2° Rede de dados limitado;
 * 3° Resiliencia;
 * 4° Segurança;
 * 5° Customização;
 * 6° Baixo custo.
 * 
 */

/**
 * MQTT - Protocolo mais utilizado para IOT. 
 * 
 * MQTT:
 * 
 * 1° Base na pilha do TCP/IP
 * 2° Protoclo de mensagem assíncrona (m2m)
 * 3° Criado pela IBM para conectar sensores de pipelines de petróleo a satélites
 * 4° Padrão OASIS suportado pelas linguagens de programação mais populares
 * 
 */


/**
 * Modelo Cliente Servidor (HTTP)
 * 
 * 1° Client faz uma Request para o Server
 * 2° Server trata a Request e passa uma Response ao Client
 */


/**
 * O MQTT utiliza o modelo Publish/Subscribe
 * 
 * Há uma separação de client e server
 * 
 */

/**
 * Flexibilidade dos tópicos
 * 
 * mqtt://broker/a6g319/gps/position
 * 
 * 
 * mqtt = protocolo
 * broker = broker utilizado
 * 06g319 = user identifier
 * gps = sensor
 * position = information type
 */

/**
 * o MQTT disponibiliza o QoS = Quality of service em três níveis, sendo eles: 
 * 
 * QoS Nível 0 (Nível mais barato);
 * QoS Nível 1 (Nível padrão);
 * QoS Nível 2 (Nível mais caro);
 * 
 * Nível 0 = Nível de menor esforço;
 *           Sem garantia de entrega;
 *           Mensagem não é restransmitida.
 * 
 * 
 * Nível 1 = Garante que a mensagem foi entregue no mínimo uma vez ao recebedor;
 *           Mensagem pode ser retransmitida se não houver confirmação de entrega.
 * 
 * 
 * Nível 2 = Garante que a mensagem foi entregue no mínimo uma vez ao recebedor;
 *           Mensagem pode ser retransmitida se não houver confirmação entrega (mensagem de reenviar mensagens quantas vezes for necessário).
 * 
 */

/**
 * Cloud
 * 
 * Grande e cada vez maior número de devices conectados;
 * TBs ou PBs de informações;
 * Potencial de escala global.
 */

/**
 * Estudo de caso
 * 
 * Coletar dados de uma frota de veículos e disponibilizar esses dados em real time para o cliente.
 *
 *          ?          ?          ? 
 * GPS -> Broker -> Worker -> Data store
 * 
 * Necessário realizar as escolhas que completem a solução como um todo. 
 * 
 * 1° escolher o broker;
 * 2° como será construído o woker;
 * 3° onde os dados serão armazenados.
 * 
 * 
 * Prova de conceito:
 * 
 *     GPS             Broker           Worker        Data store
 * App Android -> Eclipse Mosquitto -> Node.js -> Banco de Dados MySQL
 * 
 * 
 * Mínimo Produto Viável(solução mais robusta de nível empresarial):
 * 
 *      GPS         Broker        Worker                 Data store
 * GPS Embarcado -> HiveMQ -> Akka Scala JVM -> Banco de Dados noSQL mongoDB
 * 
 * 
 * 
 * Solução utilizando ferramentas da própria nuvem(cloud native):  
 * 
 *      GPS            Broker              Worker           Data store
 * GPS Embarcado -> AWS IoT Core -> AWS Kinesis Firehose ->   AWS S3
 * 
 * 
 * 
 */

/**
 * Arquitetura conceitual para entrega de interface gráfica
 * 
 * 
 * IoT na prática: 
 *     
 *     GPS             Broker            Worker          Cache           Visualização
 * GPS Embarcado -> AWS IoT Core -> AWS Data Stream -> AWS Lambda -> AWS ElasticCache Redis
 * 
 * 
 * Aplicação web para entregar visualização ao cliente:
 * 
 * AWS ElasticCache Redis -> AWS EC2 -> FeathersJS Backend -> Dashboard
 * 
 */