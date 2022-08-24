const examples = [
  {
    title: "TRPC Example",
    description: "A simple example of a TRPC",
    code: `import React from "react"`,
  },
];

const Snippets = () => {
  return (
    <div>
      {examples.map(({ title, description, code }, index) => (
        <div key={index}>
          <h3>{title}</h3>
          <p>{description}</p>
          <code>{code}</code>
        </div>
      ))}

      <div>
        <textarea rows={4} cols={50} />
      </div>
    </div>
  );
};

export default Snippets;
