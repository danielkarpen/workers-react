import { useState } from "react";
import Form from "./Form";
import Table from "./Table";

const Main = () => {
  const [newName, setNewName] = useState(null);
  const [newJob, setNewJob] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    setNewName(() => event.target.elements[0].value);
    setNewJob(() => event.target.elements[1].value);
  }

  return (
    <main className="container mx-auto flex flex-col gap-4">
      <Table name={newName} job={newJob} />
      <Form handler={handleSubmit} />
    </main>
  );
};

export default Main;
