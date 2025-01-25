// main.ts

import { Newsletter } from "./Newsletter";
import { Subscriber } from "./Subscriber";

// Create a newsletter instance
const newsletter = new Newsletter();

// Create subscribers
const subscriber1 = new Subscriber("Alice");
const subscriber2 = new Subscriber("Bob");

// Subscribing to the newsletter
newsletter.subscribe(subscriber1);
newsletter.subscribe(subscriber2);

// Publishing news
newsletter.publishNews("New TypeScript tutorial is out!");

// Unsubscribing a subscriber
newsletter.unsubscribe(subscriber1);

// Publishing another news
newsletter.publishNews("Observer Pattern explained!");
