import React from "react";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Admin() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected");
      const json = await res.json();
      if (json.content === "OK") router.push("/dashboard");
    };
    fetchData();
  }, [session]);
  if (!session) {
    return (
      <div>
        <h1>Acesso Negado</h1>
        <h2>Daqui tu n passa</h2>
        <img
          src="https://imgs.search.brave.com/vmAl3WdubqXBqmbg08kPsqLFM6_smapvzDRffJqbMeA/rs:fit:225:224:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUyLzU4/L2RlLzUyNThkZWJh/ODcxN2U0NjA4MzJj/YjE4NGVhOWYxNTNm/LmpwZw"
          alt=""
          width={500}
          height={500}
        />
      </div>
    );
  }
}

export default Admin;
