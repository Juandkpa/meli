# Cliente

El código fuente de este componente se encuentra en la carpeta front, por ello para ejecutar todos los comandos relacionados a este se debe estar ubicado dentro de dicha carpeta `cd front`.

## Configuración

Este proyecto fue inicializado con [Create React App](https://github.com/facebook/create-react-app).

Para instalar las dependencias ejecute:

```
npm install
```

Para desplegar el proyecto en modo desarrollo, se debe ejecutar el comando:

```
npm run start
```

Esto desplegará el cliente en la url `http://localhost:3000/`

Este componente hace uso de variables de entorno para algunas configuraciones, se debe copiar y reemplazar el archivo `.env.example` en su propio archivo de variables de ambiente `.env` y reemplazar la variable `REACT_APP_SERVER_ENDPOINT` por la url donde se tenga desplegado el server.

Si el server esta desplegado en el puerto configurado por defecto entonces su archivo de variables de entorno local debe ser algo como:

```
ESLINT_NO_DEV_ERRORS=true
SASS_PATH=src/assets/styles

REACT_APP_SERVER_ENDPOINT=http://localhost:5000
```
