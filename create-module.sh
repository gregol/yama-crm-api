#!/bin/bash

echo "Enter the name of the module (e.g. 'leads', 'proposals'):"
read moduleName

mkdir "src/modules/${moduleName}"
mkdir "src/modules/${moduleName}/entities"
mkdir "src/modules/${moduleName}/useCases"
mkdir "src/modules/${moduleName}/interfaces"
mkdir "src/modules/${moduleName}/interfaces/graphql"
mkdir "src/modules/${moduleName}/interfaces/http"
mkdir "src/modules/${moduleName}/interfaces/persistence"

touch "src/modules/${moduleName}/entities/${moduleName}.ts"
touch "src/modules/${moduleName}/useCases/create${moduleName}.ts"
touch "src/modules/${moduleName}/useCases/update${moduleName}.ts"
touch "src/modules/${moduleName}/useCases/delete${moduleName}.ts"
touch "src/modules/${moduleName}/useCases/get${moduleName}.ts"
touch "src/modules/${moduleName}/interfaces/graphql/resolvers.ts"
touch "src/modules/${moduleName}/interfaces/graphql/schema.graphql"
touch "src/modules/${moduleName}/interfaces/http/server.ts"
touch "src/modules/${moduleName}/interfaces/persistence/${moduleName}Model.ts"
touch "src/modules/${moduleName}/interfaces/persistence/index.ts"
touch "src/modules/${moduleName}/interfaces/index.ts"
touch "src/modules/${moduleName}/${moduleName}Service.ts"
touch "src/modules/${moduleName}/index.ts"

echo "Module ${moduleName} created successfully."
