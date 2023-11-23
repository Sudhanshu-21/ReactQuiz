import { useEffect, useState } from "react";

function useQuizData(idx) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

console.log("DataLoader");
  useEffect(() => {
    async function fetchData() {
      try {
        if (idx) {
          const response = await fetch(`http://localhost:8000/quiz?idx=${idx}`);
          if (response.ok) {
            const quizData = await response.json();
            setData(quizData.quiz);
          } else {
            setError("Failed to fetch data");
          }
        }
      } catch (error) {
        setError("An error occurred while fetching data");
      }
    }

    fetchData();
  }, [idx]);
  
  return { data, error };
}

export default useQuizData;