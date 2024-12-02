const scenes = [
  {
    //scene 0
    text: "Welcome to the internet.\n\nEvery choice you make shapes the story.\n\nProceed mindfully.",
    choices: [
      { text: "Next", nextScene: 1}
    ]
  },
//Decision 1 (starting your day) ----------------------------------------------------
  {
    //scene 1 (start dec 1)
    text: "Starting Your Day Online\n\nYou begin your digital day. Opening your eyes to the sound of notifications on your phone.\n\nWhat do you do?",
    choices: [
      { text: "Check Social Media", nextScene: 2},
      { text: "Catch Up on News", nextScene: 3},
      { text: "Play a Mobile Game", nextScene: 4}
    ]
  },
  {
    //scene 2 (sm pt 1)
    text: "You scroll through your feed, liking posts and skimming through comments.\n\nYou stumble upon one that catches your eye. Your friend has posted something rather vulnerable.",
    choices: [
      { text: "Comment with support", nextScene: 5},
      { text: "Ignore and keep scrolling", nextScene: 6}
    ]
  },
  {
    //scene 3 (news pt 1)
    text: "A headline about a controversial topic catches your eye.",
    choices: [
      { text: "Share without reading", nextScene: 7},
      { text: "Read and fact-check first", nextScene: 8}
    ]
  },
  {
    //scene 4 (game pt 1)
    text: "You log into a casual game that requires connecting to your social media.",
    choices: [
      { text: "Enable social media sharing", nextScene: 9},
      { text: "Decline", nextScene: 10}
    ]
  },
  {
    //scene 5 (sm pt 2 support)
    text: "You comment with support and your friend replies, thanking you. You feel good but more comments mean more engagement.\n\nSoon you notice trolls starting to comment on their post as well. At least you left your thoughts though.",
    choices: [
      { text: "Next", nextScene: 11}
    ]
  },
  {
    //scene 6 (sm pt 2 ignore)
    text: "The post disappears into the ether and leaves your mind as you see more content coming into view.\n\nLater, the friend texts you, feeling unseen. They thought they could rely on you. Guess not.",
    choices: [
      { text: "Next", nextScene: 11}
    ]
  },
  {
    //scene 7 (news pt 2 share)
    text: "The headline spreads quickly, but comments later reveal the story was misleading.\n\nSo much for being reliable and helpful.",
    choices: [
      { text: "Next", nextScene: 11}
    ]
  },
  {
    //scene 8 (news pt 2 read)
    text: "You realize the article is clickbait and decide not to share, feeling responsible.\n\nAnd now you know how unreliable some sources can be.",
    choices: [
      { text: "Next", nextScene: 11}
    ]
  },
  {
    //scene 9 (game pt 2 enable)
    text: "Your activity is shared with friends, and you gain bonus points. \n\nBut soon, ads start appearing everywhere which makes you hate the game, but also not want to stop. Now it consumes your thoughts more often than you’d like.",
    choices: [
      { text: "Next", nextScene: 11}
    ]
  },
  {
    //scene 10 (game pt 2 decline)
    text: "The game offers fewer features, but you avoid excessive data sharing.\n\nIt’s a risk worth taking, I mean at least you still get to play.",
    choices: [
      { text: "Next", nextScene: 11}
    ]
  },
//Decision 2 (online communities) ----------------------------------------------------
  {
    //scene 11 (start dec 2)
    text: "Later, you decide to engage with a community forum. A topic sparks a heated debate.\n\nWhat do you do?",
    choices: [
      { text: "Join the Discussion", nextScene: 12},
      { text: "Stay Silent", nextScene: 15}
    ]
  },
  {
    //scene 12 (enter debate pt 1)
    text: "You decide to enter the debate.",
    choices: [
      { text: "Post a passionate comment", nextScene: 13},
      { text: "Stay neutral", nextScene: 14}
    ]
  },
  {
    //scene 13 (enter debate pt 2 passionate)
    text: "Your comment gains attention, both positive and negative.\n\nBut negative ones catch your eye much more. Replies pile up and it gets overwhelming fast.",
    choices: [
      { text: "Next", nextScene: 18}
    ]
  },
  {
    //scene 14 (enter debate pt 2 neutral)
    text: "You decide to enter the debate.\n\nYour comment is overlooked, but the argument escalates anyway. Your bit of effort, all for nothing.",
    choices: [
      { text: "Next", nextScene: 18}
    ]
  },
  {
    //scene 15 (silent pt 1)
    text: "You watch the debate unfold, remaining an observer.",
    choices: [
      { text: "Upvote/like comments you agree with", nextScene: 16},
      { text: "Do nothing", nextScene: 17}
    ]
  },
  {
    //scene 16 (silent pt 2 upvote)
    text: "Your likes amplify voices in the debate, subtly steering its tone.\n\nIt was just one of many things going on in the world, but you take this as a minor victory.",
    choices: [
      { text: "Next", nextScene: 18}
    ]
  },
  {
    //scene 17 (silent pt 2 nothing)
    text: "The thread spirals into chaos with clashing sides arguing like life or death.\n\nYou wonder if you could have made a difference. But alas, it’s moved too far now.",
    choices: [
      { text: "Next", nextScene: 18}
    ]
  },
//Decision 3 (sharing content) ----------------------------------------------------
  {
    //scene 18 (start dec 3)
    text: "You’re bored for a second before inspiration hits you to create or share something—a blog post, a meme, or a personal story even.\n\nWhat do you do?",
    choices: [
      { text: "Post Something Lighthearted", nextScene: 19},
      { text: "Share a Vulnerable Story", nextScene: 22},
      { text: "Don’t Post Anything", nextScene: 25}
    ]
  },
  {
    //scene 19 (meme pt 1)
    text: "A funny meme gains traction, spreading quickly.",
    choices: [
      { text: "Respond to comments", nextScene: 20},
      { text: "Leave it alone", nextScene: 21}
    ]
  },
  {
    //scene 20 (meme pt 2 respond)
    text: "Engaging in the comments slowly increases visibility. \n\nBut with more eyes leaves more types of people seeing the same thing and some replies turn nasty fast.",
    choices: [
      { text: "Next", nextScene: 26}
    ]
  },
  {
    //scene 21 (meme pt 2 leave it)
    text: "The meme is reshared without context, misinterpreted in some circles.\n\nThis wasn’t your doing of course. You did nothing to cause it of course.",
    choices: [
      { text: "Next", nextScene: 26}
    ]
  },
  {
    //scene 22 (struggle pt 1)
    text: "You post about a personal struggle.",
    choices: [
      { text: "Keep it public", nextScene: 23},
      { text: "Limit it to friends", nextScene: 24}
    ]
  },
  {
    //scene 23 (struggle pt 2 public)
    text: "Supportive comments roll in, and you feel more confident.\n\nBut with more engagement, more trolls emerge too. Leaving your confidence dropping faster than expected.",
    choices: [
      { text: "Next", nextScene: 26}
    ]
  },
  {
    //scene 24 (struggle pt 2 private)
    text: "It feels safe, but the impact is limited to your circle.\n\nYou struggled with this, maybe someone else needed to hear this too.\n\nBut, it’s too late to reconsider now that it’s out.",
    choices: [
      { text: "Next", nextScene: 26}
    ]
  },
  {
    //scene 25 (dont post pt 1)
    text: "You draft a post but delete it.\n\nYou feel disconnected, wondering what others might have thought. But this was safer.",
    choices: [
      { text: "Next", nextScene: 26}
    ]
  },
//Decision 4 (crisis) ----------------------------------------------------
  {
    //scene 26 (dec 4 start)
    text: "Some time passes before your phone starts blowing up.\n\nA heated argument erupts involving people you know in a group chat.\n\nWhat do you do?",
    choices: [
      { text: "Take Action", nextScene: 27},
      { text: "Stay Out of It", nextScene: 30}
    ]
  },
  {
    //scene 27 (action pt 1) 
    text: "You step in to clarify or maybe at least de-escalate things.",
    choices: [
      { text: "Message people privately", nextScene: 28},
      { text: "Publicly post a correction", nextScene: 29}
    ]
  },
  {
    //scene 28 (action pt 2 private)
    text: "Conversations stay civil, but not everyone sees your effort.\n\nBut at least you tried and kept it private, letting only each person know their own private conversation with you.",
    choices: [
      { text: "Next", nextScene: 33}
    ]
  },
  {
    //scene 29 (action pt 2 public)
    text: "The message gains attention, but not everyone agrees with your take.\n\nUnfortunately, now the split is clear between who’s on whose side.",
    choices: [
      { text: "Next", nextScene: 33}
    ]
  },
  {
    //scene 30 (ignore pt 1) 
    text: "You avoid the situation entirely.",
    choices: [
      { text: "Mute the conversation", nextScene: 31},
      { text: "Keep watching silently", nextScene: 32}
    ]
  },
  {
    //scene 31 (ignore pt 2 mute)
    text: "The situation fades from view, but you feel disconnected.\n\nWell you weren’t involved before so I guess there's no reason to think more on it.",
    choices: [
      { text: "Next", nextScene: 33}
    ]
  },
  {
    //scene 32 (ignore pt 2 watch)
    text: "You see the fallout, feeling powerless to intervene.\n\nIt’s too late now. You had your chance. Now it’s up to how it all ends.",
    choices: [
      { text: "Next", nextScene: 33}
    ]
  },
//Decision 5 (facing the consequences) ----------------------------------------------------
  {
    //scene 33 (dec 5 start)
    text: "Your actions (or lack thereof) come to light—whether through direct feedback, algorithmic patterns, or broader societal consequences.\n\nWhat would YOU like to do?",
    choices: [
      { text: "Reflect on Your Choices", nextScene: 34},
      { text: "Dismiss It All.", nextScene: 35}
    ]
  },
  {
    //scene 34 (reflect)
    text: "Reflecting on your actions, you wonder how your choices have shaped your day. How did your decisions contribute to the larger picture?\n\nWas there anything you could've done differently?\n\nWas there anything you WOULD'VE done differently? Maybe in another timeline.",
    choices: [
      { text: "Next", nextScene: 36}
    ]
  },
  {
    //scene 35 (dismiss)
    text: "Fine, it’s all been YOUR choice anyways.",
    choices: [
      { text: "Next", nextScene: 36}
    ]
  },
//Ending ----------------------------------------------------
  {
    //scene 36 (ending start)
    text: "You’ve spent all your time on your device. Minutes turning to hours.\n\nYour choices felt personal, but they were never isolated.\n\nEvery click, every share, every post adds to the web we all inhabit.\n\nIn the end, we shape the internet as much as it shapes us.\n\n\nWhat will you do with that power?",
    choices: [
      { text: "Replay", nextScene: 0},
      { text: "Leave", nextScene: 37}
    ]
  },
  {
    //scene 37
    text: "Goodbye.",
    choices: [
      { text: "Bye", nextScene: 38}
    ]
  }
];


let currentIndex = 0;

function typeWriterEffect(element, text, callback) {
  let i = 0;
  const interval = 50; 
  element.innerHTML = ""; 

  // Create cursor element
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  element.appendChild(cursor);

  const typingInterval = setInterval(() => {
    if (i < text.length) {
      // Append next character or interpret as HTML if the tag ends
      if (text.substring(i, i + 4) === "<br>") {
        element.innerHTML += "<br>";
        i += 4;
      } else {
        element.innerHTML += text.charAt(i);
        i++;
      }
    } else {
      clearInterval(typingInterval);
      cursor.style.opacity = 0; 
      if (callback) callback();
    }
  }, interval);
}

function renderScene() {
  const container = document.getElementById("story-container");
  container.innerHTML = ""; 

  const scene = scenes[currentIndex];
  const text = document.createElement("p");
  text.className = "typing"; 
  container.appendChild(text);

  const contextText = scene.text.replace(/\n/g, "<br>");

  typeWriterEffect(text, contextText, () => {
    if (scene.choices) {
      const choices = document.createElement("div");
      choices.className = "choices";

      scene.choices.forEach((choice) => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
          currentIndex = choice.nextScene;
          renderScene(); 
        };
        choices.appendChild(button);
      });

      container.appendChild(choices);
    }
  });
}

renderScene();


//particle effect for bg
const particleCount = 16; 
const container = document.getElementById('particle-container');

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');

  const x = Math.random() * 100; 
  const y = Math.random() * 100;

  //random animation duration and delay
  const duration = 3 + Math.random() * 5; 
  const delay = Math.random() * 5; 

  particle.style.top = `${y}%`;
  particle.style.left = `${x}%`;
  particle.style.animationDuration = `${duration}s`;
  particle.style.animationDelay = `${delay}s`;

  container.appendChild(particle);
}
