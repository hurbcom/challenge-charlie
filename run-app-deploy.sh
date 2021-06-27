#!/bin/bash
if [ $1 == "--dev" ]; then
    echo "Iniciando ambiente de desenvolvimento..."

    echo "Desconstruindo containers, caso existam..."
    docker-compose down

    echo "Construindo containers de desenvolvimento..."
    docker-compose up -d --build

fi

if [ $1 == "--prod" ]; then
    echo "Fazendo deploy em ambiente de Produção"

    echo "Desconstruindo containers, caso existam..."
    docker-compose -f docker-compose-prod.yml down
    
    echo "Construindo containers de desenvolvimento"
    docker-compose -f docker-compose-prod.yml up -d --build

fi