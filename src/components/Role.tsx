export const Role = () => {
  return (
    <>
      <img
        className="border-t border-highlight pt-3"
        src="/INGFO_CAPITAL_2.png"
        alt=""
      />
      <div className="font-body text-lightText px-4 py-5 text-justify">
        <h1 className="font-bold text-xl pb-4 text-darkText">
          Roles Ingfo Capital
        </h1>
        <section className="text-darkText">
          <h1 className="font-bold text-lg pb-2">Founder</h1>
          <p>
            Responsible for the overall vision, policy, and management. Has full
            authority to make strategic decisions, manage roles and permissions,
            and oversee the daily operations of the server.
          </p>
          <br />
        </section>
        <section className="text-highlight">
          <h1 className="font-bold text-lg pb-2">Capo</h1>
          <p>
            Team members entrusted to support the founder in maintaining order
            and security of the server. Capo has special rights to manage
            members, enforce rules, and provide technical support.{" "}
          </p>
          <br />
        </section>
        <section className="text-accent">
          <h1 className="font-bold text-lg pb-2">Famiglia</h1>
          <p>
            Responsible for the overall vision, policy, and management. Has full
            authority to make strategic decisions, manage roles and permissions,
            and oversee the daily operations of the server.
          </p>
        </section>
      </div>
    </>
  );
};
