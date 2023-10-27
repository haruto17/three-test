const server = Bun.serve({
    port: 3000,
    
    fetch(req) {
        const url = new URL(req.url);
        if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html"))
            return new Response(Bun.file(import.meta.dir + "/index.html"));
        // all other routes
        return new Response("Hello!");
    },
});
console.log(`Listening on http://localhost:${server.port} ...`);