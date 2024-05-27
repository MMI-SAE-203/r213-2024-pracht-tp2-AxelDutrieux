/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnafxaqnzw5qefb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ieghr0ig",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "oyr377c6gtn8ks4",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnafxaqnzw5qefb")

  // remove
  collection.schema.removeField("ieghr0ig")

  return dao.saveCollection(collection)
})
