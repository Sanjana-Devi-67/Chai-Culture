const VisualStory = () => {
  return (
    <section className="visual-story" id="story">
      <div className="story-text">
        <h2>Moments Brewed with Tradition</h2>
        <p>
          From quiet mornings to shared conversations, chai has always been more
          than a drink — it’s an experience.
        </p>
      </div>

      <div className="story-images">
        <div
          className="img img-one"
          style={{ backgroundImage: "url('/images/flatlay-flowers.jpg')" }}
        />
        <div
          className="img img-two"
          style={{ backgroundImage: "url('/images/chai-cup.jpg')" }}
        />
        <div
          className="img img-three"
          style={{ backgroundImage: "url('/images/hand-chai.jpg')" }}
        />
      </div>
    </section>
  );
};

export default VisualStory;
