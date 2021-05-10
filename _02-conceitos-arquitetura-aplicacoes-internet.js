/**
 * Objetivos da aula
 * 
 * 1° Tipos de Arquitetura
 * 2° Comparativo entre os tipo de arquitetura
 * 3° Gerenciamento de erros e volume de acesso
 */

/**
 * Tipo de arquitetura
 * 
 * 1 - Monolito
 * 2 - Microserviços
 * 
 */



/**
 * Prós do Monolito:
 * 
 * Baixa complexidade;
 * Monitoramento simplificado.
 */

/**
 * Contras Monolito:
 * 
 * Stack única;
 * Compartilhamento de recursos;
 * Acoplamento;
 * Mais complexa a escalabilidade.
 */


/**
 * Prós Microserviços#1 - serviços acoplados entre si:
 * 
 * Stack dinâmica;
 * Simples escalabilidade.
 */

/**
 * Contras Microserviços#1 - serviços acoplados entre si:
 * 
 * Acoplamento;                           // serviços que dependem de outros serviços
 * Monitoramento mais complexo;
 * Provisionamento mais complexo;
 */

/**
 * Prós Microserviços#2 - serviços se comunicam somente pelo message Broker:
 * 
 * Stack Dinâmica;
 * Simples escalabilidade;
 * Desacoplamento;
 */

/**
 * Contras Microserviços#2 - serviços se comunicam somente pelo message Broker:
 * 
 * Monitoramento mais complexo;
 * Provisionamento mais complexo.
 */


/**
 * Prós Microserviços#3 - serviços se comunicam através de pipeline:
 * 
 * Stack dinâmica;
 * Simples escalabilidade;
 * Desacoplamento;
 * Menor complexidade.
 */

/**
 * Contras Microserviços#3 - serviços se comunicam através de pipeline:
 * 
 * Provisionamento mais complexo;
 * Prataforma inteira depede do gerenciados de pipeline,
 */



/**
 * Gerenciamento de erros
 * 
 * Onde é mais complexo?
 * 
 * Processos Assíncronos (Microsserviços #2)
 * Pipeline (Microsserviços #3)
 * 
 * 
 * Solução:
 * 
 * Dead letter queue (cria uma fila separada do message broker e toda vez que a mensagem processada gera um erro entra nessa fila tentanto reprocessá-la);
 * 
 * Fila de re-tentativas.
 * 
 */


/**
 * Suporte aos exercícios
 * 
 * https://github.com/jeffhsta/fundamentos_arquitetura 
 */