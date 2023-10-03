
# URL Shortener Microservice


The URL Shortener Microservice project by freeCodeCamp is a Node.js API that can shorten URLs and redirect users to the original URL. It is a good project for beginners to practice building microservices, as it is relatively straightforward to implement and passes a variety of tests.

## To build your own URL Shortener Microservice, you will need to:

> Create a new Node.js project and install the Express.js framework.

> Create a database to store the short URLs and original URLs.

> Create a new route that handles POST requests to the /api/shorturl endpoint.

> Generate a unique short URL for the given original URL.

> Store the short URL and original URL in the database.

> Return a JSON object with the original_url and short_url properties set to the original and short URLs, respectively.

> Create a new route that handles GET requests to the /api/shorturl/:shortUrl endpoint.

> Retrieve the original URL from the database for the given short URL.

> Redirect the user to the original URL.

> Add error handling to handle invalid requests.

> Once you have implemented the URL Shortener Microservice, you can test it by making POST requests to the /api/shorturl endpoint with different original URLs. For example, you can use the following request to shorten the URL "https://www.freecodecamp.org":

> The response would be a JSON object with the original_url and short_url properties set to the original and short URLs, respectively.

> You can then test the short URL by making a GET request to the /api/shorturl/:shortUrl endpoint with the short URL. For example, you can use the following request to test the short URL "http://localhost:3000/api/shorturl/1":

> You should be redirected to the original URL, which is "https://www.freecodecamp.org" in this case.

## Lessons Learned

The URL Shortener Microservice project is a good way to practice building microservices and learn how to use the Express.js framework. It is also a good way to learn about database storage and URL redirection in JavaScript.




## Screenshots

![App Screenshot](https://github.com/mskDev0092/URL-Shortener-Microservice/blob/main/Screenshot%202023-09-24%20at%2017-54-33%20URL%20Shortener%20Microservice%20freeCodeCamp.org.png)


## Run Locally

Clone the project

```bash
  git clone https://github.com/mskDev0092/URL-Shortener-Microservice
```

Go to the project directory

```bash
  cd URL-Shortener-Microservice
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Client:** HTML, CSS

**Server:** Node, Express , MongoDB


## Usage/Examples

The URL Shortener Microservice can be used in a variety of ways. For example, you could use it to:

> Shorten URLs to share them on social media or in other online content.

> Shorten URLs to make them easier to remember and type.

> Shorten URLs to track the number of clicks on a link.

> Shorten URLs to protect your privacy by hiding the original URL.

> The URL Shortener Microservice is a simple but useful tool that can be used to shorten URLs and redirect users to the original URL.


## Authors

- [Shehzad Khan](https://github.com/mskDev0092)


## Feedback

If you have any feedback, please reach out to us at [linkedin](https://www.linkedin.com/in/shehzad-khan-3ab41b235)

