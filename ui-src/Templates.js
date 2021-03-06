import silly8s from './public/silly8s.png';
import tenforten from './public/tenforten.png';
import actionboard from './public/actionboard.png';
import brainwriting from './public/brainwriting.png';
import sailboat from './public/sailboat.png';
import pomodoro from './public/pomodoro.png';

const templates = [
  {
    templateName: '🎱 Silly 8s',
    templateCategory: 'Exercise',
    id: 1,
    imageURL: silly8s,
    docsURL:
      'https://figjenda.notion.site/Silly-8s-e4e019788d68437cb4ac1e776c261a8e',
    items: [
      { id: 1, name: '1/8', emoji: '🎱', time: 60, editing: false },
      { id: 2, name: '2/8', emoji: '🎱', time: 60, editing: false },
      { id: 3, name: '3/8', emoji: '🎱', time: 60, editing: false },
      { id: 4, name: '4/8', emoji: '🎱', time: 60, editing: false },
      { id: 5, name: '5/8', emoji: '🎱', time: 60, editing: false },
      { id: 6, name: '6/8', emoji: '🎱', time: 60, editing: false },
      { id: 7, name: '7/8', emoji: '🎱', time: 60, editing: false },
      { id: 8, name: '8/8', emoji: '🎱', time: 60, editing: false },
    ],
  },
  {
    templateName: '⛵️ Sailboat exercise',
    templateCategory: 'Exercise',
    id: 2,
    imageURL: sailboat,
    docsURL:
      'https://figjenda.notion.site/Sailboat-exercise-7c046f420b194db9b8e4bec21df52cd5',
    items: [
      {
        id: 1,
        name: "(1/2) What's moving us forward?",
        emoji: '⛵️',
        time: 180,
        editing: false,
      },
      {
        id: 2,
        name: "(2/2) What's moving us forward?",
        emoji: '⛵️',
        time: 420,
        editing: false,
      },
      {
        id: 3,
        name: "(1/2) What's holding us back?",
        emoji: '⚓️',
        time: 480,
        editing: false,
      },
      {
        id: 4,
        name: "(2/2) What's holding us back?",
        emoji: '⚓️',
        time: 120,
        editing: false,
      },
      {
        id: 5,
        name: 'Categorize issues',
        emoji: '📊',
        time: 600,
        editing: false,
      },
    ],
  },
  {
    templateName: '🍅 Pomodoro',
    templateCategory: 'Exercise',
    id: 3,
    imageURL: pomodoro,
    docsURL:
      'https://figjenda.notion.site/Silly-8s-e4e019788d68437cb4ac1e776c261a8e',
    items: [
      { id: 1, name: 'Focus', emoji: '⚡️', time: 1500, editing: false },
      { id: 2, name: 'Short break', emoji: '☕️', time: 300, editing: false },
      { id: 3, name: 'Focus', emoji: '⚡️', time: 1500, editing: false },
      { id: 4, name: 'Short break', emoji: '☕️', time: 300, editing: false },
      { id: 5, name: 'Focus', emoji: '⚡️', time: 1500, editing: false },
      { id: 6, name: 'Short break', emoji: '☕️', time: 300, editing: false },
      { id: 7, name: 'Focus', emoji: '⚡️', time: 1500, editing: false },
      { id: 8, name: 'Long break', emoji: '☕️', time: 900, editing: false },
    ],
  },
  {
    templateName: '⏳ 10 for 10',
    templateCategory: 'Exercise',
    id: 4,
    imageURL: tenforten,
    docsURL:
      'https://figjenda.notion.site/10-for-10-c30fb02dce1b4b71b4704da0c48f17fe',
    items: [
      {
        id: 1,
        name: 'Generate',
        emoji: '💡',
        time: 300,
        editing: false,
      },
      {
        id: 2,
        name: 'Curate',
        emoji: '✴️',
        time: 60,
        editing: false,
      },
      { id: 3, name: 'Vote', emoji: '☑️', time: 180, editing: false },
      { id: 4, name: 'Arrange', emoji: '📊', time: 60, editing: false },
    ],
  },
  {
    templateName: '🧠 Brainwriting',
    templateCategory: 'Exercise',
    id: 5,
    imageURL: brainwriting,
    docsURL:
      'https://figjenda.notion.site/Brainwriting-d5eb6cf5c7ca43e5aecafad056a5a5f9',
    items: [
      {
        id: 1,
        name: 'Ideate',
        emoji: '💡',
        time: 60,
        editing: false,
      },
      {
        id: 2,
        name: "Build on other's ideas",
        emoji: '↘️',
        time: 60,
        editing: false,
      },
      {
        id: 3,
        name: "Build on other's ideas",
        emoji: '↘️',
        time: 60,
        editing: false,
      },
      {
        id: 4,
        name: "Build on other's ideas",
        emoji: '↘️',
        time: 60,
        editing: false,
      },
      {
        id: 5,
        name: "Build on other's ideas",
        emoji: '↘️',
        time: 60,
        editing: false,
      },
    ],
  },
  {
    templateName: '💫 Action board',
    templateCategory: 'Exercise',
    id: 6,
    imageURL: actionboard,
    docsURL:
      'https://figjenda.notion.site/Action-board-80486ac23e33465095984fca833674d7',
    items: [
      {
        id: 1,
        name: 'Add solutions / ideas',
        emoji: '➕',
        time: 600,
        editing: false,
      },
      {
        id: 2,
        name: 'Turn ideas into actions',
        emoji: '⚡️',
        time: 300,
        editing: false,
      },
      {
        id: 3,
        name: 'Document and assign tasks',
        emoji: '🚀',
        time: 300,
        editing: false,
      },
      {
        id: 4,
        name: 'High fives',
        emoji: '🙏',
        time: 60,
        editing: false,
      },
    ],
  },
];

export default templates;
