const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Post = require('../models/Post');
const SECRET_KEY = 'newtonSchool';

/*
You need to implement a controller function called getRecommendedPostsByInterests that retrieves recommended posts based on user interests in a social media application. The function should extract the following parameters from the request:

page (optional, default = 1): Represents the page number of the paginated results.
limit (optional, default = 10): Specifies the maximum number of posts per page.
Additionally, the function requires the following information from the request headers:

authorization: Contains the user's authorization token.
The function should perform the following tasks:

Verify the user's authorization token using the provided SECRET_KEY.
Retrieve the user's userId from the decoded token.
Fetch the user's profile from the database using the userId.
Query the database to find posts that have at least one tag matching the user's interests.
Populate the author field of the matching posts with the author's username.
Sort the matching posts in descending order based on their creation date (createdAt).
Implement pagination by skipping the appropriate number of posts based on the current page and limit.
Limit the number of retrieved posts per page to the specified limit.
Calculate a match score for each post based on the number of tags that match the user's interests.
Sort the recommended posts based on their match score in descending order.
Return a success response with the recommended posts in the response body.

Sample Input:
Request Headers:
authorization: <user authorization token>
Request Query Parameters:
page: 2
limit: 5

Sample Output:
Status Code: 200
{
  "posts": [
    {
      "_id": "post1Id",
      "content": "Post 1 content",
      "author": {
        "_id": "author1Id",
        "username": "author1"
      },
      "matchScore": 3
    },
    {
      "_id": "post2Id",
      "content": "Post 2 content",
      "author": {
        "_id": "author2Id",
        "username": "author2"
      },
      "matchScore": 2
    }
  ]
}

Possible Errors and Outputs:
If an error occurs during the process of retrieving recommended posts:
Status Code: 500
Response Body:
{
  "error": "An error occurred while retrieving recommended posts"
}
*/

const getRecommendedPostsByInterests = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const token = req.headers.authorization;

    try {
       //Write your code here
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

/*
You need to implement a controller function called getRecommendedPostsByFollowing that retrieves posts from users whom the current user is following in a social media application. The function should extract the following parameters from the request:

page (optional, default = 1): Represents the page number of the paginated results.
limit (optional, default = 10): Specifies the maximum number of posts per page.
Additionally, the function requires the following information from the request headers:

authorization: Contains the user's authorization token.
The function should perform the following tasks:

Verify the user's authorization token using the provided SECRET_KEY.
Retrieve the user's userId from the decoded token.
Fetch the user's profile from the database using the userId.
Query the database to find posts created by users whom the current user is following (author field).
Populate the author field of the following posts with the author's username.
Sort the following posts in descending order based on their creation date (createdAt).
Implement pagination by skipping the appropriate number of posts based on the current page and limit.
Limit the number of retrieved posts per page to the specified limit.
Return a success response with the following posts in the response body.
Sample Input:

Request Headers:
authorization: <user authorization token>
Request Query Parameters:
page: 2
limit: 5
Sample Output:

Status Code: 200

Response Body:
{
  "posts": [
    {
      "_id": "post1Id",
      "content": "Post 1 content",
      "author": {
        "_id": "author1Id",
        "username": "author1"
      }
    },
    {
      "_id": "post2Id",
      "content": "Post 2 content",
      "author": {
        "_id": "author2Id",
        "username": "author2"
      }
    }
  ]
}

Possible Errors and Outputs:
If an error occurs during the process of retrieving the following posts:
Status Code: 500
Response Body:
{
  "error": "An error occurred while retrieving following posts"
}
*/
const getRecommendedPostsByFollowing = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const token = req.headers.authorization;

    try {
       //Write your code here
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};

/*
You need to implement a controller function called getRecommendedPostsByInterestsAndFollowing that retrieves recommended posts based on user interests and users whom the current user is following in a social media application. The function should extract the following parameters from the request:

page (optional, default = 1): Represents the page number of the paginated results.
limit (optional, default = 10): Specifies the maximum number of posts per page.
Additionally, the function requires the following information from the request headers:

authorization: Contains the user's authorization token.
The function should perform the following tasks:

Verify the user's authorization token using the provided SECRET_KEY.
Retrieve the user's userId from the decoded token.
Fetch the user's profile from the database using the userId.
Check if the user exists in the database. If not, return a 404 error response with the message "User not found."
Check if the user has any interests. If not, return a 400 error response with the message "User interests not found."
Query the database to find posts that have at least one tag matching the user's interests.
Populate the author field of the matching posts with the author's username.
Sort the matching posts in descending order based on their creation date (createdAt).
Implement pagination by skipping the appropriate number of posts based on the current page and limit.
Limit the number of retrieved matching posts per page to the specified limit.
Query the database to find posts created by users whom the current user is following (author field).
Populate the author field of the following posts with the author's username and profilePicture.
Sort the following posts in descending order based on their creation date (createdAt).
Implement pagination by skipping the appropriate number of posts based on the current page and limit.
Limit the number of retrieved following posts per page to the specified limit.
Combine the matching posts and following posts into a single array of recommended posts.
Return a success response with the recommended posts in the response body.

Sample Input:
Request Headers:
authorization: <user authorization token>
Request Query Parameters:
page: 2
limit: 5

Sample Output:
Status Code: 200
Response Body:
{
  "posts": [
    {
      "_id": "post1Id",
      "content": "Post 1 content",
      "author": {
        "_id": "author1Id",
        "username": "author1"
      }
    },
    {
      "_id": "post2Id",
      "content": "Post 2 content",
      "author": {
        "_id": "author2Id",
        "username": "author2",
        "profilePicture": "author2ProfilePicture"
      }
    }
  ]
}

Possible Errors and Outputs:
If the user is not found in the database:
Status Code: 404
Response Body:
{
  "error": "User not found"
}
If the user has no interests:
Status Code: 400
Response Body:
{
  "error": "User interests not found"
}
If an error occurs during the process of retrieving the recommended posts:
Status Code: 500
Response Body:
{
  "error": "An error occurred while retrieving recommended posts"
}
*/
const getRecommendedPostsByInterestsAndFollowing = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const token = req.headers.authorization;

    try {
       //Write your code here
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error' });
    }
};


module.exports = {
    getRecommendedPostsByInterests,
    getRecommendedPostsByFollowing,
    getRecommendedPostsByInterestsAndFollowing,
};