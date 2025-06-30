import RecipeBook from "../assets/RecipeBook.jpg";
import ServicePoint from "../assets/ServicePoint.jpg";
import AppStore from "../assets/AppStore.png"

const projectData = [
  {
    id: 1,
    name: "Apps Store Platform",
    image: AppStore,
    description:
      "A Play Store-inspired web app where users can browse apps, give ratings and reviews, and securely log in or out using Firebase Authentication. Built entirely with React.",
    stack: ["daisyui", "Firebase", "JavaScript", "React"],
    live: "https://play-store-platform.web.app",
    clientRepo: "https://github.com/developerTamanna/play-store-platform",
  },
  {
    id: 2,
    name: "Recipes App",
    image: RecipeBook,
    description:
      "A simple and clean recipe management app where you can add, view, and organize your favorite recipes easily.",
    stack: ["Firebase", "MongoDB", "Node.js", "React"],
    live: "https://recipe-store-application.web.app",
    clientRepo: "https://github.com/developerTamanna/recipes-stores",
    serverRepo: "https://github.com/developerTamanna/recipes-stores-server",
  },
  {
    id: 3,
    name: "Services Store Platform",
    image: ServicePoint,
    description:
      "A dynamic service store web app where users can explore various services, post new ones, update or delete their own services, and leave reviews. Built with React and Firebase Authentication.",
    stack: ["Express", "Firebase", "MongoDB", "React"],
    live: "https://services-store-app.web.app",
    clientRepo: "https://github.com/developerTamanna/services-stores-client",
    serverRepo: "https://github.com/developerTamanna/services-stores-server",
  },
];

export default projectData;
