import React from "react";
import VacancyCard from "../../components/VacancyCard/VacancyCard";

export default function Vacancies() {
  return (
    <div className="page">
      <h1>Наши вакансии</h1>
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap"
      }}>
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
        <VacancyCard />
      </div>
    </div>
  );
}
