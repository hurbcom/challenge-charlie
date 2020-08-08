FROM python:3-slim
RUN mkdir /var/www
RUN mkdir /var/www/weather-api
WORKDIR /var/www/weather-api
COPY . /var/www/weather-api/
RUN pip install -r requirements.txt