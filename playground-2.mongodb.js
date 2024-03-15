db.createCollection("users")

db.users.insertOne({
    name: "duvian",
    lastname: "lopez",
    email: "duvian@example.com",
    city: "medellin",
    country: "colombia",
    salary: 2500,
    age: 32,
    height: 180,
    weight: 140
});

db.users.insertOne({
    name: "andres",
    lastname: "ceballos",
    email: "andres@example.com",
    city: "cali",
    country: "colombia",
    salary: 2000,
    age: 23,
    height: 185,
    weight: 145
});

db.users.insertOne({
    name: "martin",
    lastname: "lopez",
    email: "martin@example.com",
    city: "paris",
    country: "francia",
    salary: 4000,
    age: 25,
    height: 190,
    weight: 170
});

db.users.insertOne({
    name: "emanuel",
    lastname: "ceballos",
    email: "emanuel@example.com",
    city: "londres",
    country: "inglaterra",
    salary: 1500,
    age: 30,
    height: 160,
    weight: 180
});

db.users.insertOne({
    name: "maicol",
    lastname: "nuñez",
    email: "maicol@example.com",
    city: "lima",
    country: "peru",
    salary: 2300,
    age: 34,
    height: 170,
    weight: 150
});

db.users.insertOne({
    name: "stiven",
    lastname: "jaramillo",
    email: "stiven@example.com",
    city: "new york",
    country: "united states",
    salary: 2000,
    age: 32,
    height: 160,
    weight: 140
});

db.users.insertOne({
    name: "deklan",
    lastname: "florez",
    email: "deklan@example.com",
    city: "china",
    country: "honk kong",
    salary: 3000,
    age: 25,
    height: 170,
    weight: 170
});

db.users.insertOne({
    name: "alejandro",
    lastname: "perez",
    email: "alejandro@example.com",
    city: "mexico dc",
    country: "mexico",
    salary: 2300,
    age: 24,
    height: 175,
    weight: 160
});

db.users.insertOne({
    name: "jeronimo",
    lastname: "ceballos",
    email: "jeronimo@example.com",
    city: "francia",
    country: "paris",
    salary: 2300,
    age: 18,
    height: 160,
    weight: 120
});

db.users.insertOne({
    name: "javier",
    lastname: "tuberquia",
    email: "javier@example.com",
    city: "barranquilla",
    country: "colombia",
    salary: 2200,
    age: 30,
    height: 165,
    weight: 140
});

db.users.insertOne({
    name: "ignacio",
    lastname: "perez",
    email: "ignacio@example.com",
    city: "medellin",
    country: "colombia",
    salary: 1500,
    age: 45,
    height: 155,
    weight: 120
});

db.users.insertOne({
    name: "samuel",
    lastname: "ceballos",
    email: "samuel@example.com",
    city: "bogota",
    country: "colombia",
    salary: 2000,
    age: 27,
    height: 160,
    weight: 135
});

db.users.insertOne({
    name: "henry",
    lastname: "florez",
    email: "henry@example.com",
    city: "bogota",
    country: "colombia",
    salary: 2300,
    age: 28,
    height: 178,
    weight: 160
});

db.users.insertOne({
    name: "vladimir",
    lastname: "putierrez",
    email: "vladimir@example.com",
    city: "mexico dc",
    country: "mexico",
    salary: 2300,
    age: 38,
    height: 170,
    weight: 150
});

db.users.insertOne({
    name: "david",
    lastname: "monterrosa",
    email: "david@example.com",
    city: "cali",
    country: "colombia",
    salary: 2000,
    age: 21,
    height: 170,
    weight: 140
});

db.users.insertOne({
    name: "duvan",
    lastname: "graciano",
    email: "duvan@example.com",
    city: "new york",
    country: "united states",
    salary: 2000,
    age: 27,
    height: 175,
    weight: 160
});

db.users.insertOne({
    name: "mateo",
    lastname: "garcia",
    email: "mateo@example.com",
    city: "medellin",
    country: "colombia",
    salary: 2300,
    age: 29,
    height: 168,
    weight: 156
});

db.users.insertOne({
    name: "fernando",
    lastname: "ceballos",
    email: "fernando@example.com",
    city: "cali",
    country: "colombia",
    salary: 2500,
    age: 27,
    height: 168,
    weight: 120
});

db.users.insertOne({
    name: "martina",
    lastname: "peligrosa",
    email: "martina@example.com",
    city: "barranquilla",
    country: "colombia",
    salary: 1800,
    age: 26,
    height: 160,
    weight: 120
});

db.users.insertOne({
    name: "santiago",
    lastname: "bermudez",
    email: "santiago@example.com",
    city: "barranquilla",
    country: "colombia",
    salary: 00,
    age: 32,
    height: 180,
    weight: 140
});

db.users.insertOne({
    name: "antony",
    lastname: "sepulveda",
    email: "antony@example.com",
    city: "barranquilla",
    country: "colombia",
    salary: 2400,
    age: 28,
    height: 170,
    weight: 180
});

db.users.insertOne({
    name: "wilmar",
    lastname: "florez",
    email: "wilmar@example.com",
    city: "medellin",
    country: "colombia",
    salary: 2000,
    age: 24,
    height: 174,
    weight: 140
});

db.users.insertOne({
    name: "daniel",
    lastname: "tuberquia",
    email: "daniel@example.com",
    city: "cali",
    country: "colombia",
    salary: 2600,
    age: 35,
    height: 185,
    weight: 180
});

db.users.insertOne({
    name: "tanga",
    lastname: "tangamandapio",
    city: "cali",
    country: "colombia",
    salary: 2600,
    age: 35,
    height: 185,
    weight: 180
});

db.users.insertOne({
    name: "totono",
    lastname: "totito",
    city: "cali",
    country: "colombia",
    age: 35,
    height: 185,
    weight: 180
});

//1)
db.users.find({age:{$gt: 18}});


//2)
db.users.find({city:{$in:["londres","paris"]}});


//3)
db.users.find({$and:[
    {salary: {$gt:2000}},
    {age:{$lt:30}}
]});


//4)
db.users.find(
    {
        $and:[
            {country:{$eq: "colombia"}},
            {salary:{$gt: 2500}}
        ]
    }
);

//5)
db.users.find(
    {
        $and:[
            {age: {$gt:25}},
            {age:{$lt:35}}
        ]
    }
);

//6)
db.users.find(
    {country:{$ne:"united states"}}
);

//7)
db.users.find(
    {
        $and:[
            {city:{$eq:"medellin"}},
            {salary:{$gt:2000}}
        ],
        $or:[
            {city:{$eq:"medellin"}},
            {age:{$gt:30}}
        ]
    }
);

//8)
db.users.find(
   {
    $and:[
        {country:{$eq:"mexico"}},
        {weight:{$gt:140}}
    ]
   }
);


//9)
db.users.find(
    {city:{$nin:["paris","londres"]}}
);


//10)
db.users.find(
    {
        $and:[
            {salary:{$lt:2000}},
            {age:{$gt:30}}
        ]
    }
);


//11)
db.users.find(
    {
        $and:[
            {country:{$eq:"colombia"}},
            {salary:{$gt:2500}}
        ],
        $or:[
            {country:{$eq:"colombia"}},
            {height:{$gt: 180}}
        ]
    }
);


//12)
db.users.find(
    {
        $and:[
            {city:{$eq:"medellin"}},
            {age:{$gte:20}},
            {age:{$lte:30}}
        ]
    }
);


//13)
db.users.find(
    {email:{$exists: false}}
);


//14)
db.users.find(
    {
        $and:[
            {city:{$eq:"barranquilla"}},
            {salary:{$gte:1500}},
            {salary:{$lte:2500}}
        ]
    }
);


//15)
db.users.find(
    {
            country:{$eq:"colombia"},
            $or:[
                {weight:{$lt:120}},
                {weight:{$gt:140}}
            ]   
    }
);


//16)
db.users.find(
    {
        
        $or:[
            {country:{$eq: "colombia"}},
            {country:{$eq:"mexico"}}
            ],
            age:{$lt:25}
    }
);


//17)
db.users.find(
    {
        $and:[
            {country:{$nin:["colombia","mexico"]}},
            {salary:{$lt:2500}}
        ]
    }
);


//18)
db.users.find(
    {
        $and:[
            {country:{$eq:"colombia"}},
            {salary:{$lt:2000}}
        ]
    }
);


//19)
db.users.find(
    {
        $and:[
            {country:{$ne:"colombia"}},
            {height:{$lt:170}}
        ]
    }
);


//20)
db.users.find(
    {
        $and:[
            {country:{$eq:"colombia"}},
            {salary:{$exists: false}}
        ]
    }
);