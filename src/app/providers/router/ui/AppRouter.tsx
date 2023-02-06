import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "../routeConfig/routeConfig";

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
      {Object.values(routeConfig).map(({path, element}) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
      </Routes>
    </Suspense>
  )
}
