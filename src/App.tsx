import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sections from "./components/Sections";

export type USER = {
  avatar_url: string;
  login: string;
};

export type NavLink = {
  name: string;
  target: string;
};

export type Skill = {
  name: string;
  tags: string[];
};

export type SiteData = {
  role: string;
  birth: number;
  navLinks: NavLink[];
  skills: Skill[];
};

export type REPO = {
  name: string;
  html_url: string;
  description: string;
  language: string | null;
};

export type DATA = {
  siteData: SiteData | null;
  userData: USER | null;
  repos: REPO[] | null;
};

export type Props = {
  data: DATA;
};

export default function App() {
  const [userData, setUserData] = useState<USER | null>(null);
  const [siteData, setSiteData] = useState<SiteData | null>(null);
  const [repos, setRepos] = useState<REPO[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const siteDataFile =
    "https://gist.githubusercontent.com/nyxv3il/38d92f277aabd696f0c507ab880cf617/raw/a938824eb2cb3188c438f7477e020f17fbd01062/nyxv3il.com%2520user%2520data";

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/nyxv3il").then((res) => {
        if (!res.ok) throw new Error("Failed to load GitHub user data");
        return res.json() as Promise<USER>;
      }),
      fetch(siteDataFile).then((res) => {
        if (!res.ok) throw new Error("Failed to load site data");
        return res.json() as Promise<SiteData>;
      }),
      fetch("https://api.github.com/users/nyxv3il/repos").then((res) => {
        if (!res.ok) throw new Error("Failed to load GitHug repositories");
        return res.json() as Promise<REPO[]>;
      }),
    ])
      .then(([githubUser, siteJson, repos]) => {
        setUserData(githubUser);
        setSiteData(siteJson);
        setRepos(repos);
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : "Failed to load data");
      })
      .finally(() => setLoading(false));
  }, []);

  const data = { siteData, userData, repos };

  if (error) return <h1>Error: {error}</h1>;
  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <Navbar data={data} />
      <Sections data={data} />
    </>
  );
}
