import Entry from "./Entry"
import data from "../data.json"

export default function EntryContainer() {
  const entries = data.map(entry => {
    return (
      <>
        <Entry
          key={entry.id}
          data={entry}
        />
        <hr />
      </>
    )
  })

  return (
    <div className="entry-container">
      {entries}
    </div>
  )
}