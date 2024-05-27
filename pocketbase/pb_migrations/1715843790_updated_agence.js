/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnafxaqnzw5qefb")

  collection.name = "maisons"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnafxaqnzw5qefb")

  collection.name = "agence"

  return dao.saveCollection(collection)
})
