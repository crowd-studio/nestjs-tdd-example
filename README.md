# nestjs-tdd-example

### Init project

Install nest cli
```bash
yarn global add @nestjs/cli
```
Clone demo repo
```bash
git clone https://github.com/crowd-studio/nestjs-tdd-example.git
```

Install dependencies
```bash
yarn
```

### Develop

Create users module
```bash
nest g res users
```

Work with tests
```bash
yarn test:watch
```

Test on local
```bash
yarn start
```
and visit http://localhost:3000/users/female

### References

- https://randomuser.me/api/?inc=gender,name,nat&page=3&results=10&seed=abc