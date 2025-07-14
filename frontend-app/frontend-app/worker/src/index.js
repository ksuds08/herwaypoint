export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/hosts") {
      const { results } = await env.DB.prepare("SELECT * FROM hosts LIMIT 10").all();
      return Response.json(results);
    }

    return new Response(JSON.stringify({ message: "Hello from HerWaypoint Worker!" }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
