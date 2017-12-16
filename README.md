## TDD with React, Enzyme & Jest
This is an update of the great tutorial provide by Dave Ceddia at :
https://daveceddia.com/getting-started-with-tdd-in-react/

Since this tutorial was wrote in 2016, things changed and i was thinking it will be great to update the tests with : 
- create-react-app projet
- Jest
- Fix some errors when PropTypes are set to required but not passed in shallow & mount 
- fix some error when trying to test a rendered list of beers with 
```javascript
wrapper.update()
```

- fix a test arround input value : 
```javascript
expect(wrapper.find('input').prop('value')).toEqual('Resin');
```

- I also add the setupTests.js for React 16.x And Enzyme

You don't need to eject, just : 

```bash
npm i
```

then

```bash
npm run test 
```
