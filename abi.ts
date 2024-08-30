export const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "CommentCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "author",
        type: "address",
      },
    ],
    name: "PostCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_body",
        type: "string",
      },
    ],
    name: "addComment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_body",
        type: "string",
      },
    ],
    name: "createPost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "body",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "novex",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "body",
                type: "string",
              },
              {
                internalType: "address",
                name: "author",
                type: "address",
              },
            ],
            internalType: "struct IDeyVex.Comment[]",
            name: "comments",
            type: "tuple[]",
          },
        ],
        internalType: "struct IDeyVex.Post",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "body",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "vex",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "novex",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "string",
                name: "body",
                type: "string",
              },
              {
                internalType: "address",
                name: "author",
                type: "address",
              },
            ],
            internalType: "struct IDeyVex.Comment[]",
            name: "comments",
            type: "tuple[]",
          },
        ],
        internalType: "struct IDeyVex.Post[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "postComments",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "body",
            type: "string",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
        ],
        internalType: "struct IDeyVex.Comment[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "postCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "postIds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "posts",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "body",
        type: "string",
      },
      {
        internalType: "address",
        name: "author",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "novex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
