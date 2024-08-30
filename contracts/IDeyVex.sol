// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract IDeyVex {
    // Define a Post structure

    struct Comment {
        string body;
        address author;
    }

    struct Post {
        uint256 id;
        string body;
        address author;
        uint256 vex;
        uint256 novex;
        Comment[] comments;
    }

    // State variables
    uint256 public postCount = 0;
    mapping(uint256 => Post) public posts;
    uint[] public postIds;

    // Event to be emitted when a new post is created
    event PostCreated(uint256 id, string body, address indexed author);

    event CommentCreated(string body, address indexed author);

    // Function to create a new post
    function createPost(string memory _body) public {
        postCount++;
        Post storage newPost = posts[postCount];
        newPost.id = postCount;
        newPost.body = _body;
        newPost.author = msg.sender;
        newPost.vex = 0;
        newPost.novex = 0;
        postIds.push(postCount);
        // Emit the PostCreated event
        emit PostCreated(postCount, _body, msg.sender);
    }

    // Function to retrieve a post by ID
    function getPost(uint256 _id) public view returns (Post memory) {
        return posts[_id];
    }

    // Function to retrieve all posts
    function getPosts() public view returns (Post[] memory) {
        uint length = postIds.length;
        Post[] memory all_posts = new Post[](length);
        for (uint i = 0; i < length; i++) {
            all_posts[i] = posts[postIds[i]];
        }
        return all_posts;
    }

    // Function to add a comment
    function addComment(uint _id, string memory _body) public {
        require(bytes(posts[_id].body).length > 0, "Post does not exist");
        Comment memory comment = Comment(_body, msg.sender);
        posts[_id].comments.push(comment);
        // Emit the Comment event
        emit CommentCreated(_body, msg.sender);
    }

    // Function to view comments on a post
    function postComments(uint _id) public view returns (Comment[] memory) {
        return posts[_id].comments;
    }
}
