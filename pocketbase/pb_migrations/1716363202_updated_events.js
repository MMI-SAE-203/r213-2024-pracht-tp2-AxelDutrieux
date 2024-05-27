/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spuj5pdu7jj9c6y")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wmj3qdyv",
    "name": "artist",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "9nz76s7msj2fwko",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("spuj5pdu7jj9c6y")

  // remove
  collection.schema.removeField("wmj3qdyv")

  return dao.saveCollection(collection)
})
