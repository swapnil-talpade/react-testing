export const Application = () => {
  return (
    <>
      <h1>Job Aplication</h1>
      <h2>Section 1</h2>
      <p>All field are mandatory</p>
      <img
        src="https://imgs.search.brave.com/7873IszR6dVTgUb2KEIHirplceDgRSr_0oVJxt1Th6E/rs:fit:759:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Y/RktmSks2Y1NLSXRn/dUVlVGJyam5nSGFF/byZwaWQ9QXBp"
        alt="dog images"
      />
      <span title="close">X</span>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="FullName"
            value="Swapnil"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio"></textarea>
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to the terms and
            conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  );
};
