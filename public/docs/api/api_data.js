define({ "api": [
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Controller.php",
    "groupTitle": "User"
  },
  {
    "description": "<p>Cria um usuário.</p>",
    "type": "post",
    "url": "/api/v1/users",
    "title": "Create",
    "version": "1.0.0",
    "name": "Create_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha em texto pleno</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/V1/RolesController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto contendo a entidade criada ou atualizada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Cria um usuário.</p>",
    "type": "post",
    "url": "/api/v1/users",
    "title": "Create",
    "version": "1.0.0",
    "name": "Create_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha em texto pleno</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/V1/UsersController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto contendo a entidade criada ou atualizada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Cria um usuário.</p>",
    "type": "post",
    "url": "/api/v1/users",
    "title": "Create",
    "version": "1.0.0",
    "name": "Create_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha em texto pleno</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/V1/PermissionsController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto contendo a entidade criada ou atualizada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Deleta um usuário. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "delete",
    "url": "/api/v1/users/:id",
    "title": "Delete",
    "version": "1.0.0",
    "name": "Delete_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/RolesController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Boolean indicando o sucesso ou falha da operação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Deleta um usuário. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "delete",
    "url": "/api/v1/users/:id",
    "title": "Delete",
    "version": "1.0.0",
    "name": "Delete_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/UsersController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Boolean indicando o sucesso ou falha da operação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Deleta um usuário. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "delete",
    "url": "/api/v1/users/:id",
    "title": "Delete",
    "version": "1.0.0",
    "name": "Delete_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/PermissionsController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Boolean indicando o sucesso ou falha da operação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Obtem um usuário específico. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "get",
    "url": "/api/v1/users/:id",
    "title": "Get",
    "version": "1.0.0",
    "name": "Get_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/RolesController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Boolean indicando o sucesso ou falha da operação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Obtem um usuário específico. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "get",
    "url": "/api/v1/users/:id",
    "title": "Get",
    "version": "1.0.0",
    "name": "Get_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/UsersController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Boolean indicando o sucesso ou falha da operação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Obtem um usuário específico. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "get",
    "url": "/api/v1/users/:id",
    "title": "Get",
    "version": "1.0.0",
    "name": "Get_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/PermissionsController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "data",
            "description": "<p>Boolean indicando o sucesso ou falha da operação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Lista os usuários com paginação de resultados.</p>",
    "type": "get",
    "url": "/api/v1/users",
    "title": "List",
    "version": "1.0.0",
    "name": "List_Users",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/PermissionsController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "perPage",
            "description": "<p>Total de registros por página (opcional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página desejada (opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n        \"data\": [{\n            \"property\": \"Value\",\n        }, {\n            \"property\": \"Value\",\n        }],\n        \"paging\": {\n            \"total\": 3,\n            \"perPage\": 15,\n            \"currentPage\": 1,\n            \"lastPage\": 1,\n            \"from\": 1,\n            \"to\": 3,\n            \"previous\": null,\n            \"next\": null\n        },\n        \"message\": \"OK.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status da api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array contendo os objetos retornados.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "paging",
            "description": "<p>Metadados sobre o estado da paginação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Lista os usuários com paginação de resultados.</p>",
    "type": "get",
    "url": "/api/v1/users",
    "title": "List",
    "version": "1.0.0",
    "name": "List_Users",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/RolesController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "perPage",
            "description": "<p>Total de registros por página (opcional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página desejada (opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n        \"data\": [{\n            \"property\": \"Value\",\n        }, {\n            \"property\": \"Value\",\n        }],\n        \"paging\": {\n            \"total\": 3,\n            \"perPage\": 15,\n            \"currentPage\": 1,\n            \"lastPage\": 1,\n            \"from\": 1,\n            \"to\": 3,\n            \"previous\": null,\n            \"next\": null\n        },\n        \"message\": \"OK.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status da api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array contendo os objetos retornados.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "paging",
            "description": "<p>Metadados sobre o estado da paginação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Lista os usuários com paginação de resultados.</p>",
    "type": "get",
    "url": "/api/v1/users",
    "title": "List",
    "version": "1.0.0",
    "name": "List_Users",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users"
      }
    ],
    "filename": "app/Http/Controllers/Api/V1/UsersController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "perPage",
            "description": "<p>Total de registros por página (opcional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>Página desejada (opcional)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"status\": \"success\",\n        \"data\": [{\n            \"property\": \"Value\",\n        }, {\n            \"property\": \"Value\",\n        }],\n        \"paging\": {\n            \"total\": 3,\n            \"perPage\": 15,\n            \"currentPage\": 1,\n            \"lastPage\": 1,\n            \"from\": 1,\n            \"to\": 3,\n            \"previous\": null,\n            \"next\": null\n        },\n        \"message\": \"OK.\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status da api.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>Array contendo os objetos retornados.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "paging",
            "description": "<p>Metadados sobre o estado da paginação</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Atualiza os dados de um usuário. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "put",
    "url": "/api/v1/users/:id",
    "title": "Update",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha em texto pleno</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/V1/RolesController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto contendo a entidade criada ou atualizada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Atualiza os dados de um usuário. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "put",
    "url": "/api/v1/users/:id",
    "title": "Update",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha em texto pleno</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/V1/UsersController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto contendo a entidade criada ou atualizada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  },
  {
    "description": "<p>Atualiza os dados de um usuário. O identificador do usuário deve ser passado na url no local indicado <strong>:id</strong></p>",
    "type": "put",
    "url": "/api/v1/users/:id",
    "title": "Update",
    "version": "1.0.0",
    "name": "Update_User",
    "group": "Users",
    "sampleRequest": [
      {
        "url": "/api/v1/users/:id"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome do Usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email do usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha em texto pleno</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/V1/PermissionsController.php",
    "groupTitle": "Users",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer Token. Ex.: &quot;Bearer: TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ&quot;</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Status retornado.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Objeto contendo a entidade criada ou atualizada.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensagem.</p>"
          }
        ]
      }
    }
  }
] });
