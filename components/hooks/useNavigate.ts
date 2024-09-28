// components/hooks/useNavigate.ts
import { useEffect, useState } from "react";

const useNavigate = (router) => {
  const [path, setPath] = useState(router.asPath);

  useEffect(() => {
    const handleRouteChange = (url) => {
      setPath(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const push = (url) => {
    router.push(url);
  };

  return { push, path };
};

export default useNavigate;
