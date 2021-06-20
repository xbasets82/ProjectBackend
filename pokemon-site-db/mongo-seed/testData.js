
//primera generacion

var generation = {
    name: "primera generación",
    year: 1996,
    region: "Kanto",
    numberOfPokemon: 151,
    createdAt: ISODate(),
    updatedAt: ISODate(),
  }

var generationID = db.generations.insertOne(generation)


//fuego

var elementaltype = 
    {
        name: "fuego",
        createdAt: ISODate(),
        updatedAt: ISODate(),
    }

var elementaltypeID = db.elementaltypes.insertOne(elementaltype)

//pokemons

var pokemontype =
    {
        name:"Charizard",
        code: 6,
        createdAt: ISODate(),
        updatedAt: ISODate(),
        elementalTypeID :`${elementaltypeID.insertedId}`,
        generationID :`${generationID.insertedId}`,
        evolutionPokemonTypeID:null,

    }; 
var pokemonID = db.pokemontypes.insertOne(pokemontype);


var pokemontype =
    {
        name:"Charmeleon",
        code: 5,
        createdAt: ISODate(),
        updatedAt: ISODate(),
        elementalTypeID :`${elementaltypeID.insertedId}`,
        generationID :`${generationID.insertedId}`,
        evolutionPokemonTypeID:`${pokemonID.insertedId}`,
    }; 
    pokemonID = db.pokemontypes.insertOne(pokemontype);

    var pokemontype =
    {
        name:"Charmander",
        code: 4,
        createdAt: ISODate(),
        updatedAt: ISODate(),
        elementalTypeID :`${elementaltypeID.insertedId}`,
        generationID :`${generationID.insertedId}`,
        evolutionPokemonTypeID:`${pokemonID.insertedId}`,
    }; 
    pokemonID = db.pokemontypes.insertOne(pokemontype);

//agua 

var elementaltype = 
    {
        name: "agua",
        createdAt: ISODate(),
        updatedAt: ISODate(),
    }

 elementaltypeID = db.elementaltypes.insertOne(elementaltype)




var pokemontype =
    {
        name:"Venusaur",
        code: 3,
        createdAt: ISODate(),
        updatedAt: ISODate(),
        elementalTypeID :`${elementaltypeID.insertedId}`,
        generationID :`${generationID.insertedId}`,
        evolutionPokemonTypeID:null,

    }; 
var pokemonID = db.pokemontypes.insertOne(pokemontype);


var pokemontype =
    {
        name:"Ivisaur",
        code: 2,
        createdAt: ISODate(),
        updatedAt: ISODate(),
        elementalTypeID :`${elementaltypeID.insertedId}`,
        generationID :`${generationID.insertedId}`,
        evolutionPokemonTypeID:`${pokemonID.insertedId}`,
    }; 
    pokemonID = db.pokemontypes.insertOne(pokemontype);

    var pokemontype =
    {
        name:"Bulbasaur",
        code: 3,
        createdAt: ISODate(),
        updatedAt: ISODate(),
        elementalTypeID :`${elementaltypeID.insertedId}`,
        generationID :`${generationID.insertedId}`,
        evolutionPokemonTypeID:`${pokemonID.insertedId}`,
    }; 
    pokemonID = db.pokemontypes.insertOne(pokemontype);