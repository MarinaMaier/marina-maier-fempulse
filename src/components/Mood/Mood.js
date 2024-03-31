import "./Mood.scss";

export function Mood() {
  return (
    <section className="mood">
      <label htmlFor="mood" className="mood__label">
        Select your mood
      </label>
      <select id="cycle" name="cycle">
        <option value="happy">happy</option>
        <option value="sad">sad</option>
        <option value="neutral">neutral</option>
        <option value="annoyed">annoyed</option>
      </select>
    </section>
  );
}
