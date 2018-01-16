# Shardis Project
[![GitHub release](https://img.shields.io/github/release/shardis/shardis.svg)](https://github.com/shardis/shardis/releases)[![license](https://img.shields.io/github/license/shardis/shardis.svg)](https://github.com/shardis/shardis)		

[![build status](https://img.shields.io/travis/shardis/shardis/master.svg)](https://travis-ci.org/shardis/shardis)[![AppVeyor](https://img.shields.io/appveyor/ci/kucharzyk/shardis.svg)](https://ci.appveyor.com/project/kucharzyk/shardis)[![codecov](https://img.shields.io/codecov/c/github/shardis/shardis/master.svg)](https://codecov.io/gh/shardis/shardis)		

## Notes

This project is still work in progress.

I'm just playing with react.

## Technologies used
- Kotlin
- Spring Boot 2
- Webflux
- Maven
- Typescript
- React
- Yarn
- Material UI

## Prerequisites

- JDK8 or newer is required
- Maven and Node.js and not required

 
## Cloning project

```text
git clone https://github.com/shardis/shardis.git
```

## Building project

```text
mvnw clean package
```

## Running project

```text
mvnw spring-boot:run
```
or 

```text
mvnw clean package
java -jar shardis-web/target/shardis-web-0.0.1-SNAPSHOT.jar
```

## Running react dev server 

Before running react server start backend application

```text
cd shardis-frontend
yarn run start
```
