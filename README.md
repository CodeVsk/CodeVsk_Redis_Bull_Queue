# Redis, Bull and Node.js

Publisher & Consumer examples using Redis and Bull with Express.

## Authors

- [@CodeVsk](https://www.github.com/codevsk)

## Technologies

**Back-end:** Typescript and Bull

**Messaging/Caching:**: Redis

**Test:** Jest

## Run project in localhost

Clone project

```bash
  git clone https://github.com/CodeVsk/CodeVsk_Redis_Bull_Queue.git
```

Enter in project directorie

```bash
  cd CodeVsk_Redis_Bull_Queue
```

Download image Redis and up docker container

```bash
  docker-compose up -d
```

Run the consumer from the queue (make sure you install the dependencies first)

```bash
  cd consumer | npm run dev
```

Run the test to populate the queue (make sure you install the dependencies first)

```bash
  cd producer | npm test
```

## Reference

- [Redis](https://redis.io/)
- [Bull](https://optimalbits.github.io/bull/)
- [Docker](https://www.docker.com/)
