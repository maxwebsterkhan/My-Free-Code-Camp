// Setup
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
        "tracks": [],
    },
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
    var record = collection[id]
    if (prop === "tracks" && record["tracks"] == undefined) {
        record[prop] = [];
    }
    if (value === "") {
        return collection;
    }
    if (prop !== "tracks") {
        record[prop] = value;
    } else if (prop == "tracks" && value !== "") {
        record[prop].push(value);
    }




    return collection;

}
// Alter values below to test your code
updateRecords(5439, "artist", "Abba");
updateRecords(5439, "tracks", "gold");
updateRecords(5439, "tracks", "silver");
console.log(collection)

