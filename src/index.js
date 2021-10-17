const fastify =  require("fastify")({
    logger:true
});
const productRoutes = require("./routes/product.routes");

require("./util/mongoose")

fastify.get("/", (req, replay)=>{
    replay.send({hello:"word...!"});
})

productRoutes.forEach((routes) => {
    fastify.route(routes);
})

const start = async()=>{
    await fastify.listen(3000);
    fastify.on.log.info(`server listening on ${fastify.server.address().port}`);
};

start();