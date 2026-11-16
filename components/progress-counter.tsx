"use client";

import { useState } from "react";

export default function ProgressCounter() {
  const [completed, setCompleted] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCompleted((value) => value + 1)}>
        Выполнить шаг
      </button>
      <span>Шагов выполнено: {completed}</span>
    </div>
  );
}
