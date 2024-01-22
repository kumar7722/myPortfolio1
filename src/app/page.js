"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import MyNavbar from "./MyNavbar";
import 'bootstrap/dist/css/bootstrap.css';



export default function Home() {
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  useEffect(() => {
    require ('bootstrap/dist/js/bootstrap.js')
}, []);

  useEffect(()=>{

    setMounted(true)
  }, [])
  if(!mounted) return null
  return (
    <main className="">
    </main>
  )
}
