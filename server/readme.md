# Servidor

El código fuente de este componente se encuentra en la carpeta `server`, por ello para ejecutar todos los comandos relacionados a este se debe estar ubicado dentro de dicha carpeta `cd server`.

## Configuración

Para instalar las dependencias ejecute:

```
npm install
```

Para desplegar el proyecto en modo desarrollo, se debe ejecutar el comando:

```
npm run dev
```

Luego de esto el servidor se ejecutara por defecto en el puerto 5000 asi `http://localhost:5000/`

## Endpoints

### Busqueda

`http://localhost:5000/api/items?q=:query`

donde `:query` es el parametro de busqueda.

#### Consideraciones en la implementación:

- Para construir las categorias, debido a que no siempre se encuentra el filtro `category` en los filtros disponibles `available_filters` se sigue el siguiente algoritmo:

  1. Se busca el id `category` en el key de filtros aplicados `filters`, si se encuentra se devuelven las categorias presentes en el key `path_from_root` mapeadas como string.
  2. Si no se encuentra el filtro `category` en los filtros aplicados, se busca por id `category` en el key de los filtros disponibles `available_filters`.
  3. Una vez encontrado el filtro se busca la categoria que mas resultados ha obtenido, y se consulta el enpoint `https://api.mercadolibre.com/categories/:id_category` con su id.
  4. Se devuelven las categorias presentes en el key `path_from_root` de la respuesta del api a dicha solicitud.

Ejemplo de respuesta:

```json
{
  "author": {
    "name": "String",
    "lastname": "String"
  },
  "categories": ["String", "String", "String"],
  "items": [
    {
      "id": "String",
      "title": "String",
      "price": {
        "amount": "Number",
        "decimals": "String",
        "currency": "String"
      },
      "picture": "String",
      "condition": "String",
      "free_shipping": "Boolean",
      "state_name": "String"
    },
    {"..."},
    {"..."},
    {"..."},
  ]
}
```

### Detalle de producto

`http://localhost:5000/api/items/:id`

Donde `:id` es el id del producto seleccionado.

#### Consideraciones en la implementación:

- Se agregó el key `categories` en la respuesta para renderizar el breadcrum del producto en la vista detalle. Estas categorias se consultan en el endpoint de categorias con el id de la categoria asociada al producto.

- En algunos casos, al consultar el endpoint `https://api.mercadolibre.com/items/:id/description` no se encontró la descripcion del producto, aunque el detalle del producto si estaba.
  Para subsanar esta situacion y priorizando que el front siguiera renderizando la pagina de detalle sin iconveniente, se usa `Promise.allSettled` para verificar los resultados de los llamados al api de meli, asi si el status de la solicitud al enpoint de detalle (`https://api.mercadolibre.com/items/:id`) es `fullfilled` se envia una respuesta, no importa si no se encuentra una descripcion para el producto.

Ejemplo de respuesta:

```json
{
  "author": {
    "name": "String",
    "lastname": "String"
  },
  "item": {
    "id": "String",
    "title": "String",
    "price": {
      "amount": "Number",
      "decimals": "String",
      "currency": "String"
    },
    "picture": "String",
    "condition": "String",
    "free_shipping": "Boolean",
    "sold_quantity": "String",
    "description": "String"
  },
  "categories": ["String", "String", "String"]
}
```
