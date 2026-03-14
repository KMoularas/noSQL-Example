// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("analytics");

// average time spent per page
db.getCollection("clickstream").aggregate({
"$group":{
"_id": "$page",
"avg_time": {"$avg": "$time spent"}
    }
});

// Average time spent per country
db.getCollection("clickstream").aggregate({
"$group":{
"_id": "$country",
"avg_time": {"$avg": "$time spent"}
    }
});

// Average time spent per device type
db.getCollection("clickstream").aggregate({
"$group":{"_id": "$device",
"avg_time": {"$avg": "$time spent"}
    }
});

// Total time by device and by country
db.getCollection("clickstream").aggregate({
$group:{
    _id: (device:"$device",
         country:"$country"
    ),
        sum_time: {$sum: "$time spent"}
    }
});


// Min time by device and user
db.getCollection("clickstream").aggregate({
$group:{
    _id: (device:"$device",
        _id:"$user_id"
    ),
        min_time: {$min: "$time spent"}
    }
});

//only user 
db.getCollection("clickstream").find(
    {},
    {
        user_id: 1, 
        page: 1,
        _id: 0
    }
);