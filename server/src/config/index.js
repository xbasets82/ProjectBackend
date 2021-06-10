module.exports = {
    port: 4321,
    database:{
        user:'admin',
        password:'pikachu',
        port:27017,
        host:'localhost',
        db:'pokemonsite',
    },
    mongoUrl(){
        const{user,password,port,host,db} = this.database;
        return `mongodb://${user}:${password}@${host}:${port}/${db}?authSource=admin`; 
    }

}