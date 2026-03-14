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
