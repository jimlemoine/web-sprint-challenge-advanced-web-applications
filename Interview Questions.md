# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.
​
1. Explain what a token is used for.
​a token is provided by an api upon successful login and the user then must send that token with any requests to authenticate that they are an allowed user, so the token functions as proof of a successful login
2. What steps can you take in your web apps to keep your data secure?
​you can make sure to use private routes for any information that you don't want to be seen publicly and then you can require the user to successfully log in before allowing to visit protected routes by checking their token
3. Describe how web servers work.
​web servers are both physical machines and software on those machines, they store information and then share / delete / update that information based on requests via the internet, at its simplest they store files and allow people to access those files
4. Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
Create - post requests do this
Read - get requests
Update - put requests
Delete - delete requests