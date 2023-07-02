import icon from "../assets/images/icon.png"

export default function Header() {
  return (
    <div className="header">
      <img src={icon} alt="icon" />
      <h1>my travel journal.</h1>
    </div>
  )
}