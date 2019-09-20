/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/parse-test.js TAP parse anonymous-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 13,
          "raw": "42",
          "start": 11,
          "type": "Literal",
          "value": 42,
        },
        "end": 14,
        "start": 4,
        "type": "ReturnStatement",
      },
    ],
    "end": 16,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 17,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse anonymous-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 2,
    "raw": "42",
    "start": 0,
    "type": "Literal",
    "value": 42,
  },
  "data": Set {},
  "end": 3,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse anonymous-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 22,
            "raw": "42",
            "start": 20,
            "type": "Literal",
            "value": 42,
          },
          "end": 23,
          "start": 13,
          "type": "ReturnStatement",
        },
      ],
      "end": 25,
      "start": 11,
      "type": "BlockStatement",
    },
    "end": 25,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 26,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-block-cell.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "end": 18,
        "expression": Node {
          "argument": Node {
            "end": 17,
            "name": "promise",
            "start": 10,
            "type": "Identifier",
          },
          "end": 17,
          "start": 4,
          "type": "AwaitExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
    ],
    "end": 20,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 21,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 17,
      "name": "promise",
      "start": 10,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-arrow-function-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": true,
    "body": Node {
      "body": Array [
        Node {
          "end": 30,
          "expression": Node {
            "argument": Node {
              "end": 29,
              "name": "promise",
              "start": 22,
              "type": "Identifier",
            },
            "end": 29,
            "start": 16,
            "type": "AwaitExpression",
          },
          "start": 16,
          "type": "ExpressionStatement",
        },
      ],
      "end": 32,
      "start": 12,
      "type": "BlockStatement",
    },
    "end": 32,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [],
    "start": 0,
    "type": "ArrowFunctionExpression",
  },
  "data": Set {},
  "end": 33,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 29,
      "name": "promise",
      "start": 22,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-arrow-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 54,
            "id": Node {
              "end": 15,
              "name": "inner",
              "start": 10,
              "type": "Identifier",
            },
            "init": Node {
              "async": true,
              "body": Node {
                "body": Array [
                  Node {
                    "end": 50,
                    "expression": Node {
                      "argument": Node {
                        "end": 49,
                        "name": "promise",
                        "start": 42,
                        "type": "Identifier",
                      },
                      "end": 49,
                      "start": 36,
                      "type": "AwaitExpression",
                    },
                    "start": 36,
                    "type": "ExpressionStatement",
                  },
                ],
                "end": 54,
                "start": 30,
                "type": "BlockStatement",
              },
              "end": 54,
              "expression": false,
              "generator": false,
              "id": null,
              "params": Array [],
              "start": 18,
              "type": "ArrowFunctionExpression",
            },
            "start": 10,
            "type": "VariableDeclarator",
          },
        ],
        "end": 55,
        "kind": "const",
        "start": 4,
        "type": "VariableDeclaration",
      },
    ],
    "end": 57,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 58,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 49,
      "name": "promise",
      "start": 42,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-class.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "body": Node {
          "body": Array [
            Node {
              "computed": false,
              "end": 65,
              "key": Node {
                "end": 34,
                "name": "method",
                "start": 28,
                "type": "Identifier",
              },
              "kind": "method",
              "start": 22,
              "static": false,
              "type": "MethodDefinition",
              "value": Node {
                "async": true,
                "body": Node {
                  "body": Array [
                    Node {
                      "end": 59,
                      "expression": Node {
                        "argument": Node {
                          "end": 58,
                          "name": "promise",
                          "start": 51,
                          "type": "Identifier",
                        },
                        "end": 58,
                        "start": 45,
                        "type": "AwaitExpression",
                      },
                      "start": 45,
                      "type": "ExpressionStatement",
                    },
                  ],
                  "end": 65,
                  "start": 37,
                  "type": "BlockStatement",
                },
                "end": 65,
                "expression": false,
                "generator": false,
                "id": null,
                "params": Array [],
                "start": 34,
                "type": "FunctionExpression",
              },
            },
          ],
          "end": 69,
          "start": 16,
          "type": "ClassBody",
        },
        "end": 69,
        "id": Node {
          "end": 15,
          "name": "Inner",
          "start": 10,
          "type": "Identifier",
        },
        "start": 4,
        "superClass": null,
        "type": "ClassDeclaration",
      },
    ],
    "end": 71,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 72,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 58,
      "name": "promise",
      "start": 51,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-in-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "async": true,
        "body": Node {
          "body": Array [
            Node {
              "end": 47,
              "expression": Node {
                "argument": Node {
                  "end": 46,
                  "name": "promise",
                  "start": 39,
                  "type": "Identifier",
                },
                "end": 46,
                "start": 33,
                "type": "AwaitExpression",
              },
              "start": 33,
              "type": "ExpressionStatement",
            },
          ],
          "end": 51,
          "start": 27,
          "type": "BlockStatement",
        },
        "end": 51,
        "expression": false,
        "generator": false,
        "id": Node {
          "end": 24,
          "name": "inner",
          "start": 19,
          "type": "Identifier",
        },
        "params": Array [],
        "start": 4,
        "type": "FunctionDeclaration",
      },
    ],
    "end": 53,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 54,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 46,
      "name": "promise",
      "start": 39,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse await-yield.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "end": 18,
        "expression": Node {
          "argument": Node {
            "end": 17,
            "name": "promise",
            "start": 10,
            "type": "Identifier",
          },
          "end": 17,
          "start": 4,
          "type": "AwaitExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
      Node {
        "end": 33,
        "expression": Node {
          "argument": Node {
            "end": 32,
            "name": "value",
            "start": 27,
            "type": "Identifier",
          },
          "delegate": false,
          "end": 32,
          "start": 21,
          "type": "YieldExpression",
        },
        "start": 21,
        "type": "ExpressionStatement",
      },
    ],
    "end": 35,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 36,
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 17,
      "name": "promise",
      "start": 10,
      "type": "Identifier",
    },
    Node {
      "end": 32,
      "name": "value",
      "start": 27,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse bare-dynamic-import.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "arguments": Array [
      Node {
        "end": 12,
        "raw": "\\"bar\\"",
        "start": 7,
        "type": "Literal",
        "value": "bar",
      },
    ],
    "callee": Node {
      "end": 6,
      "start": 0,
      "type": "Import",
    },
    "end": 13,
    "start": 0,
    "type": "CallExpression",
  },
  "data": Set {},
  "end": 14,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse bigint-zero.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "bigint": "0n",
    "end": 2,
    "raw": "0n",
    "start": 0,
    "type": "Literal",
    "value": 0,
  },
  "data": Set {},
  "end": 3,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse bigint.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 9,
    "left": Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
    "operator": "+",
    "right": Node {
      "bigint": "42n",
      "end": 9,
      "raw": "42n",
      "start": 6,
      "type": "Literal",
      "value": 42,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "data": Set {},
  "end": 10,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse binary-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "left": Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
    "operator": "+",
    "right": Node {
      "end": 8,
      "raw": "42",
      "start": 6,
      "type": "Literal",
      "value": 42,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "data": Set {},
  "end": 9,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse block-leading-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 40,
          "raw": "42",
          "start": 38,
          "type": "Literal",
          "value": 42,
        },
        "end": 41,
        "start": 31,
        "type": "ReturnStatement",
      },
    ],
    "end": 43,
    "start": 27,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 44,
  "generator": false,
  "id": Node {
    "end": 24,
    "name": "foo",
    "start": 21,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse block-trailing-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 19,
          "raw": "42",
          "start": 17,
          "type": "Literal",
          "value": 42,
        },
        "end": 20,
        "start": 10,
        "type": "ReturnStatement",
      },
    ],
    "end": 22,
    "start": 6,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 42,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse comma-then-comment.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 2,
    },
    "message": "Unexpected end of input (2:0)",
    "pos": 30,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": null,
  "end": 19,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse destructured-arrow-with-default.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [],
      "end": 31,
      "start": 29,
      "type": "BlockStatement",
    },
    "end": 31,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [
      Node {
        "end": 24,
        "properties": Array [
          Node {
            "computed": false,
            "end": 23,
            "key": Node {
              "end": 11,
              "name": "foo",
              "start": 8,
              "type": "Identifier",
            },
            "kind": "init",
            "method": false,
            "shorthand": true,
            "start": 8,
            "type": "Property",
            "value": Node {
              "end": 23,
              "left": Node {
                "end": 11,
                "name": "foo",
                "start": 8,
                "type": "Identifier",
              },
              "right": Node {
                "end": 23,
                "raw": "\\"default\\"",
                "start": 14,
                "type": "Literal",
                "value": "default",
              },
              "start": 8,
              "type": "AssignmentPattern",
            },
          },
        ],
        "start": 7,
        "type": "ObjectPattern",
      },
    ],
    "start": 6,
    "type": "ArrowFunctionExpression",
  },
  "data": Set {},
  "end": 32,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "fun",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse destructured-object-with-default.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [],
      "end": 34,
      "start": 32,
      "type": "BlockStatement",
    },
    "end": 34,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 12,
      "name": "fun",
      "start": 9,
      "type": "Identifier",
    },
    "params": Array [
      Node {
        "end": 30,
        "properties": Array [
          Node {
            "computed": false,
            "end": 29,
            "key": Node {
              "end": 17,
              "name": "foo",
              "start": 14,
              "type": "Identifier",
            },
            "kind": "init",
            "method": false,
            "shorthand": true,
            "start": 14,
            "type": "Property",
            "value": Node {
              "end": 29,
              "left": Node {
                "end": 17,
                "name": "foo",
                "start": 14,
                "type": "Identifier",
              },
              "right": Node {
                "end": 29,
                "raw": "\\"default\\"",
                "start": 20,
                "type": "Literal",
                "value": "default",
              },
              "start": 14,
              "type": "AssignmentPattern",
            },
          },
        ],
        "start": 13,
        "type": "ObjectPattern",
      },
    ],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 35,
  "generator": false,
  "id": Node {
    "end": 12,
    "name": "fun",
    "start": 9,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse dynamic-import.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "arguments": Array [
      Node {
        "end": 18,
        "raw": "\\"bar\\"",
        "start": 13,
        "type": "Literal",
        "value": "bar",
      },
    ],
    "callee": Node {
      "end": 12,
      "start": 6,
      "type": "Import",
    },
    "end": 19,
    "start": 6,
    "type": "CallExpression",
  },
  "data": Set {},
  "end": 20,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse empty.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": null,
  "end": 0,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse expression-extra.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "Unexpected token (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse expression-trailing-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "raw": "42",
    "start": 6,
    "type": "Literal",
    "value": 42,
  },
  "data": Set {},
  "end": 28,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse extra-semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "raw": "42",
    "start": 6,
    "type": "Literal",
    "value": 42,
  },
  "data": Set {},
  "end": 10,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse for-await-generator.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "await": true,
        "body": Node {
          "body": Array [
            Node {
              "end": 55,
              "expression": Node {
                "argument": Node {
                  "end": 54,
                  "name": "value",
                  "start": 49,
                  "type": "Identifier",
                },
                "delegate": false,
                "end": 54,
                "start": 43,
                "type": "YieldExpression",
              },
              "start": 43,
              "type": "ExpressionStatement",
            },
          ],
          "end": 59,
          "start": 37,
          "type": "BlockStatement",
        },
        "end": 59,
        "left": Node {
          "declarations": Array [
            Node {
              "end": 26,
              "id": Node {
                "end": 26,
                "name": "value",
                "start": 21,
                "type": "Identifier",
              },
              "init": null,
              "start": 21,
              "type": "VariableDeclarator",
            },
          ],
          "end": 26,
          "kind": "const",
          "start": 15,
          "type": "VariableDeclaration",
        },
        "right": Node {
          "arguments": Array [],
          "callee": Node {
            "end": 33,
            "name": "foo",
            "start": 30,
            "type": "Identifier",
          },
          "end": 35,
          "start": 30,
          "type": "CallExpression",
        },
        "start": 4,
        "type": "ForOfStatement",
      },
    ],
    "end": 61,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 62,
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 33,
      "name": "foo",
      "start": 30,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse for-await-in-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": true,
    "body": Node {
      "body": Array [
        Node {
          "declarations": Array [
            Node {
              "end": 42,
              "id": Node {
                "end": 37,
                "name": "values",
                "start": 31,
                "type": "Identifier",
              },
              "init": Node {
                "elements": Array [],
                "end": 42,
                "start": 40,
                "type": "ArrayExpression",
              },
              "start": 31,
              "type": "VariableDeclarator",
            },
          ],
          "end": 43,
          "kind": "const",
          "start": 25,
          "type": "VariableDeclaration",
        },
        Node {
          "await": true,
          "body": Node {
            "body": Array [
              Node {
                "end": 104,
                "expression": Node {
                  "arguments": Array [
                    Node {
                      "end": 102,
                      "name": "value",
                      "start": 97,
                      "type": "Identifier",
                    },
                  ],
                  "callee": Node {
                    "computed": false,
                    "end": 96,
                    "object": Node {
                      "end": 91,
                      "name": "values",
                      "start": 85,
                      "type": "Identifier",
                    },
                    "property": Node {
                      "end": 96,
                      "name": "push",
                      "start": 92,
                      "type": "Identifier",
                    },
                    "start": 85,
                    "type": "MemberExpression",
                  },
                  "end": 103,
                  "start": 85,
                  "type": "CallExpression",
                },
                "start": 85,
                "type": "ExpressionStatement",
              },
            ],
            "end": 108,
            "start": 79,
            "type": "BlockStatement",
          },
          "end": 108,
          "left": Node {
            "declarations": Array [
              Node {
                "end": 68,
                "id": Node {
                  "end": 68,
                  "name": "value",
                  "start": 63,
                  "type": "Identifier",
                },
                "init": null,
                "start": 63,
                "type": "VariableDeclarator",
              },
            ],
            "end": 68,
            "kind": "const",
            "start": 57,
            "type": "VariableDeclaration",
          },
          "right": Node {
            "arguments": Array [],
            "callee": Node {
              "end": 75,
              "name": "foo",
              "start": 72,
              "type": "Identifier",
            },
            "end": 77,
            "start": 72,
            "type": "CallExpression",
          },
          "start": 46,
          "type": "ForOfStatement",
        },
        Node {
          "argument": Node {
            "end": 124,
            "name": "values",
            "start": 118,
            "type": "Identifier",
          },
          "end": 125,
          "start": 111,
          "type": "ReturnStatement",
        },
      ],
      "end": 127,
      "start": 21,
      "type": "BlockStatement",
    },
    "end": 127,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 18,
      "name": "bar",
      "start": 15,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 128,
  "generator": false,
  "id": Node {
    "end": 18,
    "name": "bar",
    "start": 15,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 75,
      "name": "foo",
      "start": 72,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse for-await.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 21,
            "id": Node {
              "end": 16,
              "name": "values",
              "start": 10,
              "type": "Identifier",
            },
            "init": Node {
              "elements": Array [],
              "end": 21,
              "start": 19,
              "type": "ArrayExpression",
            },
            "start": 10,
            "type": "VariableDeclarator",
          },
        ],
        "end": 22,
        "kind": "const",
        "start": 4,
        "type": "VariableDeclaration",
      },
      Node {
        "await": true,
        "body": Node {
          "body": Array [
            Node {
              "end": 83,
              "expression": Node {
                "arguments": Array [
                  Node {
                    "end": 81,
                    "name": "value",
                    "start": 76,
                    "type": "Identifier",
                  },
                ],
                "callee": Node {
                  "computed": false,
                  "end": 75,
                  "object": Node {
                    "end": 70,
                    "name": "values",
                    "start": 64,
                    "type": "Identifier",
                  },
                  "property": Node {
                    "end": 75,
                    "name": "push",
                    "start": 71,
                    "type": "Identifier",
                  },
                  "start": 64,
                  "type": "MemberExpression",
                },
                "end": 82,
                "start": 64,
                "type": "CallExpression",
              },
              "start": 64,
              "type": "ExpressionStatement",
            },
          ],
          "end": 87,
          "start": 58,
          "type": "BlockStatement",
        },
        "end": 87,
        "left": Node {
          "declarations": Array [
            Node {
              "end": 47,
              "id": Node {
                "end": 47,
                "name": "value",
                "start": 42,
                "type": "Identifier",
              },
              "init": null,
              "start": 42,
              "type": "VariableDeclarator",
            },
          ],
          "end": 47,
          "kind": "const",
          "start": 36,
          "type": "VariableDeclaration",
        },
        "right": Node {
          "arguments": Array [],
          "callee": Node {
            "end": 54,
            "name": "foo",
            "start": 51,
            "type": "Identifier",
          },
          "end": 56,
          "start": 51,
          "type": "CallExpression",
        },
        "start": 25,
        "type": "ForOfStatement",
      },
      Node {
        "argument": Node {
          "end": 103,
          "name": "values",
          "start": 97,
          "type": "Identifier",
        },
        "end": 104,
        "start": 90,
        "type": "ReturnStatement",
      },
    ],
    "end": 106,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 107,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 54,
      "name": "foo",
      "start": 51,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse forbidden-data-1.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "Data() requires a single literal string as its argument. (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse forbidden-data.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "Data() requires a single literal string as its argument. (1:4)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse global-assignment.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 2,
      "line": 2,
    },
    "message": "Assignment to constant variable foo (2:2)",
    "pos": 4,
    "type": "TypeError",
  },
}
`

exports[`test/parse-test.js TAP parse illegal-arguments.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 4,
      "line": 1,
    },
    "message": "arguments is not allowed (1:4)",
    "pos": 4,
    "type": "ReferenceError",
  },
}
`

exports[`test/parse-test.js TAP parse illegal-arrow-arguments.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 1,
    },
    "message": "arguments is not allowed (1:6)",
    "pos": 6,
    "type": "ReferenceError",
  },
}
`

exports[`test/parse-test.js TAP parse import-default-as.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 8,
      "line": 1,
    },
    "message": "Unexpected keyword 'default' (1:8)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-default.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 7,
      "line": 1,
    },
    "message": "Unexpected token (1:7)",
    "pos": 7,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-empty.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 23,
    "source": Node {
      "end": 23,
      "raw": "\\"module\\"",
      "start": 15,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 24,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-extra.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 39,
      "line": 1,
    },
    "message": "Unexpected token (1:39)",
    "pos": 39,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-mutable-as.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 41,
    "source": Node {
      "end": 41,
      "raw": "\\"module\\"",
      "start": 33,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 26,
        "imported": Node {
          "end": 19,
          "name": "foo",
          "start": 16,
          "type": "Identifier",
        },
        "local": Node {
          "end": 26,
          "name": "bar",
          "start": 23,
          "type": "Identifier",
        },
        "mutable": true,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 42,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-mutable.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 34,
    "source": Node {
      "end": 34,
      "raw": "\\"module\\"",
      "start": 26,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 19,
        "imported": Node {
          "end": 19,
          "name": "foo",
          "start": 16,
          "type": "Identifier",
        },
        "local": Node {
          "end": 19,
          "name": "foo",
          "start": 16,
          "type": "Identifier",
        },
        "mutable": true,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 35,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 38,
    "source": Node {
      "end": 38,
      "raw": "\\"module\\"",
      "start": 30,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
      Node {
        "end": 23,
        "imported": Node {
          "end": 16,
          "name": "bar",
          "start": 13,
          "type": "Identifier",
        },
        "local": Node {
          "end": 23,
          "name": "baz",
          "start": 20,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 13,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 40,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-side-effect.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 7,
      "line": 1,
    },
    "message": "Unexpected token (1:7)",
    "pos": 7,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-viewof-as.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 40,
    "source": Node {
      "end": 40,
      "raw": "\\"module\\"",
      "start": 32,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 25,
        "imported": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "local": Node {
          "end": 25,
          "name": "bar",
          "start": 22,
          "type": "Identifier",
        },
        "start": 8,
        "type": "ImportSpecifier",
        "view": true,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 41,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-viewof.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 33,
    "source": Node {
      "end": 33,
      "raw": "\\"module\\"",
      "start": 25,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 18,
        "imported": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "local": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "start": 8,
        "type": "ImportSpecifier",
        "view": true,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 34,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-with-default-as.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 26,
      "line": 1,
    },
    "message": "Unexpected keyword 'default' (1:26)",
    "pos": 26,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-with-default.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 19,
      "line": 1,
    },
    "message": "Unexpected keyword 'default' (1:19)",
    "pos": 19,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse import-with-empty.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 34,
    "injections": Array [],
    "source": Node {
      "end": 34,
      "raw": "\\"module\\"",
      "start": 26,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 35,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import-with.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 44,
    "injections": Array [
      Node {
        "end": 29,
        "imported": Node {
          "end": 22,
          "name": "bar",
          "start": 19,
          "type": "Identifier",
        },
        "local": Node {
          "end": 29,
          "name": "baz",
          "start": 26,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 19,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "source": Node {
      "end": 44,
      "raw": "\\"module\\"",
      "start": 36,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 45,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse import.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 38,
    "source": Node {
      "end": 38,
      "raw": "\\"module\\"",
      "start": 30,
      "type": "Literal",
      "value": "module",
    },
    "specifiers": Array [
      Node {
        "end": 11,
        "imported": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "local": Node {
          "end": 11,
          "name": "foo",
          "start": 8,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 8,
        "type": "ImportSpecifier",
        "view": false,
      },
      Node {
        "end": 23,
        "imported": Node {
          "end": 16,
          "name": "bar",
          "start": 13,
          "type": "Identifier",
        },
        "local": Node {
          "end": 23,
          "name": "baz",
          "start": 20,
          "type": "Identifier",
        },
        "mutable": false,
        "start": 13,
        "type": "ImportSpecifier",
        "view": false,
      },
    ],
    "start": 0,
    "type": "ImportDeclaration",
  },
  "end": 39,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse leading-semicolon.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 1,
      "line": 1,
    },
    "message": "Unexpected token (1:1)",
    "pos": 1,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse legal-arguments.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "computed": false,
            "end": 36,
            "object": Node {
              "end": 29,
              "name": "arguments",
              "start": 20,
              "type": "Identifier",
            },
            "property": Node {
              "end": 36,
              "name": "length",
              "start": 30,
              "type": "Identifier",
            },
            "start": 20,
            "type": "MemberExpression",
          },
          "end": 37,
          "start": 13,
          "type": "ReturnStatement",
        },
      ],
      "end": 39,
      "start": 11,
      "type": "BlockStatement",
    },
    "end": 39,
    "expression": false,
    "generator": false,
    "id": null,
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 40,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse load-data.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 21,
            "id": Node {
              "end": 9,
              "name": "a",
              "start": 8,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 20,
                  "raw": "\\"a\\"",
                  "start": 17,
                  "type": "Literal",
                  "value": "a",
                },
              ],
              "callee": Node {
                "end": 16,
                "name": "Data",
                "start": 12,
                "type": "Identifier",
              },
              "end": 21,
              "start": 12,
              "type": "CallExpression",
            },
            "start": 8,
            "type": "VariableDeclarator",
          },
        ],
        "end": 22,
        "kind": "let",
        "start": 4,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 42,
            "id": Node {
              "end": 30,
              "name": "b",
              "start": 29,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 41,
                  "raw": "'b'",
                  "start": 38,
                  "type": "Literal",
                  "value": "b",
                },
              ],
              "callee": Node {
                "end": 37,
                "name": "Data",
                "start": 33,
                "type": "Identifier",
              },
              "end": 42,
              "start": 33,
              "type": "CallExpression",
            },
            "start": 29,
            "type": "VariableDeclarator",
          },
        ],
        "end": 43,
        "kind": "let",
        "start": 25,
        "type": "VariableDeclaration",
      },
      Node {
        "declarations": Array [
          Node {
            "end": 63,
            "id": Node {
              "end": 51,
              "name": "c",
              "start": 50,
              "type": "Identifier",
            },
            "init": Node {
              "arguments": Array [
                Node {
                  "end": 62,
                  "expressions": Array [],
                  "quasis": Array [
                    Node {
                      "end": 61,
                      "start": 60,
                      "tail": true,
                      "type": "TemplateElement",
                      "value": Object {
                        "cooked": "c",
                        "raw": "c",
                      },
                    },
                  ],
                  "start": 59,
                  "type": "TemplateLiteral",
                },
              ],
              "callee": Node {
                "end": 58,
                "name": "Data",
                "start": 54,
                "type": "Identifier",
              },
              "end": 63,
              "start": 54,
              "type": "CallExpression",
            },
            "start": 50,
            "type": "VariableDeclarator",
          },
        ],
        "end": 64,
        "kind": "let",
        "start": 46,
        "type": "VariableDeclaration",
      },
    ],
    "end": 66,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {
    "a",
    "b",
    "c",
  },
  "end": 67,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 16,
      "name": "Data",
      "start": 12,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse member-assignment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 14,
    "left": Node {
      "computed": false,
      "end": 10,
      "object": Node {
        "end": 6,
        "name": "window",
        "start": 0,
        "type": "Identifier",
      },
      "property": Node {
        "end": 10,
        "name": "foo",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MemberExpression",
    },
    "operator": "=",
    "right": Node {
      "end": 14,
      "raw": "2",
      "start": 13,
      "type": "Literal",
      "value": 2,
    },
    "start": 0,
    "type": "AssignmentExpression",
  },
  "data": Set {},
  "end": 15,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 6,
      "name": "window",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-argument.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 12,
      "line": 1,
    },
    "message": "Unexpected keyword 'mutable' (1:12)",
    "pos": 12,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-as-property.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 23,
    "left": Node {
      "computed": true,
      "end": 19,
      "object": Node {
        "end": 6,
        "name": "object",
        "start": 0,
        "type": "Identifier",
      },
      "property": Node {
        "end": 18,
        "id": Node {
          "end": 18,
          "name": "foo",
          "start": 15,
          "type": "Identifier",
        },
        "start": 7,
        "type": "MutableExpression",
      },
      "start": 0,
      "type": "MemberExpression",
    },
    "operator": "+",
    "right": Node {
      "end": 23,
      "raw": "1",
      "start": 22,
      "type": "Literal",
      "value": 1,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "data": Set {},
  "end": 24,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 6,
      "name": "object",
      "start": 0,
      "type": "Identifier",
    },
    Node {
      "end": 18,
      "id": Node {
        "end": 18,
        "name": "foo",
        "start": 15,
        "type": "Identifier",
      },
      "start": 7,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-assign-default.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "argument": Node {
      "arguments": Array [
        Node {
          "end": 42,
          "name": "config",
          "start": 36,
          "type": "Identifier",
        },
      ],
      "callee": Node {
        "computed": false,
        "end": 35,
        "object": Node {
          "end": 29,
          "name": "Service",
          "start": 22,
          "type": "Identifier",
        },
        "property": Node {
          "end": 35,
          "name": "fetch",
          "start": 30,
          "type": "Identifier",
        },
        "start": 22,
        "type": "MemberExpression",
      },
      "end": 43,
      "start": 22,
      "type": "CallExpression",
    },
    "end": 43,
    "start": 16,
    "type": "AwaitExpression",
  },
  "data": Set {},
  "end": 44,
  "generator": false,
  "id": Node {
    "end": 13,
    "id": Node {
      "end": 13,
      "name": "state",
      "start": 8,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MutableExpression",
  },
  "references": Array [
    Node {
      "end": 29,
      "name": "Service",
      "start": 22,
      "type": "Identifier",
    },
    Node {
      "end": 42,
      "name": "config",
      "start": 36,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-assignment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "end": 24,
        "expression": Node {
          "end": 23,
          "left": Node {
            "end": 17,
            "id": Node {
              "end": 17,
              "name": "value",
              "start": 12,
              "type": "Identifier",
            },
            "start": 4,
            "type": "MutableExpression",
          },
          "operator": "=",
          "right": Node {
            "end": 23,
            "raw": "101",
            "start": 20,
            "type": "Literal",
            "value": 101,
          },
          "start": 4,
          "type": "AssignmentExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
    ],
    "end": 26,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 27,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 17,
      "id": Node {
        "end": 17,
        "name": "value",
        "start": 12,
        "type": "Identifier",
      },
      "start": 4,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 37,
          "properties": Array [
            Node {
              "computed": false,
              "end": 30,
              "key": Node {
                "end": 27,
                "name": "x",
                "start": 26,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": false,
              "start": 26,
              "type": "Property",
              "value": Node {
                "end": 30,
                "raw": "0",
                "start": 29,
                "type": "Literal",
                "value": 0,
              },
            },
            Node {
              "computed": false,
              "end": 36,
              "key": Node {
                "end": 33,
                "name": "y",
                "start": 32,
                "type": "Identifier",
              },
              "kind": "init",
              "method": false,
              "shorthand": false,
              "start": 32,
              "type": "Property",
              "value": Node {
                "end": 36,
                "raw": "0",
                "start": 35,
                "type": "Literal",
                "value": 0,
              },
            },
          ],
          "start": 25,
          "type": "ObjectExpression",
        },
        "end": 38,
        "start": 18,
        "type": "ReturnStatement",
      },
    ],
    "end": 40,
    "start": 14,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 41,
  "generator": false,
  "id": Node {
    "end": 11,
    "id": Node {
      "end": 11,
      "name": "foo",
      "start": 8,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MutableExpression",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-constant.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 8,
      "line": 1,
    },
    "message": "Unexpected token (1:8)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-default-value.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 39,
            "name": "y",
            "start": 38,
            "type": "Identifier",
          },
          "end": 40,
          "start": 31,
          "type": "ReturnStatement",
        },
      ],
      "end": 42,
      "start": 27,
      "type": "BlockStatement",
    },
    "end": 42,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 11,
      "name": "fn",
      "start": 9,
      "type": "Identifier",
    },
    "params": Array [
      Node {
        "end": 25,
        "left": Node {
          "end": 13,
          "name": "y",
          "start": 12,
          "type": "Identifier",
        },
        "right": Node {
          "end": 25,
          "id": Node {
            "end": 25,
            "name": "x",
            "start": 24,
            "type": "Identifier",
          },
          "start": 16,
          "type": "MutableExpression",
        },
        "start": 12,
        "type": "AssignmentPattern",
      },
    ],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 43,
  "generator": false,
  "id": Node {
    "end": 11,
    "name": "fn",
    "start": 9,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 25,
      "id": Node {
        "end": 25,
        "name": "x",
        "start": 24,
        "type": "Identifier",
      },
      "start": 16,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-destructure-array.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 19,
    "left": Node {
      "elements": Array [
        Node {
          "end": 11,
          "id": Node {
            "end": 11,
            "name": "x",
            "start": 10,
            "type": "Identifier",
          },
          "start": 2,
          "type": "MutableExpression",
        },
      ],
      "end": 12,
      "start": 1,
      "type": "ArrayPattern",
    },
    "operator": "=",
    "right": Node {
      "elements": Array [
        Node {
          "end": 18,
          "raw": "42",
          "start": 16,
          "type": "Literal",
          "value": 42,
        },
      ],
      "end": 19,
      "start": 15,
      "type": "ArrayExpression",
    },
    "start": 1,
    "type": "AssignmentExpression",
  },
  "data": Set {},
  "end": 21,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 11,
      "id": Node {
        "end": 11,
        "name": "x",
        "start": 10,
        "type": "Identifier",
      },
      "start": 2,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-destructure-object.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 42,
    "left": Node {
      "end": 22,
      "properties": Array [
        Node {
          "computed": false,
          "end": 21,
          "key": Node {
            "end": 10,
            "name": "property",
            "start": 2,
            "type": "Identifier",
          },
          "kind": "init",
          "method": false,
          "shorthand": false,
          "start": 2,
          "type": "Property",
          "value": Node {
            "end": 21,
            "id": Node {
              "end": 21,
              "name": "x",
              "start": 20,
              "type": "Identifier",
            },
            "start": 12,
            "type": "MutableExpression",
          },
        },
      ],
      "start": 1,
      "type": "ObjectPattern",
    },
    "operator": "=",
    "right": Node {
      "end": 42,
      "properties": Array [
        Node {
          "computed": false,
          "end": 41,
          "key": Node {
            "end": 34,
            "name": "property",
            "start": 26,
            "type": "Identifier",
          },
          "kind": "init",
          "method": false,
          "shorthand": false,
          "start": 26,
          "type": "Property",
          "value": Node {
            "end": 41,
            "name": "value",
            "start": 36,
            "type": "Identifier",
          },
        },
      ],
      "start": 25,
      "type": "ObjectExpression",
    },
    "start": 1,
    "type": "AssignmentExpression",
  },
  "data": Set {},
  "end": 44,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 21,
      "id": Node {
        "end": 21,
        "name": "x",
        "start": 20,
        "type": "Identifier",
      },
      "start": 12,
      "type": "MutableExpression",
    },
    Node {
      "end": 41,
      "name": "value",
      "start": 36,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-destructure-property.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 2,
      "line": 1,
    },
    "message": "Unexpected keyword 'mutable' (1:2)",
    "pos": 2,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-internal-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 27,
    "id": Node {
      "end": 27,
      "name": "value",
      "start": 22,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MutableExpression",
  },
  "data": Set {},
  "end": 28,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 27,
      "id": Node {
        "end": 27,
        "name": "value",
        "start": 22,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-member.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 15,
      "line": 1,
    },
    "message": "Unexpected token (1:15)",
    "pos": 15,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse mutable-reference.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "computed": false,
    "end": 22,
    "object": Node {
      "end": 13,
      "id": Node {
        "end": 13,
        "name": "value",
        "start": 8,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MutableExpression",
    },
    "property": Node {
      "end": 22,
      "name": "property",
      "start": 14,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MemberExpression",
  },
  "data": Set {},
  "end": 23,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 13,
      "id": Node {
        "end": 13,
        "name": "value",
        "start": 8,
        "type": "Identifier",
      },
      "start": 0,
      "type": "MutableExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse mutable-var.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 2,
    },
    "message": "Unexpected keyword 'mutable' (2:6)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse named-async-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": true,
    "body": Node {
      "body": Array [
        Node {
          "end": 37,
          "expression": Node {
            "argument": Node {
              "end": 36,
              "name": "promise",
              "start": 29,
              "type": "Identifier",
            },
            "end": 36,
            "start": 23,
            "type": "AwaitExpression",
          },
          "start": 23,
          "type": "ExpressionStatement",
        },
      ],
      "end": 39,
      "start": 21,
      "type": "BlockStatement",
    },
    "end": 39,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 18,
      "name": "foo",
      "start": 15,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 40,
  "generator": false,
  "id": Node {
    "end": 18,
    "name": "foo",
    "start": 15,
    "type": "Identifier",
  },
  "references": Array [
    Node {
      "end": 36,
      "name": "promise",
      "start": 29,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "end": 19,
          "raw": "42",
          "start": 17,
          "type": "Literal",
          "value": 42,
        },
        "end": 20,
        "start": 10,
        "type": "ReturnStatement",
      },
    ],
    "end": 22,
    "start": 6,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 23,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-class.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Node {
      "body": Array [],
      "end": 12,
      "start": 10,
      "type": "ClassBody",
    },
    "end": 12,
    "id": Node {
      "end": 9,
      "name": "Foo",
      "start": 6,
      "type": "Identifier",
    },
    "start": 0,
    "superClass": null,
    "type": "ClassExpression",
  },
  "data": Set {},
  "end": 13,
  "generator": false,
  "id": Node {
    "end": 9,
    "name": "Foo",
    "start": 6,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-empty.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 2,
    },
    "message": "Unexpected end of input (2:0)",
    "pos": 6,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse named-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 8,
    "raw": "42",
    "start": 6,
    "type": "Literal",
    "value": 42,
  },
  "data": Set {},
  "end": 9,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-function-in-named-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 32,
            "raw": "42",
            "start": 30,
            "type": "Literal",
            "value": 42,
          },
          "end": 33,
          "start": 23,
          "type": "ReturnStatement",
        },
      ],
      "end": 35,
      "start": 21,
      "type": "BlockStatement",
    },
    "end": 35,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 18,
      "name": "bar",
      "start": 15,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 6,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 36,
  "generator": false,
  "id": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "argument": Node {
            "end": 26,
            "raw": "42",
            "start": 24,
            "type": "Literal",
            "value": 42,
          },
          "end": 27,
          "start": 17,
          "type": "ReturnStatement",
        },
      ],
      "end": 29,
      "start": 15,
      "type": "BlockStatement",
    },
    "end": 29,
    "expression": false,
    "generator": false,
    "id": Node {
      "end": 12,
      "name": "foo",
      "start": 9,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 30,
  "generator": false,
  "id": Node {
    "end": 12,
    "name": "foo",
    "start": 9,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse named-generator-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "async": false,
    "body": Node {
      "body": Array [
        Node {
          "end": 27,
          "expression": Node {
            "argument": Node {
              "end": 26,
              "raw": "42",
              "start": 24,
              "type": "Literal",
              "value": 42,
            },
            "delegate": false,
            "end": 26,
            "start": 18,
            "type": "YieldExpression",
          },
          "start": 18,
          "type": "ExpressionStatement",
        },
      ],
      "end": 29,
      "start": 16,
      "type": "BlockStatement",
    },
    "end": 29,
    "expression": false,
    "generator": true,
    "id": Node {
      "end": 13,
      "name": "foo",
      "start": 10,
      "type": "Identifier",
    },
    "params": Array [],
    "start": 0,
    "type": "FunctionExpression",
  },
  "data": Set {},
  "end": 30,
  "generator": false,
  "id": Node {
    "end": 13,
    "name": "foo",
    "start": 10,
    "type": "Identifier",
  },
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse object-literal.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 10,
    "properties": Array [
      Node {
        "computed": false,
        "end": 9,
        "key": Node {
          "end": 5,
          "name": "foo",
          "start": 2,
          "type": "Identifier",
        },
        "kind": "init",
        "method": false,
        "shorthand": false,
        "start": 2,
        "type": "Property",
        "value": Node {
          "end": 9,
          "raw": "42",
          "start": 7,
          "type": "Literal",
          "value": 42,
        },
      },
    ],
    "start": 1,
    "type": "ObjectExpression",
  },
  "data": Set {},
  "end": 12,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": null,
  "end": 2,
  "generator": false,
  "id": null,
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse sequence-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 7,
    "expressions": Array [
      Node {
        "end": 1,
        "raw": "1",
        "start": 0,
        "type": "Literal",
        "value": 1,
      },
      Node {
        "end": 4,
        "raw": "2",
        "start": 3,
        "type": "Literal",
        "value": 2,
      },
      Node {
        "end": 7,
        "raw": "3",
        "start": 6,
        "type": "Literal",
        "value": 3,
      },
    ],
    "start": 0,
    "type": "SequenceExpression",
  },
  "data": Set {},
  "end": 8,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse shadowed-view.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "declarations": Array [
          Node {
            "end": 11,
            "id": Node {
              "end": 7,
              "name": "x",
              "start": 6,
              "type": "Identifier",
            },
            "init": Node {
              "end": 11,
              "raw": "2",
              "start": 10,
              "type": "Literal",
              "value": 2,
            },
            "start": 6,
            "type": "VariableDeclarator",
          },
        ],
        "end": 12,
        "kind": "let",
        "start": 2,
        "type": "VariableDeclaration",
      },
      Node {
        "argument": Node {
          "end": 28,
          "id": Node {
            "end": 28,
            "name": "x",
            "start": 27,
            "type": "Identifier",
          },
          "start": 20,
          "type": "ViewExpression",
        },
        "end": 29,
        "start": 13,
        "type": "ReturnStatement",
      },
    ],
    "end": 31,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 32,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 28,
      "id": Node {
        "end": 28,
        "name": "x",
        "start": 27,
        "type": "Identifier",
      },
      "start": 20,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse simple-identifier.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 3,
    "name": "foo",
    "start": 0,
    "type": "Identifier",
  },
  "data": Set {},
  "end": 4,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 3,
      "name": "foo",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse template-literal-semicolon.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 11,
    "quasi": Node {
      "end": 11,
      "expressions": Array [],
      "quasis": Array [
        Node {
          "end": 10,
          "start": 5,
          "tail": true,
          "type": "TemplateElement",
          "value": Object {
            "cooked": "hello",
            "raw": "hello",
          },
        },
      ],
      "start": 4,
      "type": "TemplateLiteral",
    },
    "start": 0,
    "tag": Node {
      "end": 4,
      "name": "html",
      "start": 0,
      "type": "Identifier",
    },
    "type": "TaggedTemplateExpression",
  },
  "data": Set {},
  "end": 13,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 4,
      "name": "html",
      "start": 0,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse this-as-name.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 1,
    },
    "message": "Assigning to rvalue (1:0)",
    "pos": 0,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse this.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 4,
    "start": 0,
    "type": "ThisExpression",
  },
  "data": Set {},
  "end": 5,
  "generator": false,
  "id": null,
  "references": Array [],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse var-statement.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 0,
      "line": 1,
    },
    "message": "Unexpected token (1:0)",
    "pos": 0,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-argument.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 13,
      "line": 1,
    },
    "message": "Unexpected keyword 'viewof' (1:13)",
    "pos": 13,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-assignment.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 2,
      "line": 2,
    },
    "message": "Assigning to rvalue (2:2)",
    "pos": 4,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-binding.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 2,
    },
    "message": "Unexpected keyword 'viewof' (2:6)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "argument": Node {
          "arguments": Array [],
          "callee": Node {
            "computed": false,
            "end": 33,
            "object": Node {
              "end": 27,
              "name": "DOM",
              "start": 24,
              "type": "Identifier",
            },
            "property": Node {
              "end": 33,
              "name": "input",
              "start": 28,
              "type": "Identifier",
            },
            "start": 24,
            "type": "MemberExpression",
          },
          "end": 35,
          "start": 24,
          "type": "CallExpression",
        },
        "end": 36,
        "start": 17,
        "type": "ReturnStatement",
      },
    ],
    "end": 38,
    "start": 13,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 39,
  "generator": false,
  "id": Node {
    "end": 10,
    "id": Node {
      "end": 10,
      "name": "foo",
      "start": 7,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 27,
      "name": "DOM",
      "start": 24,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "arguments": Array [],
    "callee": Node {
      "computed": false,
      "end": 22,
      "object": Node {
        "end": 16,
        "name": "DOM",
        "start": 13,
        "type": "Identifier",
      },
      "property": Node {
        "end": 22,
        "name": "input",
        "start": 17,
        "type": "Identifier",
      },
      "start": 13,
      "type": "MemberExpression",
    },
    "end": 24,
    "start": 13,
    "type": "CallExpression",
  },
  "data": Set {},
  "end": 25,
  "generator": false,
  "id": Node {
    "end": 10,
    "id": Node {
      "end": 10,
      "name": "foo",
      "start": 7,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 16,
      "name": "DOM",
      "start": 13,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-internal-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "arguments": Array [],
    "callee": Node {
      "computed": false,
      "end": 36,
      "object": Node {
        "end": 30,
        "name": "DOM",
        "start": 27,
        "type": "Identifier",
      },
      "property": Node {
        "end": 36,
        "name": "range",
        "start": 31,
        "type": "Identifier",
      },
      "start": 27,
      "type": "MemberExpression",
    },
    "end": 38,
    "start": 27,
    "type": "CallExpression",
  },
  "data": Set {},
  "end": 39,
  "generator": false,
  "id": Node {
    "end": 24,
    "id": Node {
      "end": 24,
      "name": "bar",
      "start": 21,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "references": Array [
    Node {
      "end": 30,
      "name": "DOM",
      "start": 27,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-let.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 6,
      "line": 2,
    },
    "message": "Unexpected keyword 'viewof' (2:6)",
    "pos": 8,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-member-expression.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "computed": false,
    "end": 15,
    "object": Node {
      "end": 10,
      "id": Node {
        "end": 10,
        "name": "foo",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
    "property": Node {
      "end": 15,
      "name": "name",
      "start": 11,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MemberExpression",
  },
  "data": Set {},
  "end": 16,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 10,
      "id": Node {
        "end": 10,
        "name": "foo",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-member.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 14,
      "line": 1,
    },
    "message": "Unexpected token (1:14)",
    "pos": 14,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-orphan.js > must match snapshot 1`] = `
Object {
  "error": Object {
    "loc": Object {
      "column": 7,
      "line": 1,
    },
    "message": "Unexpected token (1:7)",
    "pos": 7,
    "type": "SyntaxError",
  },
}
`

exports[`test/parse-test.js TAP parse viewof-property.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 22,
    "left": Node {
      "computed": true,
      "end": 18,
      "object": Node {
        "end": 6,
        "name": "object",
        "start": 0,
        "type": "Identifier",
      },
      "property": Node {
        "end": 17,
        "id": Node {
          "end": 17,
          "name": "foo",
          "start": 14,
          "type": "Identifier",
        },
        "start": 7,
        "type": "ViewExpression",
      },
      "start": 0,
      "type": "MemberExpression",
    },
    "operator": "+",
    "right": Node {
      "end": 22,
      "raw": "2",
      "start": 21,
      "type": "Literal",
      "value": 2,
    },
    "start": 0,
    "type": "BinaryExpression",
  },
  "data": Set {},
  "end": 23,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 6,
      "name": "object",
      "start": 0,
      "type": "Identifier",
    },
    Node {
      "end": 17,
      "id": Node {
        "end": 17,
        "name": "foo",
        "start": 14,
        "type": "Identifier",
      },
      "start": 7,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-reference-internal-comment.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "end": 24,
    "id": Node {
      "end": 24,
      "name": "bar",
      "start": 21,
      "type": "Identifier",
    },
    "start": 0,
    "type": "ViewExpression",
  },
  "data": Set {},
  "end": 25,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 24,
      "id": Node {
        "end": 24,
        "name": "bar",
        "start": 21,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse viewof-reference.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "computed": false,
    "end": 20,
    "object": Node {
      "end": 12,
      "id": Node {
        "end": 12,
        "name": "input",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
    "property": Node {
      "end": 20,
      "name": "tagName",
      "start": 13,
      "type": "Identifier",
    },
    "start": 0,
    "type": "MemberExpression",
  },
  "data": Set {},
  "end": 21,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 12,
      "id": Node {
        "end": 12,
        "name": "input",
        "start": 7,
        "type": "Identifier",
      },
      "start": 0,
      "type": "ViewExpression",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-await.js > must match snapshot 1`] = `
Node {
  "async": true,
  "body": Node {
    "body": Array [
      Node {
        "end": 16,
        "expression": Node {
          "argument": Node {
            "end": 15,
            "name": "value",
            "start": 10,
            "type": "Identifier",
          },
          "delegate": false,
          "end": 15,
          "start": 4,
          "type": "YieldExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
      Node {
        "end": 33,
        "expression": Node {
          "argument": Node {
            "end": 32,
            "name": "promise",
            "start": 25,
            "type": "Identifier",
          },
          "end": 32,
          "start": 19,
          "type": "AwaitExpression",
        },
        "start": 19,
        "type": "ExpressionStatement",
      },
    ],
    "end": 35,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 36,
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 15,
      "name": "value",
      "start": 10,
      "type": "Identifier",
    },
    Node {
      "end": 32,
      "name": "promise",
      "start": 25,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-block-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "end": 16,
        "expression": Node {
          "argument": Node {
            "end": 15,
            "name": "value",
            "start": 10,
            "type": "Identifier",
          },
          "delegate": false,
          "end": 15,
          "start": 4,
          "type": "YieldExpression",
        },
        "start": 4,
        "type": "ExpressionStatement",
      },
    ],
    "end": 18,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 19,
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 15,
      "name": "value",
      "start": 10,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "argument": Node {
      "end": 11,
      "name": "value",
      "start": 6,
      "type": "Identifier",
    },
    "delegate": false,
    "end": 11,
    "start": 0,
    "type": "YieldExpression",
  },
  "data": Set {},
  "end": 12,
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 11,
      "name": "value",
      "start": 6,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-in-function.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "body": Array [
      Node {
        "async": false,
        "body": Node {
          "body": Array [
            Node {
              "end": 40,
              "expression": Node {
                "argument": Node {
                  "end": 39,
                  "name": "value",
                  "start": 34,
                  "type": "Identifier",
                },
                "delegate": false,
                "end": 39,
                "start": 28,
                "type": "YieldExpression",
              },
              "start": 28,
              "type": "ExpressionStatement",
            },
          ],
          "end": 44,
          "start": 22,
          "type": "BlockStatement",
        },
        "end": 44,
        "expression": false,
        "generator": true,
        "id": Node {
          "end": 19,
          "name": "inner",
          "start": 14,
          "type": "Identifier",
        },
        "params": Array [],
        "start": 4,
        "type": "FunctionDeclaration",
      },
    ],
    "end": 46,
    "start": 0,
    "type": "BlockStatement",
  },
  "data": Set {},
  "end": 47,
  "generator": false,
  "id": null,
  "references": Array [
    Node {
      "end": 39,
      "name": "value",
      "start": 34,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`

exports[`test/parse-test.js TAP parse yield-star-expression-cell.js > must match snapshot 1`] = `
Node {
  "async": false,
  "body": Node {
    "argument": Node {
      "end": 13,
      "name": "values",
      "start": 7,
      "type": "Identifier",
    },
    "delegate": true,
    "end": 13,
    "start": 0,
    "type": "YieldExpression",
  },
  "data": Set {},
  "end": 14,
  "generator": true,
  "id": null,
  "references": Array [
    Node {
      "end": 13,
      "name": "values",
      "start": 7,
      "type": "Identifier",
    },
  ],
  "start": 0,
  "type": "Cell",
}
`