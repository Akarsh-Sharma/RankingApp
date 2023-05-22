import { Counter } from "./components/Counter";
import  RankItems  from "./components/RankItems";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/rank-items',
    element: <RankItems />
  }
];

export default AppRoutes;
