export function Input({ id, type="text", placeholder="", refEl=undefined, label=undefined, onChangeEvent, addlClass="", children }) {
  return (
    <div className={`field ${addlClass}`}>
      {label && <label className="label">{label}</label>}
      <div className="control">
        <input
          id={id}
          placeholder={placeholder}
          className="input"
          type={type}
          ref={refEl}
          onChange={onChangeEvent}
        ></input>
      </div>
      {children}
    </div>
  )
}
