import { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import { routeConfig } from "../routeConfig/routeConfig";

export default function AppRouter() {
  const elements = useRoutes(Object.values(routeConfig));
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      {elements}
    </Suspense>
  )
}


