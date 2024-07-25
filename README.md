# Nestjs Kafka Template

## Main Technologies

![NestJS](https://img.shields.io/badge/NestJS-v10-black)
![TypeScript](https://img.shields.io/badge/TypeScript-black)
![Yarn](https://img.shields.io/badge/Yarn-black)
![Kafkajs](https://img.shields.io/badge/Kafkajs-black)

## Installation

```bash
# Navigate to the project folder
cd nestj-kafka-template

# Update your yarn version
yarn set version stable

# Install the correct node version 20.11.0
nvm use 20.11.0

# Install dependencies
yarn
```

Note: It is required to have the NVM (Node Version Manager) library installed to select the appropriate Node.js version. If you do not have NVM, you may use the global Node.js installation, ensuring it matches the version specified in the `.nvmrc` file at the root of the project.

## How to run locally

```bash
# Build application
yarn build

# Start application with Docker
# Make sure to setup .env based on .env.example file
docker-compose up

# Start application with script
# Make sure to setup .env based on .env.example file
yarn start:dev
```
