import MainPage from "../pages/MainPage";
import AboutPage from "../pages/AboutPage";
import Features from "../pages/Features";
import Galery from "../pages/Galery";
import Pricing from "../pages/Pricing";
import VideoPage from "../pages/VideoPage";
import InstagramPage from "../pages/InstagramPage";
export const routes = [
  { path: "/", element: MainPage },
  { path: "/aboutPage", element: AboutPage },
  { path: "/features", element: Features },
  { path: "/galery", element: Galery },
  { path: "/pricing", element: Pricing },
  { path: "/video", element: VideoPage },
  { path: "/instagram", element: InstagramPage },
];
