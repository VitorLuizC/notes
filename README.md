# Notes

## How to fetch notes?

Since we're using a public GitHub repository, we can get the raw file in the
`raw.githubusercontent.com` service. Like in the example below:

https://raw.githubusercontent.com/VitorLuizC/notes/main/data.json.

In JavaScript, we can use the `fetch` function to get raw data and transform it
into JSON using the `Response.json` method.

```js
fetch('https://raw.githubusercontent.com/VitorLuizC/notes/main/data.json')
  .then((response) => response.json())
  .then((notes) => {
    notes;
    //=> [
    //     {
    //       id: '72524ed2-c95e-4f8e-9213-514a9f2cb4eb',
    //       content: 'Hello world!',
    //       createdAt: '2022-02-21T22:38:08.908Z'
    //     },
    //     ...
    //   ]
  });
```
