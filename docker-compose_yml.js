version: '2'

services:
  charlie:
    build: .
    ports:
      - "3000:3000"