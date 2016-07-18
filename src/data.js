const data = {
  highlightedParagraph: 1, // UI state
  article: {
    id: 1,
    title: "Location-based Pokemon",
  },
  paragraphs: [
    {
      id: 1,
      content: "Are you familiar with Pokémon? It’s a game based on capturing and collecting pets from around the world. Now, imagine if these animals were mapped onto our actual surroundings — playing on the beach, you could find a sea dragon; exploring the arctic tundra, you’d find a snow wolf. My friends and I are basically re-creating Pokémon… but in real life!",
      article_id: 1
    },
    {
      id: 2,
      content: "I pitched this premise thousands of times in 2010 for a Pokémon-inspired, location-based, iOS game - Geomon. We raised venture capital money, launched the game, and built out a strong global community discovering and capturing virtual monsters in our everyday surroundings.",
      article_id: 1
    },
    {
      id: 3,
      content: "It also happens to be the premise for Pokémon Go, a viral game that has taken the world by storm, reaching #1 in both App Stores in the first 24 hours. My co-founders and I spent years deliberating on how to bring Pokémon to the real world. We faced hard decisions on how to balance the players’ immersion in such a reality with the mechanics and storytelling genius of the original games. Ever since Niantic announced the development of Pokémon Go, I’ve been curious how they would tackle some of these same challenges we faced; they also had to live up to the expectations set by bringing forth a new chapter to one of the world’s most beloved set of characters. Having spent the past few days capturing over 100 Pidgeys, a dozen Eevees, and an extra-large Arcanine, I wanted to share initial reactions, upcoming obstacles, and how I think the game could evolve from here.",
      article_id: 1
    }
  ],
  comments: [
    {
      id: 1,
      username: "Monica",
      email: "monica.olinescu@gmail.com",
      body: "Yes, I am familiar with it.",
      paragraph_id: 1
    },
    {
      id: 2,
      username: "Khurram",
      email: "kvirani@gmail.com",
      body: "Red for the win!",
      paragraph_id: 1
    },
    {
      id: 3,
      username: "Khurram",
      email: "kvirani@gmail.com",
      body: "Something else",
      paragraph_id: 1
    }
  ]
}

export default data;
