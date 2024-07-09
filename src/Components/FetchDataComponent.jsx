import { useState, useEffect } from "react";

const FetchDataComponent = ({ children }) => {
  const [quranData, setQuranData] = useState([]);
  const [morningAthkar, setMorningAthkar] = useState([]);
  const [eveningAthkar, setEveningAthkar] = useState([]);
  const [sleepingAthkar, setSleepingAthkar] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const quranResponse = await fetch("http://quranapp.somee.com/api/Dashboard/GetAllQuran");
        const quranData = await quranResponse.json();
        setQuranData(quranData);

        const morningResponse = await fetch("http://quranapp.somee.com/api/Dashboard/GetAllAthkarMorning");
        const morningData = await morningResponse.json();
        setMorningAthkar(morningData);

        const eveningResponse = await fetch("http://quranapp.somee.com/api/Dashboard/GetAllAthkarEvening");
        const eveningData = await eveningResponse.json();
        setEveningAthkar(eveningData);

        const sleepingResponse = await fetch("http://quranapp.somee.com/api/Dashboard/GetAllAthkarSleeping");
        const sleepingData = await sleepingResponse.json();
        setSleepingAthkar(sleepingData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {children({
        quranData,
        morningAthkar,
        eveningAthkar,
        sleepingAthkar,
      })}
    </div>
  );
};

export default FetchDataComponent;
