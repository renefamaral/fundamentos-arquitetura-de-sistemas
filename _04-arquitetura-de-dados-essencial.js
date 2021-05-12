/**
 * Objetivos da aula:
 * 
 * 1° Compreender o conceito de dados;
 * 2° Enteder o que é banco de dados relacional;
 * 3° Exemplo prático.
 * 
 */


/**
 * Dados geram informação, que por sua vez geram conhecimento.
 */

/**
 * Modelo sustentável de dados:
 * 
 * Estruturação;
 * Durabilidade;
 * Velocidade;
 * Contorle de Acesso;
 * Isolamento.
 * 
 */

/**
 * Três pilares do Sistemas de Gerenciamento de Banco de Dados (SGBD):
 * 
 * 1 - Linguagem de Definição;
 * 2 - Linguagem de Manipulação;
 * 3 - Dicionário de Dados.
 */

/**
 * Modelo Flat
 * 
 * Registros anotados em um única linha com divisão entre colunas e implementação de dicionário, tal como Nome, Telefone e Valor
 */


/**
 * Modelo Hierárquico
 * 
 *Está em desuso, difícil de manter e apresenta redundância de informação
 */

 /**
  * Modelo relacional
  * 
  * Mais usado no mercado. 
  * Conjunto de tabelas que se relacionam entre si respeitando regras impostas.
  */

 /**
  * Outros modelos:
  * 
  * Redes - Grapho;
  * Orientado a Objetos;
  * Objeto-Relacional;
  * Big Data.
  */

 /**
  * SGDBR = Sistema de Gerenciamento de Banco de Dados Relacional
  * RDBMS = Relational Data Base Manager System
  */

 /**
  * Banco de dados relacional é composto de:
  * 
  * Entidades que representam tabelas;
  * Tabelas contem registros(tuplas ou linhas).
  * Tabelas contém colunas;
  * Tabelas contpem Primary Key (PK) ou Foreign Key (FK).
  * PK permite não termos informações duplicadas.
  * FK crar relacionamento entre tabelas.
  *   
  */

 /**
  * Para criar um banco de dados relacional faz-se necessário modelar a tabela. 
  * Para isso utiliza-se o modelo conceitual, denominado MER (Modelo entidade relacionamento)
  */

 /**
  * Modelo Lógico é a implementação em um SGBD
  * O Modelo de Entidade Relacionamento pode ser representado utilizando o DER (Diagrama Entidade Relacionamento) que facilita a compreensão do comportamento do modelo.
  * O DER é um diagrama gráfico contendo o nome da entidade, atributos e o relacionamento com outras tabelas.
  */

 /**
  * Entidades Fortes = não dependem de outras entidades para existir. Ex: a entidade Produto não depende de nenhuma outra para existir.
  * 
  * Entidade Fraca = depende de outras entidades para existir. Ex: a entidade venda só existirá se houver antes as entidades cliente e produto.
  * 
  */

 /**
  * Entidade associativa = quando temos uma relação M para N entre entidades.
  */

 /**
  * Normalização: 1ª ... 5ª Forma normais
  * 1, 2 e 3ª são as mais comuns
  * 
  * 1ª Forma Normal = Garantir a existência de valores únicos por coluna (atômicos).
  * 2ª Forma Normal = Todos os atribuitos não chave da tabela devem depender unicamente da chave primária e ñ somente de parte dela.
  * 3ª Forma Normal = Os valores precisam ser dependentes das chaves
  */

 /**
  * SQL tem como base; 
  * 
  * DDL - Data Definition Language; - create, drop.
  * DML - Data Manipulation Language; - responsável por manipular os dados fisicamente (insert, update, delete).
  * DQL - Data Query Language. - select, from, where, group by, having, order by.
  */

 /**
  * ACID: 
  * 
  * 1° Atomicidade - Sistema garante que todas as operações são realizadas com sucesso, garantindo o fim da ação;
  * 2° Consistência - O sistema precisa garantir a unidade da chave, as restrições lógicas. Ñ pode infringir regras;
  * 3° Isolamento - Várias transações podem acontecer simultaneamente no mesmo registro, respeitando a ordem de chegada;
  * 4° Durabilidade - Depois do Commit, mesmo com erros, queda de energia, etc. As alterações devem ser aplicadas.
  */

 /**
  * SGDBs- R comerciais pagos:
  * 
  * Oracle;
  * Microsoft SQL Server;
  * IBM DB2;
  */

 /**
  * SGDBS - R gratuitos:
  * 
  * PostgreSQL;
  * MySql;
  * SQLite
  */