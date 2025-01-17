export default function ContactModal({ contact }) {
  const img = contact.img ? contact.img : "/img//users-img/defaultUserImg.jpg";
  return (
    <>
      <div
        className="modal fade mt-5"
        id={contact.id}
        tabindex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title" id="exampleModalLabel">
                {contact.nome} {contact.cognome}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body m-auto text-center">
              <div className="container-detail-contact-img mb-4 m-auto">
                <img
                  className="detail-contact-img w-100 h-100 shadow rounded"
                  src={img}
                  alt={contact.id}
                />
              </div>

              <div className="text-center">
                <strong className="text-center">Email: </strong>
                <a href={`mailto:${contact.email}`}>
                  <p>{contact.email}</p>
                </a>
                <strong>Tel: </strong>
                <a href={`mailto:${contact.numero_di_telefono}`}>
                  <p>{contact.numero_di_telefono}</p>
                </a>
                <strong>Cod. Fiscale: </strong>
                <p>{contact.cod_fiscale}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Chiudi
              </button>
              <button type="button" className="btn btn-primary">
                Contatta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
