import type {
  BrowserHistoryOptions,
  HashHistoryOptions,
  MemoryHistoryOptions,
} from "./history";
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory,
} from "./history";
import type { Router, RouterInit } from "./router";
import { createRouter } from "./router";
import { convertRoutesToDataRoutes } from "./utils";

export type {
  ActionFunction,
  ActionFunctionArgs,
  DataRouteMatch,
  DataRouteObject,
  FormEncType,
  FormMethod,
  JsonFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  ParamParseKey,
  Params,
  PathMatch,
  PathPattern,
  RedirectFunction,
  RouteMatch,
  RouteObject,
  ShouldRevalidateFunction,
  Submission,
} from "./utils";

export {
  // TODO: Do we want to expose this?  Need to for now so remix can deserialize
  // catch responses in the browser
  ErrorResponse,
  deferred,
  generatePath,
  getToPathname,
  invariant,
  isDeferredError,
  isRouteErrorResponse,
  joinPaths,
  json,
  matchPath,
  matchRoutes,
  normalizePathname,
  redirect,
  resolvePath,
  resolveTo,
  stripBasename,
  warning,
} from "./utils";

export type {
  BrowserHistory,
  HashHistory,
  History,
  InitialEntry,
  Location,
  MemoryHistory,
  Path,
  To,
} from "./history";

export {
  Action,
  createBrowserHistory,
  createPath,
  createHashHistory,
  createMemoryHistory,
  parsePath,
} from "./history";

export * from "./router";

export function createMemoryRouter({
  initialEntries,
  initialIndex,
  ...routerInit
}: MemoryHistoryOptions & Omit<RouterInit, "history">): Router {
  let history = createMemoryHistory({ initialEntries, initialIndex });
  return createRouter({ history, ...routerInit });
}

export function createBrowserRouter({
  window,
  ...routerInit
}: BrowserHistoryOptions & Omit<RouterInit, "history">): Router {
  let history = createBrowserHistory({ window });
  return createRouter({ history, ...routerInit });
}

export function createHashRouter({
  window,
  ...routerInit
}: HashHistoryOptions & Omit<RouterInit, "history">): Router {
  let history = createHashHistory({ window });
  return createRouter({ history, ...routerInit });
}

///////////////////////////////////////////////////////////////////////////////
// DANGER! PLEASE READ ME!
// We consider these exports an implementation detail and do not guarantee
// against any breaking changes, regardless of the semver release. Use with
// extreme caution and only if you understand the consequences. Godspeed.
///////////////////////////////////////////////////////////////////////////////

/** @internal */
export { convertRoutesToDataRoutes as UNSAFE_convertRoutesToDataRoutes };
