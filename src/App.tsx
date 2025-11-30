
import React from "react";
import { AdventCalendar } from "./components/advent/AdventCalendar";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <>
      <AdventCalendar />
      <Toaster />
    </>
  );
}
