#!/bin/bash
if [ $1 == "--dev" ]; then
    echo "Criando ambiente de desenvolvimento..."
    echo "Removendo containers..."
    docker-compose down
    echo "Criando containers de desenvolvimento..."
    docker-compose up -d --build
fi
if [ $1 == "--prod" ]; then
    echo "Iniciando deploy em ambiente de Produção"
    echo "Removendo containers..."
    docker-compose -f docker-compose-prod.yml down
    echo "Criando containers de produção..."
    docker-compose -f docker-compose-prod.yml up -d --build
fi