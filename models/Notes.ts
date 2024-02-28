import { colours } from "./Colors";
export interface Note {
    id: string;
    title: string;
    content: string;
    timestamp: Date;
    color: string;
}
 export const notes: Note[] = [
    {
        id: "1",
        title: "Meeting Notes",
        content: "Discuss project updates and timelines.",
        timestamp: new Date("2024-02-27T10:00:00Z"),
        color: colours[0],
      },
      {
        id: "2",
        title: "Shopping List",
        content: "Milk, eggs, bread, and fruits.",
        timestamp: new Date("2024-02-27T12:30:00Z"),
        color: colours[1],
      },
      {
        id: "3",
        title: "Travel Plans",
        content: "Book flights and accommodation for the upcoming trip.",
        timestamp: new Date("2024-02-28T15:20:00Z"),
        color: colours[3],
      },
      {
        id: "4",
        title: "Fitness Goals",
        content: "Plan workout routines and set achievable fitness goals.",
        timestamp: new Date("2024-02-28T18:00:00Z"),
        color: colours[4],
      },
      {
        id: "5",
        title: "Recipe Ideas",
        content: "Explore new recipes for dinner and try cooking them.",
        timestamp: new Date("2024-02-29T09:45:00Z"),
        color: colours[5],
      },
      {
        id: "6",
        title: "Gardening Tips",
        content: "Research and implement new gardening techniques.",
        timestamp: new Date("2024-02-29T14:30:00Z"),
        color: colours[6],
      },
      {
        id: "7",
        title: "Tech Gadgets",
        content: "Check out the latest tech gadgets and reviews.",
        timestamp: new Date("2024-03-01T11:15:00Z"),
        color: colours[7],
      },
  ];
  
