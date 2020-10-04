# SemanaKubeDev

Uniformidade
Não da para ter a menr ideia do que esta la dentro
isolar processos
padrão de execução
Diminuição de conflitos de configurações 

## Porque usar Kubernets?

Orquestrar os containers
automatizar os processos
Balanceamento de replicas
manutenção do estado ddas aplicações
estrategia de atualização
service discovery

## porque fazer a Semana kubeDev

Pegar a base, para poder resolver problema



[Docker Hub](https://hub.docker.com)


<h1 style="text-align: center;">Comandos Usados Aula 1</h1>

```
# Rodando o primeiro container
$ docker container run hello-world

# lista os container 
$ docker container ls -a

# -it interativo
$ docker container run -it ubuntu /bin/bash

# remover container 
$ docker container rm [CONTAINER ID]

# NGINX é um famoso software de código aberto para servidores web lançado originalmente para navegação HTTP. Hoje, porém, ele também funciona como proxy reverso, balanceador de carga HTTP, e proxy de email para os protocolos IMAP, POP3, e SMTP.
$ docker container run -d nginx

#acessa o container listado
$ docker container exec -it  [CONTAINER ID] /bin/bash

#Remover o docker que esta em execução
$ docker container stop [CONTAINER ID]
$ docker container rm [CONTAINER ID]

#roda o container fazendo uma ligação da porta 8080 do computador com a 80 do container
$ docker container run -d -p 8080:80 nginx

# criando a imagem apartir do docker file local
$ docker build -t saviaugusto/api-convercao:v1 . 

#lista as imagens Criadas
$ docker image ls

# rodando a imagem criada
$ docker container run -p 8080:8080 -d saviaugusto/api-convercao:v1

# Autenticando para subir a imagem 
$ docker login

# Push da Imagem
$ docker push saviaugusto/api-convercao:v1

# Criando uma copia image latest
$ docker tag saviaugusto/api-convercao:v1 saviaugusto/api-convercao:latest

# Sobe a imagem latest
$ docker push saviaugusto/api-convercao:latest

```
<h1 style="text-align: center;">Comandos Usados Aula 2</h1>

```
# Começei utilizando o kind para criar o cluster
$ choco install kind

# Criando o cluster
$ kind create cluster

# Listar nodes
$ kubectl get nodes
```

![1_5159032024949850425-1](https://user-images.githubusercontent.com/32443720/94684872-0a709b00-02ff-11eb-9781-94d5c9f6aeda.png)
![1_5159032024949850425-2](https://user-images.githubusercontent.com/32443720/94684874-0b093180-02ff-11eb-8101-02bfe4f175a9.png)
![1_5159032024949850425-3](https://user-images.githubusercontent.com/32443720/94684877-0ba1c800-02ff-11eb-8cac-90011737bf58.png)
![1_5159032024949850425-4](https://user-images.githubusercontent.com/32443720/94684879-0ba1c800-02ff-11eb-8fb6-723067cc9de9.png)
![1_5159032024949850425-5](https://user-images.githubusercontent.com/32443720/94684881-0c3a5e80-02ff-11eb-8ab1-5ffdc1a1c7b8.png)
![1_5159032024949850425-6](https://user-images.githubusercontent.com/32443720/94684884-0cd2f500-02ff-11eb-9994-070a03db63e5.png)
![1_5159032024949850425-7](https://user-images.githubusercontent.com/32443720/94684891-0e042200-02ff-11eb-855b-33f2012c4b69.png)
![1_5159032024949850425-8](https://user-images.githubusercontent.com/32443720/94684867-08a6d780-02ff-11eb-953c-cc8e8eded222.png)

![1_5161283824763535594-1](https://user-images.githubusercontent.com/32443720/94685411-c7fb8e00-02ff-11eb-88e9-4eabe9f6e62f.png)
![1_5161283824763535594-2](https://user-images.githubusercontent.com/32443720/94685424-c9c55180-02ff-11eb-8c9a-7ee2ce78f045.png)
![1_5161283824763535594-3](https://user-images.githubusercontent.com/32443720/94685425-c9c55180-02ff-11eb-809b-ff11ff6d186a.png)
![1_5161283824763535594-4](https://user-images.githubusercontent.com/32443720/94685428-ca5de800-02ff-11eb-9444-8fffd688bd80.png)
![1_5161283824763535594-5](https://user-images.githubusercontent.com/32443720/94685429-caf67e80-02ff-11eb-89d8-7fb69b39f35e.png)
![1_5161283824763535594-6](https://user-images.githubusercontent.com/32443720/94685431-caf67e80-02ff-11eb-8326-db32d2fce6eb.png)
![1_5161283824763535594-7](https://user-images.githubusercontent.com/32443720/94685432-cb8f1500-02ff-11eb-8cec-bd69873b61c1.png)
![1_5161283824763535594-8](https://user-images.githubusercontent.com/32443720/94685435-cc27ab80-02ff-11eb-94d7-38cf99d6e9af.png)
![1_5161283824763535594-9](https://user-images.githubusercontent.com/32443720/94685436-cc27ab80-02ff-11eb-9c9f-9d8f47eb8699.png)
