export default {
  async fetch(request, env, ctx) {
    return new Response(JSON.stringify({ message: "Hello from HerWaypoint Worker!" }), {
      headers: { "Content-Type": "application/json" },
    });
  },
};
