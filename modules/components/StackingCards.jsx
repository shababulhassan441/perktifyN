const StackingCards = ({ whyCards, WhyHead }) => {
  const { float2 } = WhyHead;
  return (
    <section className="container pt-0 d-flex mx-w-large paddingXaixs mb-6 stackwrapper-dir gap-80px">
      <div
        className="mx-auto col-xl-4  col-lg-4 col-md-8 col-sm-10  animation-float text-center text-lg-end "
        style={{
          position: "sticky",
          top: "120px",
          alignSelf: "flex-start",
        }}
      >
        <img
          src={float2 || ""}
          className="md-w-70 z-index-3 position-relative top-0px "
          alt=""
        />
      </div>
      <div className="d-flex flex-column gap-250px">
        {whyCards?.map((card, index) => (
          <div
            className="position-sticky top-30"
            key={index}
            style={{ paddingTop: `${20 + index * 20}px` }}
          >
            <div
              className="card-inner bg-white shadow-sm border p-2"
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                transition: "transform 0.3s, filter 0.3s",
              }}
            >
              <div className="d-flex flex-column flex-md-row justify-content-start align-items-center">
                <div className="flex-shrink-0" style={{ width: "40%" }}>
                  <img
                    src={card.icon}
                    alt=""
                    className=""
                    // style={{width:"350px"}}
                  />
                </div>
                <div className="p-4 d-flex flex-column">
                  <h1 className="fs-2 lh-sm fw-bold mb-3 text-black">{card.title}</h1>
                  <p className="mb-0 text-secondary fs-5">{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackingCards;
