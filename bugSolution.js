```javascript
// Correct use of $inc operator in MongoDB update
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890abcdef12345678")}, {"$inc": {"count": 1}});
```